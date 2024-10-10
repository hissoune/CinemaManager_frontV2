import React, { useContext } from 'react';
import Navbar from "../Components/Navbar.jsx";
import PokemonCard from "../Components/PokemonsCard.jsx";
import usePokemons from "../Hooks/usePokemons.jsx";
import { PokemonsContext } from '../context/pokemonsContext.jsx';

function Pokemons() {
    const pokemons = useContext(PokemonsContext)

    return (
        <>
            <Navbar />

            <div className="py-10 w-[70%] mx-auto flex flex-wrap gap-3">
                {pokemons.map((pokemon) =>
                    <PokemonCard key={pokemon.pokedex_id} img={pokemon.sprites.regular} name={pokemon.name.fr} hp="test" type="test" />
                )}
            </div>
        </>
    );
}

export default Pokemons;