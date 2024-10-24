import { useEffect } from "react";
import Loading from "../../Components/Loading";
import useReservations from "../../Hooks/useReservations";

export default function ReservationsAdmin() {
  const { reservations, loading, error, fetchReservationsAdmin } = useReservations();

  useEffect(() => {
    fetchReservationsAdmin();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Reservations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservations.map((reservation) => (
            <div
              key={reservation._id}
              className={`bg-gray-800 p-4 rounded-lg shadow-lg ${reservation.confirmed ? 'border-4 border-green-500' : ''}`}
            >
              <div className="flex items-center mb-4">
                {reservation.user.image && (
                  <img
                    src={reservation.user.image} 
                    alt={reservation.user.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-white">{reservation.user.name}</h2>
                  <p className="text-gray-400">{reservation.user.email}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">{reservation.session.movie.title}</h3>
              <p className="text-gray-400">Duration: {reservation.session.movie.duration} minutes</p> {/* Assuming movie duration is stored here */}
              <p className="text-gray-400">Session Date: {new Date(reservation.session.dateTime).toLocaleString()}</p>
              <p className="text-gray-400">Seats: {reservation.seats}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
