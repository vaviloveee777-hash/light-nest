import weatherCodes from "@/utils/weatherCodes.js"

const CurrentWeather = (props) => {
  const {
    weather,
  } = props

  if (!weather)
    return
  <div
    className="weather-loading"
  >
    Loading...
  </div>

  const stats = [
    {label: "Humidity", value: `${weather.relative_humidity_2m}%`},
    {label: "Wind", value: `${Math.round(weather.wind_speed_10m)} km/h`},
    {label: "Visibility", value: `${Math.round(weather.visibility / 1000)} km`},
  ]

  return (
    <div className="current-weather">
      <p
        className="current-weather__location"
      >
        Current Location
      </p>

      <div className="current-weather__row">
        <span
          className="current-weather__temp"
        >
          {Math.round(weather.temperature_2m)}°
        </span>
        <div
          className="current-weather__condition"
        >
          <span
            className="current-weather__condition-text"
          >
            {weatherCodes[weather.weather_code]}
          </span>
          <span
            className="current-weather__feels"
          >
            Feels like {Math.round(weather.apparent_temperature)}°
          </span>
        </div>
      </div>

      <div className="current-weather__stats">
        {stats.map((stat) => (
          <div
            className="current-weather__stat"
            key={stat.label}
          >
            <span
              className="current-weather__stat-label"
            >
              {stat.label}
            </span>
            <span
              className="current-weather__stat-value"
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrentWeather