import { useEffect, useState } from 'react';
import axiosInstance from '../client/axiosInstance';

function useMoviesClient() {
   const [movies , setMovies] = useState([]);
   const [movisLoading,setMovisLoading]=useState(false);
   const [error,setError]=useState(null);



   const getmovies = async ()=>{
        
    setMovisLoading(true);
        try {

            const response = await axiosInstance.get('/public/movies');
      
        
        setMovies(response.data);
console.log(movies);

        } catch (error) {
            setError(error.message);
        } finally {
            setMovisLoading(false);
        }
    };

      useEffect(()=>{
        getmovies();
        
      },[])

  return {
    movies,
    movisLoading,
    error,
  }
  
}

export default useMoviesClient
