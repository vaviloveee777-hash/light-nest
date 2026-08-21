import cities from '@/utils/cities'

const CitySelect = (props) => {
  const {
    selectedCity,
    onCityChange,
  } = props


  return (
    <div>
      <select
        value={selectedCity}
        onChange={(event) => onCityChange(event.target.value)}
      >
        {cities.map((city) => (
          <option
            key={city.name}
            value={city.name}
          >
            {city.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CitySelect