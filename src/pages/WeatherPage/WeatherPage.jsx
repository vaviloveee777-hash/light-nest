import {useEffect, useState} from "react";
import cities from "@/utils/cities"
import CurrentWeather from "@/pages/WeatherPage/components/CurrentWeather.jsx";
import CitySelect from "@/pages/WeatherPage/components/CitySelect.jsx"
import DailyForecast from "@/pages/WeatherPage/components/DailyForecast.jsx";
import HourlyForecast from "@/pages/WeatherPage/components/HourlyForecast.jsx";
import TodayDetails from "@/pages/WeatherPage/components/TodayDetails.jsx";
import AirQuality from "@/pages/WeatherPage/components/AirQuality.jsx";


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
      <CitySelect
        selectedCity={selectedCity}
        onCityChange={(cityName) => {
        setSelectedCity(cityName)

          const city = cities.find((city) => city.name === cityName)
          setCoords({lat: city.lat, lon: city.lon})
        }}
      />

      <CurrentWeather
        weather={weather}
      />

        <DailyForecast
          dailyForecast={dailyForecast}
        />

      <HourlyForecast
        hourlyForecast={hourlyForecast}
      />

      <TodayDetails
      todayDetails={todayDetails}
      />

      <AirQuality
        airQuality={airQuality}
      />

    </div>
  )
}

export default WeatherPage