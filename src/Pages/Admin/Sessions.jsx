import { useState } from "react";
import useSessionsAdmin from "../../Hooks/useSessionsAdmin";
import SessionForm from "../../Components/sessions/sessionForm";

export default function Sessions() {
  const { sessions, sessionsLoading } = useSessionsAdmin();
  const [shopop, setShopop] = useState(false);
  // const [shopopdelete, setShopopdelete] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);


  const showPopup = (movie = null) => {
    setSelectedMovie(movie);
    setShopop(true);
  };
  const hidePopup = () => {
    setShopop(false);
    setSelectedMovie(null);
  };


  if (sessionsLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     <div>

     {sessions?.map((session) => (
        <div
          key={session._id}
          className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 w-full max-w-sm"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {session.price}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {session.dateTime}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Date: {new Date(session.date).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Time: {session.time}
          </p>
          <div className="mt-3 flex justify-between items-center text-white px-4 py-2 rounded transition">
                <div >
                  <img
                    src="/delete.png"
                    className="w-7 cursor-pointer transition-transform transform hover:scale-150"
                    alt="delete"
                  />
                </div>
                <div onClick={() => showPopup(session)}>
                  <img
                    src="/maintenance.png"
                    className="w-10 cursor-pointer transition-transform transform hover:scale-150"
                    alt="update"
                  />
                </div>
              </div>
        </div>
      ))}
      
     </div>
     {shopop && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
   
      <SessionForm movie={selectedMovie} showme={hidePopup} />
   
  </div>
)}
    </div>
  );
}
