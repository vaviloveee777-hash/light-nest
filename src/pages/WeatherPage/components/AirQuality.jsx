const aqiLabel = (aqi) => {
  if (aqi <= 50) return "Good"
  if (aqi <= 100) return "Moderate"
  if (aqi <= 150) return "Unhealthy for sensitive groups"
  return "Unhealthy"
}

const aqiDescription = (aqi) => {
  if (aqi <= 50) return "Air quality is considered satisfactory, and air pollution poses little or no risk."
  if (aqi <= 100) return "Air quality is acceptable, but there may be moderate health concerns for a small number of sensitive individuals."
  if (aqi <= 150) return "Members of sensitive groups may experience health effects."
  return "Everyone may begin to experience health effects."
}

const AirQuality = (props) => {
  const {
    airQuality,
  } = props

  if (!airQuality) return<div className="weather-loading">Loading...</div>

  const aqi = Math.round(airQuality.us_aqi)
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(aqi / 300, 1)
  const offset = circumference - progress * circumference

  return (
    <div className="air-quality">
      <h3
        className="air-quality__title"
      >
        Air Quality
      </h3>
      <div
        className="air-quality__row"
      >
        <div className="air-quality__gauge">
          <svg viewBox="0 0 120 120" className="air-quality__gauge-svg">
            <circle
              cx="60"
              cy="60"
              r={radius}
              className="air-quality__gauge-track"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              className="air-quality__gauge-progress"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset,
              }}
            />
          </svg>
          <div className="air-quality__gauge-text">
            <span className="air-quality__gauge-value">{aqi}</span>
            <span className="air-quality__gauge-label">{aqiLabel(aqi)}</span>
          </div>
        </div>
        <p
          className="air-quality__description"
        >
          {aqiDescription(aqi)}
        </p>
      </div>
      <div
        className="air-quality__pollutant-row"
      >
        <span className="air-quality__pollutant-label">Primary Pollutant</span>
        <span className="air-quality__pollutant-value">PM2.5</span>
      </div>
    </div>
  )
}

export default AirQuality