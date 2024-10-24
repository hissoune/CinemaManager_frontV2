import {  useState } from "react";
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
    } catch (error) {
      setError(error.message);
    } finally {
      setMoviesLoading(false);
    }
  };


  const updateMovie = async (movieData, movieId) => {
    setMoviesLoading(true);
    try {
      const response = await axiosInstance.put('/movies/update/' + movieId, movieData);

      setMovies((prevMovies) => {
        const updatedMovies = prevMovies.map((movie) => 
          movie._id === movieId ? { ...movie, ...response.data } : movie
        );
        return [...updatedMovies] ;
      });
      
    } catch (error) {
      setError(error.message);
    } finally {
      setMoviesLoading(false);
    }
  };
  const createMovie = async (movieData) => {
    setMoviesLoading(true);
    try {
      const response = await axiosInstance.post('/movies/create', movieData);
       
      setMovies((prev) => [...prev, response.data]);
      
    } catch (error) {
      setError(error.message);
      
    } finally {
      setMoviesLoading(false);
    }
  };

  const deleteMovie = async (movieId) => {
    setMoviesLoading(true);
    try {
      await axiosInstance.delete('/movies/delete/' + movieId);

      setMovies((prevMovies) => {
        const filteredMovies = prevMovies.filter((movie) => movie._id !== movieId);
        return filteredMovies;
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setMoviesLoading(false);
    }
  };

  return {
    updateMovie,
    deleteMovie,
    createMovie,
    getMovies,
    movies,
    moviesLoading,
    error,
  };
}
