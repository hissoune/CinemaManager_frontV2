import { useState } from "react";
import useReservations from "../../Hooks/useReservations";
import { MdEventSeat } from "react-icons/md";

export default function Seats({ initialSession }) {
  const [session, setSession] = useState(initialSession);

  const [selectedSeatIndex, setSelectedSeatIndex] = useState(null);
  const { createReservation } = useReservations();

  const handleSeatClick = (index) => {
    if (session.seats[index].available) {
      setSelectedSeatIndex(index);
    }
  };

  const handleReserveClick = async () => {
    try {
      const updatedSession =  await createReservation({ seats: selectedSeatIndex, session: session._id });
      setSession(updatedSession);
      
      setSelectedSeatIndex(null)
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg">
        <div className="mt-6 flex justify-center">
          <button
            className={`w-full max-w-xs py-2 px-4 rounded-lg font-semibold transition-all text-white bg-[#C23C39] shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none 
              ${selectedSeatIndex === null ? "opacity-50 cursor-not-allowed" : ""}`}
            type="button"
            onClick={handleReserveClick}
            disabled={selectedSeatIndex === null}
          >
            {selectedSeatIndex === null ? "Select a Seat" : "Reserve Now"}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 my-4 p-6">
          {session.seats.map((seat, index) => (
            <div
              key={index}
              className={` rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition duration-200 ease-in-out`}
              onClick={() => handleSeatClick(index)}
            >
              <MdEventSeat 
                className="h-12 w-12" 
                style={{ 
                  color: seat.available 
                    ? (selectedSeatIndex === index ? "orange" : "green") 
                    : "red" 
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
