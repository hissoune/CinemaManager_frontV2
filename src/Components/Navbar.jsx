import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CountriesContext } from '../context/countriesContext.jsx';





function Navbar({sortCountries}) {
    
    return (
        <>
            <nav className="flex justify-center items-center justify-between bg-black px-7 py-8">
                <h1 className="text-white text-2xl font-bold font-serif">React</h1>
                <ul className="flex justify-center items-center gap-5 text-white font-medium text-lg">
                    <Link to="/pokemons" >
                        <li className="hover:text-orange-500 duration-300 cursor-pointer">Pokemons</li>
                    </Link>
                    <Link to="/countries">
                        <li className="hover:text-orange-500 duration-300 cursor-pointer">Countries</li>
                    </Link>
                </ul>
                <div className="flex justify-center items-center gap-2">
                    <input className="py-1 rounded px-2" type="text" />
                    <select className="py-1 rounded px-3">
                        <option value="">All</option>
                        <option value="">Pokemons</option>
                        <option value="">Countries</option>
                    </select>
                    <select className="py-1 rounded px-3" onChange={(e) => sortCountries(e.target.value)}>
                        <option value="acs">Acsending</option>
                        <option value="dcs">Desending</option>
                    </select>



                </div>
            </nav>
        </>
    );
}

export default Navbar;