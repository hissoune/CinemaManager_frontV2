import { useState } from "react";
import useRoomsAdmin from "../../Hooks/useRoomsAdmin"
import RoomForm from "../../Components/room/roomForm";
import ConfirmDelete from "../../Components/room/ConfirmDelete";

export default function Rooms() {
    const {rooms,loading}=useRoomsAdmin();
    const [shopop, setShopop] = useState(false);
    const [selectedroom, setSselectedroom] = useState(null);
    const [shopopdelete, setShopopdelete] = useState(false);
    const showPopup = (room = null) => {
        setSselectedroom(room);
        setShopop(true);
      };
    const hidePopup = () => {
        setShopop(false);
        setSselectedroom(null);
      };
    
      const showPopupdelete = (room = null) => {

        setSselectedroom(room);
        console.log(selectedroom);
        
        setShopopdelete(!shopopdelete);
      };

    if (loading) return <div>Loading...</div>;

  return (
    <>
    
    <div className="p-5">
    <div className="flex justify-center mb-6">
        <button type="button"
          onClick={() => showPopup()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New Movie
        </button>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {rooms?.map((room) => (
      <div
        key={room._id}
        className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 w-full max-w-sm"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {room.name}
        </h3>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {room.capacity}
        </h3>
        <div className="mt-3 flex justify-between items-center text-white px-4 py-2 rounded transition">
                <div onClick={() => showPopupdelete(room)}>
                  <img
                    src="/delete.png"
                    className="w-7 cursor-pointer transition-transform transform hover:scale-150"
                    alt="delete"
                  />
                </div>
                <div onClick={() => showPopup(room)}>
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
   
      <RoomForm room={selectedroom} showme={hidePopup} />
   
  </div>
  )}
  {shopopdelete && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
   
      <ConfirmDelete room={selectedroom} showme={showPopupdelete} />
   
  </div>
)}
    </div>
    
    </>
  )
}
