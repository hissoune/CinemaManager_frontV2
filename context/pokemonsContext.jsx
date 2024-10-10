import React, { createContext } from 'react'
import useCountries from '../Hooks/useCountries';
import usePokemons from '../Hooks/usePokemons';
export const PokemonsContext = createContext();

export default function PokemonsProvider({ children }) {

    const { pokemons } = usePokemons();

    return (

        <PokemonsContext.Provider value={pokemons}>

            {children}

        </PokemonsContext.Provider>
    )
}
