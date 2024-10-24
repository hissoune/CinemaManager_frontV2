import { useLocation } from "react-router-dom";
import Seats from "../../../Components/sessions/Seats";

export default function SessionDetails() {
  const location = useLocation();
  const { session } = location.state || {};

  return (
    <div className="w-full">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${session.movie.posterImage}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="py-10 relative z-10 flex justify-center items-center">
            <h1 className="text-center text-2xl sm:text-3xl lg:text-5xl text-white font-bold">
              {session.movie.title}
            </h1>
          </div>

          <div className="absolute inset-0 top-[65%] sm:top-[70%] lg:top-[75%] flex justify-center items-center">
            <div className="w-2/3 sm:w-1/3 h-60 sm:h-80 lg:h-96 bg-white shadow-lg border-4 border-[#C23C39]">
              <img
                className="w-full h-full object-cover"
                src={`${session.movie.posterImage}`}
                alt={`${session.movie.title} poster`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-10 lg:p-20">
        <div
          className="relative grid grid-cols-1 md:grid-cols-12 gap-6 p-6 lg:p-10 bg-cover bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url('/df15ed296e9626a71450fd58b7cc9972.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="relative z-10 col-span-12 md:col-span-6 text-white p-6">
            <div className="mb-6 text-center md:text-left">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="my-4">
                <p className="text-lg lg:text-2xl">
                  <span className="font-semibold">Duration:</span> {session.movie.duration} minutes
                </p>
                <p className="text-lg lg:text-2xl my-4">
                  <span className="font-semibold">Creator:</span> {session.movie.creator.name}
                </p>
              </div>

              <div className="my-4">
                <p className="text-lg lg:text-2xl my-4">
                  <span className="font-semibold">Room Name:</span> {session.room.name}
                </p>
                <p className="text-lg lg:text-2xl my-4">
                  <span className="font-semibold">Room Capacity:</span> {session.room.capacity}
                </p>
                <p className="text-lg lg:text-2xl my-4">
                  <span className="font-semibold">Available Seats:</span> {session.room.availableSeats}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 relative z-10">
            <Seats session={session} />
          </div>
        </div>
      </div>
    </div>
  );
}
