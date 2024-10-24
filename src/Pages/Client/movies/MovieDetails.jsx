import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "../../../Components/auth/Favorites";
import RatingStars from "../../../Components/movie/RatingStars";
import Comments from "../../../Components/Comments";
import useMoviesClient from "../../../Hooks/useMoviesClient";

export default function MovieDetails() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { movies, movisLoading, error, getRelatedMovies } = useMoviesClient();

  const location = useLocation();
  const { movie } = location.state || {}; 
  const navigate = useNavigate();

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleMovieClick = (movie) => {
    navigate(`/movies/${movie._id}`, { state: { movie } });
  };

  useEffect(() => {
    getRelatedMovies(movie._id);
  }, []);

  if (movisLoading) return <div>Loading movies...</div>;

  if (error) return <div>Error fetching movies: {error}</div>;

  if (!movie) return <div>No movie data found</div>;

  return (
    <div className="">
      <div className="relative bg-center bg-cover bg-no-repeat h-96 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('${movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}')`,
          width: '100%',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 text-white">{movie.title}</h1>
        </div>

        <div className="absolute left-4 sm:left-20 md:left-32 lg:left-48 top-4 border-2 bg-cover border-[#C23C39] h-72 sm:h-[400px] lg:h-[500px] w-40 sm:w-[250px] lg:w-[350px]">
          <div className="bg-cover bg-no-repeat bg-center w-full h-full"
            style={{
              backgroundImage: `url('${movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}')`,
              width: '100%',
            }}
          >
          </div>
          <div className="flex justify-between mt-4">
            <Favorites movie={movie} />
            <RatingStars movie={movie} />
          </div>
        </div>
      </div>

      <div className="text-white grid grid-cols-12 p-4">
        <div className="lg:col-span-6 "></div>
        <div className="col-span-12 lg:col-span-6 ">
          <p
            className={`text-white mt-4 w-full cursor-pointer ${isExpanded ? '' : 'line-clamp-4 overflow-hidden'}`} 
            onClick={toggleDescription}
          >
            {movie.description}
          </p>
          <div className="text-white mt-4 flex flex-wrap gap-2">
            {movie.genre.map((genre, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="my-20 grid grid-cols-12 gap-4">
        <div className="col-span-12 p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-white font-bold mb-4">Watch here</h2>
          <video controls className="w-full max-h-[300px] md:max-h-[500px] border-1">
            <source src={movie.videoUrl} type="video/mp4" className="w-full" />
          </video>
        </div>

        <div className="col-span-12 p-6">
          <div className="max-h-[400px] md:max-h-[600px] lg:max-h-[900px] h-full overflow-hidden my-12 relative">
            <div className="overflow-auto h-full w-full">
              <Comments movieId={movie._id} />
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
        </div>

        <div className="col-span-12 p-6">
          <div className="h-full shadow-sm my-12 flex flex-col justify-center items-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center my-4 font-bold text-gray-900 dark:text-white">Related Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              {movies?.map((movie, index) => (
                <div
                  key={index}
                  onClick={() => handleMovieClick(movie)}
                  className="relative bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px] lg:h-[500px] w-[200px] md:w-[250px] lg:w-[350px] my-6 p-6 cursor-pointer transition-transform transform hover:scale-105 shadow-2xl rounded-lg"
                  style={{
                    backgroundImage: `url('${movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div>
                      <h2 className="text-sm sm:text-lg text-white text-center font-bold">
                        {movie.title || `Movie Title ${index + 1}`}
                      </h2>
                      <p className="text-white text-center">
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
        </div>
      </div>
    </div>
  );
}
