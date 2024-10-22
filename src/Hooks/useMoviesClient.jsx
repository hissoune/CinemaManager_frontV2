import {  useState } from 'react';
import axiosInstance from '../client/axiosInstance';

function useMoviesClient() {
   const [movies , setMovies] = useState([]);
   const [movisLoading,setMovisLoading]=useState(false);
   const [error,setError]=useState(null);



   const getmovies = async ()=>{
        
    setMovisLoading(true);
        try {

            const response = await axiosInstance.get('/public/movies');
        console.log(response);
          
        setMovies(response.data);

        } catch (error) {
            setError(error.message);
        } finally {
            setMovisLoading(false);
        }
    };

  

  return {
    movies,
    getmovies,
    movisLoading,
    error,
  }
  
}

export default useMoviesClient
