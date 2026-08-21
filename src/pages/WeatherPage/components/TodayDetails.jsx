
const TodayDetails = (props) => {
  const {
    todayDetails,
  } = props

  return (
    <div>
      {todayDetails ? `${todayDetails.pressure}, ${todayDetails.uvIndex}, ${todayDetails.sunrise}, ${todayDetails.sunset}` : "Loading..."}
    </div>
  )
}

export default TodayDetails