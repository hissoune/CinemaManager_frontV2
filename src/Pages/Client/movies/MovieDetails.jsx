import { useLocation } from "react-router-dom";

export default function MovieDetails() {
  const location = useLocation();
  const { movie } = location.state || {}; 

  if (!movie) return <div>No movie data found</div>;

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">{movie.title}</h1>
      <img src={movie.posterImage} alt={movie.title} className="w-full h-96 object-cover" />
      <p className="text-white mt-4">{movie.description}</p>
      <p className="text-white mt-4">Rating: {movie.rating}/10</p>
      <p className="text-white mt-4">Genres: {movie.genre.join(", ")}</p>
    </div>
  );
}
