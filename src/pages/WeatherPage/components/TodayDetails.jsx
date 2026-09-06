const formatTime = (isoString) => {
  const date = new Date(isoString)
  return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
}

const TodayDetails = (props) => {
  const {
    todayDetails,
  } = props

  if (!todayDetails) return <div className="weather-loading">Loading...</div>

  const rows = [
    {label: "Pressure", value: `${Math.round(todayDetails.pressure)} hPa`},
    {label: "UV Index", value: todayDetails.uvIndex},
    {label: "Sunrise", value: formatTime(todayDetails.sunrise)},
    {label: "Sunset", value: formatTime(todayDetails.sunset)},
  ]

  return (
    <div className="today-details">
      <h3
        className="today-details__title"
      >
        Today's Details
      </h3>
      {rows.map((row) => (
        <div
          className="today-details__row"
          key={row.label}
        >
          <span>
            {row.label}
          </span>
          <span
            className="today-details__value"
          >
            {row.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TodayDetails