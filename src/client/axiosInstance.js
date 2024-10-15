import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_BACKEND || 'http://localhost:3000/api',
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token'); 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type']='multipart/form-data'
    }

    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
