import { MapPin, ChevronDown, Droplet, Wind, Eye } from "lucide-react"
import CitySelect from "@/pages/WeatherPage/components/CitySelect.jsx"

const WeatherHero = (props) => {
  const {
    updatedAt,
    temp,
    feelsLike,
    condition,
    conditionIcon,
    humidity,
    wind,
    visibility,
    selectedCity,
    onCityChange,
  } = props

  const stats = [
    { icon: Droplet, label: "Humidity", value: `${humidity}%` },
    { icon: Wind, label: "Wind", value: `${wind} km/h` },
    { icon: Eye, label: "Visibility", value: `${visibility} km` },
  ]
  const Icon = conditionIcon

  return (
    <section className="weather-hero">
      <div className="weather-hero__content">
        <div className="weather-hero__header">
          <div className="weather-hero__location">
            <MapPin
              size={16}
            />
            <CitySelect
              selectedCity={selectedCity}
              onCityChange={onCityChange}
            />
            <ChevronDown
              size={14}
              className="weather-hero__chevron"
            />
          </div>
          <span className="weather-hero__updated">Updated {updatedAt}</span>
        </div>

        <div className="weather-hero__temp-row">
          <span className="weather-hero__temp">{temp}°</span>
          {Icon && <Icon className="weather-hero__condition-icon" />}
        </div>

        <p className="weather-hero__condition">{condition}</p>
        <p className="weather-hero__feels-like">Feels like {feelsLike}°</p>

        <ul className="weather-hero__stats">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <li className="weather-hero__stat" key={index}>
                <Icon size={20} />
                <div className="weather-hero__stat-text">
                  <span className="weather-hero__stat-label">{stat.label}</span>
                  <span className="weather-hero__stat-value">{stat.value}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default WeatherHero