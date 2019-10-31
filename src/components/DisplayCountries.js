import React from 'react'
import Country from './Country'

const DisplayCountries = ({countries, showButtonHandler}) => {
    let countryRows
    
    if (countries.length > 10) {
        countryRows = 'Too many matches, specify another filter'
        return (
            <div style={{color:'red'}}>
                <i>{countryRows}</i>
            </div>
        )
    }
    else if (countries.length < 10 && countries.length > 1) {
        countryRows = countries.map(x =>
            <li key={x.name}>{x.name}<button key={x.name} onClick={showButtonHandler} country={x.name}>show</button></li>)
        return (<ul>{countryRows}</ul>)
    }
    else if (countries.length === 1) {
        countryRows = <Country country={countries[0]} />
    }

    return (
        <div>
            {countryRows}
        </div>
    )
}

export default DisplayCountries