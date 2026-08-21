import weatherCodes from "@/utils/weatherCodes.js";


const CurrentWeather = (props) => {
  const {
    weather,
  } = props

  return (
    <>
    {weather ? `${weather.temperature_2m}, ${weather.apparent_temperature}, ${weather.relative_humidity_2m}, ${weather.wind_speed_10m}, ${weatherCodes[weather.weather_code]}, ${weather.visibility}` : "Loading..."}
    </>
  )
}

export default CurrentWeather