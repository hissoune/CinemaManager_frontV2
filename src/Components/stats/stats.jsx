function StatCard({ icon, label, value }) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-700 p-4 rounded-full">{icon}</div>
          <div>
            <p className="text-white text-xl font-semibold">{label}</p>
            <p className="text-gray-400 text-2xl">{value}</p>
          </div>
        </div>
      </div>
    );
  }

  export default StatCard;