import {useEffect, useState} from "react";
import weatherCodes from "@/utils/weatherCodes"


const WeatherPage = () => {

  const [coords, setCoords] = useState(null)

  const [weather, setWeather] = useState(null)

  const [dailyForecast, setDailyForecast] = useState(null)

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

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,visibility&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`

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
    }

    fetchWeather()
  }, [coords])

  return (
    <div>
      {weather ? `${weather.temperature_2m}, ${weather.apparent_temperature}, ${weather.relative_humidity_2m}, ${weather.wind_speed_10m}, ${weatherCodes[weather.weather_code]}, ${weather.visibility}` : "Loading..."}
      <div>
        {dailyForecast && dailyForecast.map((day) => (
          <div key={day.date}>
            {day.date} — {day.min}° / {day.max}° — {weatherCodes[day.code]}
          </div>
        ))}
      </div>
    </div>

  )
}

export default WeatherPage