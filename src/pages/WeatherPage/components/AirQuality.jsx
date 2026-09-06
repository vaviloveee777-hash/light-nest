const aqiLabel = (aqi) => {
  if (aqi <= 50) return "Good"
  if (aqi <= 100) return "Moderate"
  if (aqi <= 150) return "Unhealthy for sensitive groups"
  return "Unhealthy"
}

const AirQuality = (props) => {
  const {
    airQuality,
  } = props

  if (!airQuality) return<div className="weather-loading">Loading...</div>

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
        <span
          className="air-quality__value"
        >{Math.round(airQuality.us_aqi)}
        </span>
        <div
          className="air-quality__info"
        >
          <span
            className="air-quality__status"
          >
            {aqiLabel(airQuality.us_aqi)}
          </span>
          <span
            className="air-quality__pollutant"
          >
            PM2.5: {airQuality.pm2_5}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AirQuality