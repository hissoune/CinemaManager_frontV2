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

    const getRelatedMovies =async (moviId)=>{
      setMovisLoading(true);
        try {

            const response = await axiosInstance.get('/relatedMovies/'+moviId);
          console.log(response.data);
          
        setMovies(response.data.RelatedMovies
        );

        } catch (error) {
            setError(error.message);
        } finally {
            setMovisLoading(false);
        }

    }

  

  return {
    movies,
    getmovies,
    getRelatedMovies,
    movisLoading,
    error,
  }
  
}

export default useMoviesClient
