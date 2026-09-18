import { CloudRain, Droplet } from "lucide-react"

const formatHour = (time) => {
  const date = new Date(time)
  return date.getHours() + ":00"
}

const Precipitation = (props) => {
  const { hourlyForecast } = props

  if (!hourlyForecast) return <div className="weather-loading">Loading...</div>

  const currentChance = hourlyForecast[0].precipitation

  return (
    <div className="precipitation">
      <h3 className="precipitation__title">
        <Droplet size={16} />
        Precipitation
      </h3>

      <div className="precipitation__row">
        <span className="precipitation__label">
          <CloudRain size={14} />
          Chance of rain
        </span>
        <span className="precipitation__value">{currentChance}%</span>
      </div>

      <div className="precipitation__chart">
        {hourlyForecast.map((hour, index) => (
          <div className="precipitation__bar-wrap" key={index}>
            <div
              className="precipitation__bar"
              style={{ height: `${(hour.precipitation / 100) * 40}px` }}
            />
            <span className="precipitation__time">
              {index === 0 ? "Now" : formatHour(hour.time)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Precipitation