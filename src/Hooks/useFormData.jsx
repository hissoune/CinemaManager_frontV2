import { useState } from "react";
import { useAuthContext } from "../context/AuthContext"; 

export const useFormData = () => {
    const [formData, setFormData] = useState({});
    const { login } = useAuthContext(); 

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(formData); 
    };

    return { formData, onChange, handleSubmit };
};
