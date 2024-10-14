import { useState } from "react";
import { useAuthContext } from "../context/AuthContext"; 

export const useFormData = (formtype) => {
    const [formData, setFormData] = useState({});
    const { login ,register} = useAuthContext(); 

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(formtype == 'login'){
                    await login(formData); 

        }else{
            await register(formData); 

        }
    };

    return { formData, onChange, handleSubmit };
};
