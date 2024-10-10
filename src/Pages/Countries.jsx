import React, { useContext, useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import CountryCard from "../Components/Countries/CountriesCard.jsx";
import useCountries from "../Hooks/useCountries.jsx";
import { CountriesContext } from '../context/countriesContext.jsx';
import AddingPopUp from '../Components/Countries/AddingPopUp.jsx';

function Countries() {

    const { countries, onDelete, sortCountries } = useContext(CountriesContext)
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <Navbar sortCountries={sortCountries} />
            {toggle && <AddingPopUp />}
            <button className='z-50 fixed bottom-11 left-7' onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'show'}</button>
            <div className="py-10 w-[70%] mx-auto flex flex-wrap gap-3">
                {countries.map((country) => (
                    <CountryCard key={country.name.common} img={country.flags[0]} arabicName={country.translations.ara.official} currency="G" englishName={country.translations.bre.official} deleteHandler={onDelete} />
                ))}

            </div>
        </div>
    );
}

export default Countries;