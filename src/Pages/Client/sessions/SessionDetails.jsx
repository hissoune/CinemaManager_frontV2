import { useLocation } from "react-router-dom";
import Seats from "../../../Components/sessions/Seats";

export default function SessionDetails() {
  const location = useLocation();
  const { session } = location.state || {};

  return (
    <div className="w-full bg-gray-900 text-white min-h-screen">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] mb-10 flex flex-col justify-center items-center">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${session.movie.posterImage}')`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-black/80 to-black/40"></div>
        </div>

        <div className="absolute top-[20%] sm:top-[30%] text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white neon-text">
            {session.movie.title}
          </h1>
          <p className="text-gray-300 mt-4 sm:text-lg lg:text-xl">
            {new Date(session.dateTime).toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>

      {/* Session Details & Seats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Session Details */}
          <div className="bg-gray-800 shadow-xl rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-4 text-red-500">
              Session Details
            </h2>
            <div className="mb-4">
              <div className="flex justify-center mb-4">
                <img
                  className="w-48 h-60 object-cover rounded-lg shadow-lg border-2 border-[#C23C39]"
                  src={`${session.movie.posterImage}`}
                  alt={`${session.movie.title} poster`}
                />
              </div>
              <p className="text-lg mb-2 flex items-center">
                <span className="font-semibold mr-2 text-red-500">🕒 Duration:</span> {session.movie.duration} minutes
              </p>
              <p className="text-lg mb-2 flex items-center">
                <span className="font-semibold mr-2 text-red-500">🎬 Creator:</span> {session.movie.creator.name}
              </p>
              <p className="text-lg mb-2 flex items-center">
                <span className="font-semibold mr-2 text-red-500">🏛️ Room Name:</span> {session.room.name}
              </p>
              <p className="text-lg mb-2 flex items-center">
                <span className="font-semibold mr-2 text-red-500">💺 Room Capacity:</span> {session.room.capacity}
              </p>
              <p className="text-lg flex items-center">
                <span className="font-semibold mr-2 text-red-500">🎟️ Available Seats:</span> {session.room.availableSeats}
              </p>
            </div>
          </div>

          <div className="bg-gray-800 shadow-xl rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-4 text-red-500">
              Select Your Seat
            </h2>
            <div className="h-[500px] overflow-y-auto no-scrollbar">
              <Seats initialSession={session} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #ffffff, 0 0 10px #ff4d4d, 0 0 15px #ff4d4d, 0 0 20px #ff4d4d;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
