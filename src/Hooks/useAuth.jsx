import { useEffect, useState } from 'react';
import axiosInstance from '../client/axiosInstance';

function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (formData) => {
        try {
            const response = await axiosInstance.post('/auth/login', formData);
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user)
        } catch (err) {
            setError(err.response.data.message); 
        }
    };
      const register = async (formData)=>{
        try {
            const response = await axiosInstance.post('/auth/register', formData);
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user)
        } catch (err) {
            setError(err.response.data.message); 
        }
      }
    const logout = async () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get('/auth/profile');
                setUser(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, []);

    return { user, loading, error, login,register, logout };
}

export default useAuth;
