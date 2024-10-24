import { useEffect, useState } from "react";
import useMoviesAdmin from "../../Hooks/useMoviesAdmin";
import MovieForm from "../../Components/movie/movieForm";
import ConfirmDelete from "../../Components/movie/ConfirmDelete";

export default function MoviesAdmin() {
  const { movies, moviesLoading ,getMovies, createMovie} = useMoviesAdmin();
  const [shopop, setShopop] = useState(false);
  const [shopopdelete, setShopopdelete] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const showPopup = (movie = null) => {
    setSelectedMovie(movie);
    setShopop(true);
  };
  useEffect(() => {
    getMovies();
  }, []);


  const showPopupdelete = (movie = null) => {
    setSelectedMovie(movie);
    setShopopdelete(!shopopdelete);
  };


  const hidePopup = () => {
    setShopop(false);
    setSelectedMovie(null);
  };

  if (moviesLoading) return <>loading . . .</>;

  return (
    <div className="p-5 ">
      <div className="my-10"></div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => showPopup()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New Movie
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6 p-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="col-span-4 relative bg-cover bg-center bg-no-repeat w-full h-96 p-6 cursor-pointer transition-transform transform hover:scale-105 shadow-2xl rounded-lg group"
            style={{
              backgroundImage: `url('${movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}')`,
            }}
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

              <div className="mt-3 flex justify-between items-center text-white px-4 py-2 rounded transition">
                <div onClick={() => showPopupdelete(movie)}>
                  <img
                    src="/delete.png"
                    className="w-7 cursor-pointer transition-transform transform hover:scale-150"
                    alt="delete"
                  />
                </div>
                <div onClick={() => showPopup(movie)}>
                  <img
                    src="/maintenance.png"
                    className="w-10 cursor-pointer transition-transform transform hover:scale-150"
                    alt="update"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     {shopop && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
   
      <MovieForm createMovie={createMovie} movie={selectedMovie} showme={hidePopup} />
   
  </div>
)}
 {shopopdelete && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
   
      <ConfirmDelete movie={selectedMovie} showme={showPopupdelete} />
   
  </div>
)}
    </div>
  );
}
