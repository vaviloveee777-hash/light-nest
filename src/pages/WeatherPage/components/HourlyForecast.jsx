import weatherCodes from "@/utils/weatherCodes.js";


const HourlyForecast = (props) => {
  const {
    hourlyForecast,
  } = props

  return (
    <div>
      {hourlyForecast && hourlyForecast.map((day) => (
        <div
          key={day.time}
        >
          {day.time} — {day.temp}° — {weatherCodes[day.code]}
        </div>
      ))}
    </div>
  )
}

export default HourlyForecast