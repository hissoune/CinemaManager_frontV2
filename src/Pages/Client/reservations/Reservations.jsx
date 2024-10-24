import { FaTrashAlt, FaCheckCircle } from "react-icons/fa"; // Icons for delete and confirm actions
import useReservations from "../../../Hooks/useReservations";
import { useEffect } from "react";

const Reservations = () => {
  const { reservations, loading, error, fetchReservations, confirmReservation } = useReservations();

  useEffect(() => {
    fetchReservations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const handleConfirm = async (id) => {
    await confirmReservation(id);
  };

  const handleCancel = (id) => {
    console.log(`Cancel reservation ${id}`);
    // Add your cancellation logic here
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl text-center text-white mb-6">Your Reservations</h1>
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg">
        {reservations.map((reservation) => (
          <div
            key={reservation._id}
            className="flex justify-between items-center border-b border-gray-700 p-4 hover:bg-gray-700"
          >
            <div className="flex flex-col">
              <span className="text-lg text-white">{reservation.session.movie.title}</span>
              <span className="text-sm text-gray-400">{reservation.session.dateTime}</span>
              <span className="text-sm text-gray-400">Seat: {reservation.seats}</span>
              <span
                className={`text-sm ${
                  reservation.confirmed ? "text-green-400" : "text-red-400"
                }`}
              >
                Status: {reservation.confirmed ? "Confirmed" : "Pending"}
              </span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleConfirm(reservation._id)}
                className={`flex items-center px-4 py-2 text-white rounded-lg ${
                  reservation.confirmed ? "opacity-50 cursor-not-allowed bg-gray-500" : "bg-green-500 hover:bg-green-600"
                }`}
                disabled={reservation.confirmed} // Disable button if confirmed
              >
                <FaCheckCircle className="mr-2" />
                Confirm
              </button>
              <button
                onClick={() => handleCancel(reservation.id)}
                className="flex items-center px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg"
              >
                <FaTrashAlt className="mr-2" />
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
