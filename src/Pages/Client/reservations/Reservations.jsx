import { FaTrashAlt, FaCheckCircle } from "react-icons/fa"; // Icons for delete and confirm actions

const sampleReservations = [
  {
    id: "1",
    movie: "Inception",
    session: "2024-10-30 20:00",
    seat: "A5",
    status: "Pending",
  },
  {
    id: "2",
    movie: "Interstellar",
    session: "2024-10-31 18:00",
    seat: "B2",
    status: "Pending",
  },
  {
    id: "3",
    movie: "The Dark Knight",
    session: "2024-11-01 21:00",
    seat: "C3",
    status: "Confirmed",
  },
];

const Reservations = () => {
  const handleConfirm = (id) => {
    console.log(`Confirm reservation ${id}`);
    // Add your confirmation logic here
  };

  const handleCancel = (id) => {
    console.log(`Cancel reservation ${id}`);
    // Add your cancellation logic here
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl text-center text-white mb-6">Your Reservations</h1>
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg">
        {sampleReservations.map((reservation) => (
          <div
            key={reservation.id}
            className="flex justify-between items-center border-b border-gray-700 p-4 hover:bg-gray-700"
          >
            <div className="flex flex-col">
              <span className="text-lg text-white">{reservation.movie}</span>
              <span className="text-sm text-gray-400">{reservation.session}</span>
              <span className="text-sm text-gray-400">Seat: {reservation.seat}</span>
              <span
                className={`text-sm ${
                  reservation.status === "Confirmed" ? "text-green-400" : "text-red-400"
                }`}
              >
                Status: {reservation.status}
              </span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleConfirm(reservation.id)}
                className={`flex items-center px-4 py-2 text-white rounded-lg ${
                  reservation.status === "Confirmed" ? "opacity-50 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                }`}
                disabled={reservation.status === "Confirmed"}
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
