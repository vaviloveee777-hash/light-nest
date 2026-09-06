import weatherCodes from "@/utils/weatherCodes.js"

const formatDay = (isoDate, index) => {
  if (index === 0) return "Today"
  const date = new Date(isoDate)
  return date.toLocaleDateString("en-US", {weekday: "short"})
}

const DailyForecast = (props) => {
  const {
    dailyForecast,
  } = props

  return (
    <div className="daily-forecast">
      <h3
        className="daily-forecast__title"
      >
        7-Day Forecast
      </h3>
      {dailyForecast && dailyForecast.map((day, index) => (
        <div
          className="daily-forecast__row"
          key={day.date}
        >
          <span
            className="daily-forecast__day"
          >
            {formatDay(day.date, index)}
          </span>
          <div
            className="daily-forecast__bar"
          >
            <span
              className="daily-forecast__min"
            >
              {Math.round(day.min)}°
            </span>
            <span
              className="daily-forecast__track"
            />
            <span
              className="daily-forecast__max"
            >{Math.round(day.max)}°
            </span>
          </div>
          <span
            className="daily-forecast__label"
          >
            {weatherCodes[day.code]}
          </span>
        </div>
      ))}
    </div>
  )
}

export default DailyForecast