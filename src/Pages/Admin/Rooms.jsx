import { useEffect, useState } from "react";
import useRoomsAdmin from "../../Hooks/useRoomsAdmin";
import RoomForm from "../../Components/room/roomForm";
import ConfirmDelete from "../../Components/room/ConfirmDelete";

export default function Rooms() {
  const { rooms, loading, getRooms } = useRoomsAdmin();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showPopupDelete, setShowPopupDelete] = useState(false);

  const handleShowPopup = (room = null) => {
    setSelectedRoom(room);
    setShowPopup(true);
  };

  const handleHidePopup = () => {
    setShowPopup(false);
    setSelectedRoom(null);
  };

  const handleShowPopupDelete = (room = null) => {
    setSelectedRoom(room);
    setShowPopupDelete(!showPopupDelete);
  };

  useEffect(() => {
    getRooms();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="p-5 sm:h-screen">
        {/* Button to add a new room */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={() => handleShowPopup()}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add New Room
          </button>
        </div>

        {/* Grid of rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms?.map((room) => (
            <div
              key={room._id}
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 w-full max-w-sm transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {room.name}
              </h3>
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Capacity: {room.capacity}
              </h3>
              <div className="mt-3 flex justify-between items-center text-white px-4 py-2 rounded transition">
                <div onClick={() => handleShowPopupDelete(room)}>
                  <img
                    src="/delete.png"
                    className="w-7 cursor-pointer transition-transform transform hover:scale-150"
                    alt="delete"
                  />
                </div>
                <div onClick={() => handleShowPopup(room)}>
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

        {/* Room form popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-lg max-w-lg w-full mx-5">
              <RoomForm room={selectedRoom} showme={handleHidePopup} />
            </div>
          </div>
        )}

        {/* Confirm delete popup */}
        {showPopupDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-lg max-w-sm w-full mx-5">
              <ConfirmDelete room={selectedRoom} showme={handleShowPopupDelete} />
            </div>
          </div>
        )}
      </div>
    </>



  );
}
