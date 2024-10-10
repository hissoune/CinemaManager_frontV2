import axios from 'axios';

 const axiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3/', 
  
}); 
axiosInstance.interceptors.request.use(
  function (config) {
    const token = 'xyz'; 
     if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);

export default axiosInstance;