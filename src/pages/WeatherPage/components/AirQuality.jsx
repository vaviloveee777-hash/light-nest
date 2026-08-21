
const AirQuality = (props) => {
  const {
    airQuality,
  } = props

  return (
    <div>
      {airQuality ? `${airQuality.us_aqi}, ${airQuality.pm2_5}` : "Loading..."}
    </div>
  )
}

export default AirQuality