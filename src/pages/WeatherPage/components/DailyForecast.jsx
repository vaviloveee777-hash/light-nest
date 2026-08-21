import weatherCodes from "@/utils/weatherCodes.js";


const DailyForecast = (props) => {
  const {
    dailyForecast,
  } = props

  return (
    <div>
      {dailyForecast && dailyForecast.map((day) => (
        <div
          key={day.date}
        >
          {day.date} — {day.min}° / {day.max}° — {weatherCodes[day.code]}
        </div>
      ))}
    </div>
  )
}

export default DailyForecast