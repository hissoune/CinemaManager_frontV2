import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from '../client/countriesClient';

function useCountries() {


    const [countries, setCountries] = useState([]);

    function onDelete(name) {
        setCountries((prevCountries) => prevCountries.filter((countrie) => {

            return countrie.translations.bre.official != name

        })

        )
    }

    function sortCountries(order = 'acs') {


        setCountries((prevCountries) => {const sortedArray = prevCountries.sort((a, b) => {
            const nameA = a.translations.bre.official.toUpperCase();
            const nameB = b.translations.bre.official.toUpperCase();
            if (order === 'acs') {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            } else if (order === 'dsc') {
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
            }

            return 0;
        })
        return [...sortedArray];
    })

        // console.log(countries);


    }


    useEffect(() => {
        const getCountries = async () => {
            const response = await axiosInstance.get("/all");
            (response);

            setCountries(response.data);
        }
        getCountries();
    }, [])
    useEffect(() => {
        console.log(countries);

    }, [countries])
    return {
        countries,
        setCountries,
        onDelete,
        sortCountries
    }
}

export default useCountries;