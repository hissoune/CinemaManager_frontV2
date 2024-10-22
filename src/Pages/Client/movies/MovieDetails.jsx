import {  useState } from "react";
import { useLocation} from "react-router-dom";
import Favorites from "../../../Components/auth/Favorites";
import RatingStars from "../../../Components/movie/RatingStars";
import Comments from "../../../Components/Comments";

export default function MovieDetails() {
  const [isExpanded, setIsExpanded] = useState(false);

  const location = useLocation();
  const { movie } = location.state || {}; 
  
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };


  

  if (!movie) return <div>No movie data found</div>;

  return (
    <div className="px-20">
       <div className="relative bg-center bg-cover bg-no-repeat h-80 flex flex-col justify-center items-centerx " 
        
        style={{
          backgroundImage: `url('${movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}')`,
          width:'100%'
        }}
        >
            <div className="absolute inset-0  bg-black opacity-50"></div>

            <div className="relative z-10">
            <h1 className="text-4xl text-center font-bold mb-8 text-white">{movie.title}</h1>
          </div>

          <div className="absolute left-48 top-10 border-2 bg-cover border-[#C23C39]  h-96 w-auto ">
            <img src={`${movie.posterImage || '/2405f5d1220d45fef53df0bfe804e104.jpg'}`} alt="" className="h-full" />
             <div className="flex justify-between mt-4">
              <Favorites movie={movie} />
              <div><RatingStars movie={movie} /></div>

             </div>
          </div>

        </div>
        <div className="text-white grid grid-cols-12 gap-4">
  <div className="col-span-6">
  </div>

  <div className="col-span-6">
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


      {/* <div className="p-10 bg-gray-900  text-white">
        <h1 className="text-4xl text-center font-bold mb-8">Sessions for this Movie</h1>
        {sessions.length > 0 ? (
          <div className="">
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
          </div>
        ) : (
          <div><h3 className="text-center text-red-600">No sessions available for this movie.</h3></div>
        )}
      </div> */}
      <div className="mt-8 grid grid-cols-12 gap-4">
  <div className="col-span-6 p-6">
    <h2 className="text-3xl text-center text-white font-bold mb-4">Watch the Trailer</h2>
    <video controls className="w-full h-full max-h-[500px] border-1">
      <source src={movie.videoUrl} type="video/mp4" />
    </video>
  </div>
  
  <div className="col-span-6 p-6">
    <div className="max-h-[500px] h-full shadow-slate-200 shadow-sm overflow-hidden my-12 relative flex flex-col">
      <div className="overflow-auto h-full">
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
</div>


     
      
    </div>
  );
}
