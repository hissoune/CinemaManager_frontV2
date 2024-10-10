import axios from 'axios';

 const axiosInstancePokems = axios.create({
  baseURL: 'https://tyradex.tech/api/v1', 
  
}); 
axiosInstancePokems.interceptors.request.use(
  function (config) {
    const token = 'pokemons token'; 
     if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);

export default axiosInstancePokems;