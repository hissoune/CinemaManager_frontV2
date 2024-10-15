import { useEffect, useState } from "react";
import axiosInstance from '../client/axiosInstance';

export default function useMoviesAdmin() {
  const [movies, setMovies] = useState([]);
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    setMoviesLoading(true);
    try {
      const response = await axiosInstance.get('/movies');
      setMovies(response.data); 
      console.log("Movies fetched:", response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setMoviesLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const updateMovie = async (movieData, movieId) => {
    setMoviesLoading(true);
    try {
      const response = await axiosInstance.put('/movies/update/' + movieId, movieData);
      console.log("Updated movie data:", response.data); 

      setMovies((prevMovies) => 
        prevMovies.map((movie) =>
          movie._id === movieId ? { ...movie, ...movieData } : movie
        )
      );
      
    } catch (error) {
      setError(error.message);
    } finally {
      setMoviesLoading(false);
    }
  };

  return {
    updateMovie,
    movies,
    moviesLoading,
    error,
  };
}
