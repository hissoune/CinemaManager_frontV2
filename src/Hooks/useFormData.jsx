import { useContext, useState } from "react"
import useCountries from "./useCountries"
import { CountriesContext } from "../context/countriesContext"


export const useFormData = () => {

    const [formData, setFormData] = useState({})
    const { countries, setCountries } = useContext(CountriesContext)


    function onChange({ name, value }) {
        setFormData({ ...formData, [name]: value })
    }
    function handlSubmit() {

        const country = {
            name: {
                common: formData.arabName
            },
            flags: [
                "https://flagcdn.com/w320/gi.png"
            ],
            translations: {
                ara: {
                    official: formData.arabName
                },
                bre: {
                    official: formData.englishName
                }
            }
        }


        setCountries([...countries, country])


    }
    return { onChange, formData, handlSubmit }

}