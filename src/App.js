import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'

function App() {
  const [countries, setCountries] = useState([]) 
  const [countryFilter, setCountryFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }

  const handleShowCountry = (event) => {
    setCountryFilter(event.target.attributes.country.value)
  }

  const countriesToShow = countryFilter.length === 0 ? countries : countries.filter(c => c.name.toLowerCase().includes(countryFilter.toLowerCase()))

  return (
    <div>
      find countries<br />
      <input value={countryFilter} onChange={handleFilterChange} />
      <DisplayCountries countries={countriesToShow} showButtonHandler={handleShowCountry} />
    </div>
  )
}

export default App