import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useSessionsClient from "../../../Hooks/useSessionsClient";
import Seats from "../../../Components/sessions/seats";

export default function MovieDetails() {
  const location = useLocation();
  const { movie } = location.state || {}; 
  const { id: movieId } = useParams();
  const { sessions, loading, error, getSessionsByMovieId } = useSessionsClient();
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [selectedSession, setSelectedSession] = useState(null);

  const handleReserveClick = (session) => {
    setSelectedSession(session); 
    setIsPopupOpen(true); 
  };
  useEffect(() => {
    if (movieId) {
      getSessionsByMovieId(movieId); 
    }
  }, [movieId]);

  if (loading) return <div>Loading sessions for this movie...</div>;
  if (error) return <div>Error loading sessions: {error}</div>;

  if (!movie) return <div>No movie data found</div>;

  return (
    <>
      <div className="p-10 bg-gray-900 min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-8">{movie.title}</h1>
        <img src={movie.posterImage} alt={movie.title} className="w-full h-96 object-cover" />
        <p className="text-white mt-4">{movie.description}</p>
        <p className="text-white mt-4">Rating: {movie.rating}/10</p>
        <p className="text-white mt-4">Genres: {movie.genre.join(", ")}</p>
      </div>

      <div className="p-10 bg-gray-900 min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-8">Sessions for this Movie</h1>
        {sessions.length > 0 ? (
          <>
            {sessions.map((session) => (
              <div key={session._id} className="flex flex-col rounded-lg bg-slate-800 max-w-96 p-8 my-6 border border-slate-600 shadow-xl">
                <div className="pb-8 m-0 mb-8 text-center text-slate-100 border-b border-slate-600">
                  <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-6xl">
                    <span className="text-3xl">$</span>{session.price}
                  </h1>
                </div>
                <div className="p-0">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                      <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-300"></svg>
                      </span>
                      <p className="text-slate-300">
                        Created By: <span className='text-2xl font-bold mx-2'>{session.creator.name}</span>
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-300"></svg>
                      </span>
                      <p className="text-slate-300">
                        Date & Time: <span>{new Date(session.dateTime).toLocaleString()}</span>
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-300"></svg>
                      </span>
                      <p className="text-slate-300">
                        Room: <span className='text-2xl font-bold mx-2'>{session.room.name}</span>
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-300"></svg>
                      </span>
                      <p className="text-slate-300">
                        Available Seats: <span className='text-2xl font-bold mx-2'>
                          {session.seats.filter(seat => seat.available).length}
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="p-0 mt-12">
                  <button 
                    className="min-w-32 w-full rounded-md bg-orange-500 text-white py-2 px-4 transition-all shadow-md hover:bg-orange-600 focus:bg-orange-400" 
                    type="button"
                    onClick={() => handleReserveClick(session)} 

                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>No sessions available for this movie.</div>
        )}
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <Seats session={selectedSession} /> 
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded" 
              onClick={() => setIsPopupOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
