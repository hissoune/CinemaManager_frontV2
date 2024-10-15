import { useEffect, useState } from 'react';
import axiosInstance from '../client/axiosInstance';

function useMoviesClient() {
   const [movies , setMovies] = useState();
   const [movisLoading,setMovisLoading]=useState(false);
   const [error,setError]=useState(null);

      useEffect(()=>{


      const getmovies =async ()=>{
        
        setMovisLoading(true);
            try {

                const response = await axiosInstance.get('/public/movies');

                setMovies(response.data);

            } catch (error) {
                setError(error.message);
            } finally {
                setMovisLoading(false);
            }
        };

        getmovies();
        console.log(movies);
        
      }

      )

  return {
    movies,
    movisLoading,
    error,
  }
  
}

export default useMoviesClient
