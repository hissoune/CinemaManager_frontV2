import { useState } from "react";

export default function Seats({session}) {
    const [selectedSeatIndex, setSelectedSeatIndex] = useState(null);
  
    const handleSeatClick = (index) => {
      if (session.seats[index].available) {
        setSelectedSeatIndex(index);
      }
    };
  
    const handleReserveClick = () => {
      try {
        alert('Reservation successful!');
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    };
  return (
    <div>
       <div className=" max-w-4xl mx-auto  shadow-lg rounded-lg ">
     
       <div className="mt-6 flex justify-center">
        <button
          className={`w-full max-w-xs py-2 px-4 rounded-lg font-semibold transition-all text-white bg-[#C23C39] shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none 
            ${selectedSeatIndex === null ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="button"
          onClick={handleReserveClick}
          disabled={selectedSeatIndex === null}
        >
          {selectedSeatIndex === null ? 'Select a Seat' : 'Reserve Now'}
        </button>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 my-4 p-6">
        {session.seats.map((seat, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition duration-200 ease-in-out
              ${seat.available
                ? selectedSeatIndex === index
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 hover:bg-green-300'
                : 'bg-red-500 text-white cursor-not-allowed opacity-50'}`}
            onClick={() => handleSeatClick(index)}
          >
            <img src={'/chair.png'} alt="Seat" className="h-12 w-12 mb-2" />
          </div>
        ))}
      </div>

      
    </div>
    </div>
  )
}
