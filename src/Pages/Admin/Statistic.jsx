import { useEffect } from "react";
import { FaUsers, FaFilm, FaCalendarAlt, FaChair, FaTicketAlt } from "react-icons/fa"; // Importing icons
import useStatistiques from "../../Hooks/useStatistiques";
import Loading from "../../Components/Loading"; // Assuming you have a loading component
import StatCard from "../../Components/stats/stats";

export default function Statistic() {
  const { statistiques, loading, error, getStatistiques } = useStatistiques();

  useEffect(() => {
    getStatistiques();
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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center  py-10">
      <h1 className="text-4xl text-white font-bold mb-10 text-center">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <StatCard
          icon={<FaUsers size={40} className="text-green-400" />}
          label="Total Users"
          value={statistiques.totalUsers}
        />
        <StatCard
          icon={<FaFilm size={40} className="text-red-400" />}
          label="Total Movies"
          value={statistiques.totalMovies}
        />
        <StatCard
          icon={<FaCalendarAlt size={40} className="text-blue-400" />}
          label="Total Sessions"
          value={statistiques.totalSessions}
        />
        <StatCard
          icon={<FaChair size={40} className="text-purple-400" />}
          label="Total Rooms"
          value={statistiques.totalRooms}
        />
        <StatCard
          icon={<FaTicketAlt size={40} className="text-yellow-400" />}
          label="Total Reservations"
          value={statistiques.totalReservations}
        />
      </div>
    </div>
  );
}


