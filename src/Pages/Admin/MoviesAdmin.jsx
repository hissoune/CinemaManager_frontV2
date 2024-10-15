import { useState } from "react";
import useMoviesAdmin from "../../Hooks/useMoviesAdmin";
import MovieForm from "../../Components/movie/movieForm";

export default function MoviesAdmin() {
  const { movies, moviesLoading } = useMoviesAdmin();
  const [shopop, setShopop] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const showPopup = (movie = null) => {
    setSelectedMovie(movie);
    setShopop(true);
  };

  const hidePopup = () => {
    setShopop(false);
    setSelectedMovie(null);
  };

  if (moviesLoading) return <>loading . . .</>;

  return (
    <div className="p-5 relative">
    
      <div className="my-10">
        <h3 className="text-center text-4xl font-bold text-[#00b4d8]">Movies</h3>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => showPopup()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Movie
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 p-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="card bg-gray-800 w-full p-6 overflow-hidden cursor-pointer transition-transform transform hover:scale-105 shadow-lg rounded-lg"
          >
            <img
              src="/2405f5d1220d45fef53df0bfe804e104.jpg"
              alt="movie"
              className="w-full max-h-96 mx-auto"
            />
            <div className="p-4">
              <h2 className="text-lg text-white text-center font-bold">
                {movie.name || `Movie Title ${index + 1}`}
              </h2>
              <p className="text-white">Short description of the movie goes here.</p>
              <div className="mt-3 flex justify-between text-white px-4 py-2 rounded transition">
                <div>
                  <img
                    src="/delete.png"
                    className="w-10 overflow-hidden cursor-pointer transition-transform transform hover:scale-150"
                    alt="delete"
                  />
                </div>
                <div onClick={() => showPopup(movie)}>
                  <img
                    src="/maintenance.png"
                    className="w-10 overflow-hidden cursor-pointer transition-transform transform hover:scale-150"
                    alt="update"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {shopop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" rounded-lg shadow-lg p-6 w-1/3  ">
            <MovieForm movie={selectedMovie} showme={hidePopup} />
           
          </div>
        </div>
      )}
    </div>
  );
}
