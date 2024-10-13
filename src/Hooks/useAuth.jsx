import { useEffect, useState } from 'react';
import axiosInstance from '../client/axiosInstance';

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosInstance.get('/auth/profile');
        setUser(response.data); 
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        setUser(null);
      } finally {
        setLoading(false); 
      }
    };

    getUser();
  }, []);

  return {
    user,
    loading,
  };
}

export default useAuth;
