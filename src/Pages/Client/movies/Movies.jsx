import { useNavigate } from "react-router-dom";
import useMoviesClient from "../../../Hooks/useMoviesClient";
import Favorites from "../../../Components/auth/Favorites";
import { useEffect } from "react";

export default function Movies() {
  const { movies, movisLoading, error,getmovies } = useMoviesClient();
  const navigate = useNavigate();
  
  const handleMovieClick = (movie) => {
    navigate(`/movies/${movie._id}`, { state: { movie } });
  };

  useEffect(()=>{
    getmovies();
    
  },[])

  if (movisLoading ) return <div>Loading movies...</div>;

  if (error) return <div>Error fetching movies: {error}</div>;

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">Movies</h1>
      <div className="grid grid-cols-12 lg:grid-cols-12 gap-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="col-span-4 relative bg-cover bg-center bg-no-repeat w-full h-96 p-6 cursor-pointer transition-transform transform hover:scale-105 shadow-2xl rounded-lg group"
            style={{
              backgroundImage: `url('${movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}')`,
            }}
            onClick={() => handleMovieClick(movie)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div>
                <h2 className="text-lg text-white text-center font-bold">
                  {movie.title || `Movie Title ${index + 1}`}
                </h2>
                <p className="text-white text-center">
                  Short description of the movie goes here.
                </p>
              </div>
            </div>
           <div><Favorites movie={movie}/></div>
          </div>
        ))}
      </div>
    </div>
  );
}
