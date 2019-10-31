import React from 'react'

const Country = ({country}) => {
    const languages = country.languages.map(l => 
        <li key={l.name}>{l.name}</li>)
    return (
        <div>
            <div><h2>{country.name}</h2></div>
            capital: {country.capital}
            <br />
            population: {country.population}
            <div>
                <h3>languages:</h3>
                <ul>{languages}</ul>
            </div>
            <img src={country.flag} alt="" width="200px" height="120px" />
        </div>
    )
}

export default Country