import { useEffect, useState } from "react"
import axiosInstance from '../client/axiosInstance';

export default function useMoviesAdmin() {
    const [movies,setMovies] = useState([]);
    const [moviesLoading,setMviesLoading] = useState(false);
    const [error,setError] = useState(null);

const updateMovie = async (movieData ,movieId)=>{
    setMviesLoading(true);
    try {
        console.log(movieId);
        
        const response = await axiosInstance.put('/movies/:'+movieId,movieData);
        setMovies(response.data);
    } catch (error) {
        setError(error.message);
       
        
}}
    useEffect(()=>{
      const getmovies =async ()=>{
        setMviesLoading(true);
            try {
                const response = await axiosInstance.get('/movies');
                setMovies(response.data);
            } catch (error) {
                setError(error.message);
               
                
            } 
        };

        getmovies();
        
        setMviesLoading(false);

      },[])

  return {
    updateMovie,
    movies,
    moviesLoading,
    error,
  }

    



}
