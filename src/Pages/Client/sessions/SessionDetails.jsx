import { useLocation } from "react-router-dom";
import RatingStars from "../../../Components/movie/RatingStars";
import Seats from "../../../Components/sessions/Seats";

export default function SessionDetails() {
  const location = useLocation();
  const { session } = location.state || {};

  return (
    <div className="w-full">
      <div className="relative h-[600px] mb-10">
        <div
          className="absolute inset-0 h-96 w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${session.movie.posterImage}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="py-10 relative z-10">
            <h1 className="text-center text-3xl text-white font-bold">
              {session.movie.title}
            </h1>
          </div>

          <div className="absolute inset-0 top-80 flex justify-center items-center">
            <div className="w-1/3 h-96 bg-white shadow-lg border-4 border-[#C23C39]">
              <img
                className="w-full h-full object-cover"
                src={`${session.movie.posterImage}`}
                alt={`${session.movie.title} poster`}
              />
            
            </div>
          </div>
        </div>
      </div>

     <div className="grid grid-cols-12 gap-6 ">
     <div className="text-center text-white font-bold  tex-3xl bg-slate-500 p-6 col-span-6">
        <p className="my-4">{new Date(session.dateTime).toLocaleString()}</p>
        <div>
            <button className="bg-[#C23C39] p-4 rounded-sm">
                Reserve Now
            </button>
        </div>
      </div>

      <div className="col-span-6">
      <Seats session={session}/>
      </div>
     </div>

    </div>
  );
}
