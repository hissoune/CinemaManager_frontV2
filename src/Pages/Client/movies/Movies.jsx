import { useNavigate } from "react-router-dom";
import useMoviesClient from "../../../Hooks/useMoviesClient";
import Favorites from "../../../Components/auth/Favorites";
import { useEffect } from "react";

export default function Movies() {
  const { movies, movisLoading, error, getmovies } = useMoviesClient();
  const navigate = useNavigate();
  
  const handleMovieClick = (movie) => {
    navigate(`/movies/${movie._id}`, { state: { movie } });
  };

  useEffect(() => {
    getmovies();
  }, []);

  if (movisLoading) return <div>Loading movies...</div>;

  if (error) return <div>Error fetching movies: {error}</div>;

  return (
    <div className="h-full my-12 flex flex-col justify-center items-center px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full  ">
        {movies?.map((movie, index) => (
          <div
            key={index}
            onClick={() => handleMovieClick(movie)}
            className="relative bg-cover bg-center bg-no-repeat lg:my-6 h-[400px] sm:h-[450px] md:h-[500px] w-full sm:w-[300px] md:w-[350px] mx-auto cursor-pointer transition-transform transform hover:scale-105 shadow-2xl rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url('${movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h2 className="text-lg md:text-xl text-white text-center font-bold">
                  {movie.title || `Movie Title ${index + 1}`}
                </h2>
                <p className="text-white text-center text-sm md:text-base mt-2">
                  {movie.description || "Short description of the movie goes here."}
                </p>
              </div>
            </div>
            <div>
              <Favorites movie={movie} />
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .overflow-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
