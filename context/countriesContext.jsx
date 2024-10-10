import React, { createContext } from 'react'
import useCountries from '../Hooks/useCountries';

export const CountriesContext = createContext();

export default function CountriesProvider({ children }) {

    const { countries, setCountries, onDelete, sortCountries } = useCountries();

    const newCountries = countries.filter((countrie) => {

        return countrie.translations.bre.official != 'Stad Israel'

    })

    return (

        <CountriesContext.Provider value={{ countries: newCountries, setCountries, onDelete, sortCountries }}>

            {children}

        </CountriesContext.Provider>
    )
}
