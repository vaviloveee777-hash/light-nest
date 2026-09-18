import weatherCodes from "@/utils/weatherCodes.js"
import getWeatherIcon from "@/utils/weatherIcons"

const formatHour = (isoString, index) => {
  if (index === 0) return "Now"
  const date = new Date(isoString)
  return `${date.getHours().toString().padStart(2, "0")}:00`
}

const HourlyForecast = (props) => {
  const {
    hourlyForecast,
  } = props

  return (
    <div className="hourly-forecast">
      <h3
        className="hourly-forecast__title"
      >
        Hourly Forecast
      </h3>
      <div
        className="hourly-forecast__list"
      >
        {hourlyForecast && hourlyForecast.map((hour, index) => {
          const Icon = getWeatherIcon(hour.code)
          return (
            <div
              className={`hourly-forecast__item ${index === 0 ? "hourly-forecast__item--now" : ""}`}
              key={hour.time}
            >
              <span
                className="hourly-forecast__time"
              >{formatHour(hour.time, index)}
              </span>
              <Icon
                size={20}
                className="hourly-forecast__icon"
              />
              <span
                className="hourly-forecast__temp"
              >{Math.round(hour.temp)}°
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HourlyForecast