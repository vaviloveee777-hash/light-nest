import cities from "@/utils/cities"

const CitySelect = (props) => {
  const {
    selectedCity,
    onCityChange,
  } = props

  return (
    <select
      className="city-select"
      value={selectedCity}
      onChange={(event) => onCityChange(event.target.value)}
    >
      <option
        value=""
      >
        My location
      </option>
      {cities.map((city) => (
        <option
          key={city.name}
          value={city.name}
        >
          {city.name}
        </option>
      ))}
    </select>
  )
}

export default CitySelect