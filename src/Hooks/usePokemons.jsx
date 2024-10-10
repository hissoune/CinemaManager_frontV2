import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstancePokems from '../client/pokemonsClient';

function usePokemons() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const getPokemons = async () => {
            const response = await axiosInstancePokems.get('/gen/2');
            setPokemons((x) => {
                return response.data;
            });

        };
        getPokemons();

    }, []);

    useEffect(() => {
        // console.log(pokemons);
    }, [pokemons]);
    return {
        pokemons,
    }
}

export default usePokemons;