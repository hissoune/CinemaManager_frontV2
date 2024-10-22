import { useEffect, useState } from "react";
import useSessionsAdmin from "../../Hooks/useSessionsAdmin";
import SessionForm from "../../Components/sessions/sessionForm";
import ConfirmDelete from "../../Components/sessions/ConfirmDelete";

export default function Sessions() {
  const { sessions, sessionsLoading,getSessions } = useSessionsAdmin();
  const [shopop, setShopop] = useState(false);
  const [shopopdelete, setShopopdelete] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);


  useEffect(() => {
    getSessions();
}, []);
  const showPopup = (session = null) => {
    setSelectedSession(session);
    setShopop(true);
  };
  const hidePopup = () => {
    setShopop(false);
    setSelectedSession(null);
  };
  const showPopupdelete = (session = null) => {

    setSelectedSession(session);
    setShopopdelete(!shopopdelete);
  };


  if (sessionsLoading) return <div>Loading...</div>;

  return (
    <div className="p-5" >
     <div className="flex justify-center mb-6">
        <button
          onClick={() => showPopup()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New Movie
        </button>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
    
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
                <div onClick={() => showPopupdelete(session)}>
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
      
    
     {shopop && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
   
      <SessionForm session={selectedSession} showme={hidePopup} />
   
  </div>
)}
{shopopdelete && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
   
      <ConfirmDelete session={selectedSession} showme={showPopupdelete} />
   
  </div>
)}
    </div>
    </div>
  );
}
