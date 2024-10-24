import { useEffect, useState } from 'react';
import axiosInstance from '../client/axiosInstance';
import { Navigate } from 'react-router-dom';

function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (formData) => {

        try {
            const response = await axiosInstance.post('/auth/login', formData);


       
            localStorage.setItem('token', response.data.token);
          
         console.log(response.data.token);
         
            setUser(response.data.user);
      
        } catch (err) {
          
            setError(err.msg); 
            
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
      };

      const updateUser = async (formData) => {
        try {
            const response = await axiosInstance.put('/auth/profile', formData);
            setUser(response.data); 
            
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };
   const favorites = async (movieId)=>{
    
    try {
    
        const response = await axiosInstance.put('/auth/profile/favorites/'+movieId);
        setUser(response.data); 
    } catch (err) {
        setError(err.response?.data?.message || err.message);
    }
   }
    const logout = async () => {
        localStorage.removeItem('token');
        setUser(null);
        <Navigate to={'/'}/>
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

    const requestPasswordReset = async (email) => {
        try {
            const response = await axiosInstance.post('/auth/reset-password', { email });
            console.log(response.data.msg);
            
            return response.data.msg;
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    return { user, loading, error, login,register,updateUser,favorites,requestPasswordReset,logout };
}

export default useAuth;
