import {useEffect, useState} from "react";
import weatherCodes from "@/utils/weatherCodes"
import cities from "@/utils/cities"


const WeatherPage = () => {

  const [coords, setCoords] = useState(null)

  const [weather, setWeather] = useState(null)

  const [dailyForecast, setDailyForecast] = useState(null)

  const [hourlyForecast, setHourlyForecast] = useState(null)

  const [todayDetails, setTodayDetails] = useState(null)

  const [airQuality, setAirQuality] = useState(null)

  const [selectedCity, setSelectedCity] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    })
  }, [])

  useEffect(() => {
    if (!coords) return

    const params = new URLSearchParams({
      latitude: coords.lat,
      longitude: coords.lon,
      current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,surface_pressure,visibility",
      daily: "temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset,weather_code",
      hourly: "temperature_2m,weather_code",
      timezone: "auto"
    })
    const url = `https://api.open-meteo.com/v1/forecast?${params}`

    const fetchWeather = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setWeather(data.current)

      const daily = data.daily.time.map((date, index) => {
        return {
          date: date,
          max: data.daily.temperature_2m_max[index],
          min: data.daily.temperature_2m_min[index],
          code: data.daily.weather_code[index]
        }
      })
      setDailyForecast(daily)

      const hourly = data.hourly.time.map((time, index) => {
        return {
          time: time,
          temp: data.hourly.temperature_2m[index],
          code: data.hourly.weather_code[index],
        }
      })

      const now = new Date()
      now.setMinutes(0, 0, 0)

      const currentIndex = hourly.findIndex((hour) => {
        return new Date(hour.time).getTime() === now.getTime()
      })

      const upcomingHours = hourly.slice(currentIndex, currentIndex + 6)
      setHourlyForecast(upcomingHours)

      const today = {
        pressure: data.current.surface_pressure,
        uvIndex: data.daily.uv_index_max[0],
        sunrise: data.daily.sunrise[0],
        sunset: data.daily.sunset[0]
      }
      setTodayDetails(today)
    }
    fetchWeather()
  }, [coords])

  useEffect(() => {
    if (!coords) return

    const params = new URLSearchParams({
      latitude: coords.lat,
      longitude: coords.lon,
      current: "us_aqi,pm2_5",
    })
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?${params}`

    const fetchAirQuality = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setAirQuality(data.current)
    }
    fetchAirQuality()
  }, [coords])

  return (
    <div>
      <select
        value={selectedCity}
        onChange={(event) => {
          const cityName = event.target.value
          setSelectedCity(cityName)

          const city = cities.find((city) => city.name === cityName)
          setCoords({ lat: city.lat, lon: city.lon })
        }}
      >
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      {weather ? `${weather.temperature_2m}, ${weather.apparent_temperature}, ${weather.relative_humidity_2m}, ${weather.wind_speed_10m}, ${weatherCodes[weather.weather_code]}, ${weather.visibility}` : "Loading..."}
      <div>
        {dailyForecast && dailyForecast.map((day) => (
          <div
            key={day.date}
          >
            {day.date} — {day.min}° / {day.max}° — {weatherCodes[day.code]}
          </div>
        ))}
      </div>

      <div>
        {hourlyForecast && hourlyForecast.map((day) => (
          <div
            key={day.time}
          >
            {day.time} — {day.temp}° — {weatherCodes[day.code]}
          </div>
        ))}
      </div>

      <div>
        {todayDetails ? `${todayDetails.pressure}, ${todayDetails.uvIndex}, ${todayDetails.sunrise}, ${todayDetails.sunset}` : "Loading..."}
      </div>

      <div>
        {airQuality ? `${airQuality.us_aqi}, ${airQuality.pm2_5}` : "Loading..."}
      </div>

    </div>
  )
}

export default WeatherPage