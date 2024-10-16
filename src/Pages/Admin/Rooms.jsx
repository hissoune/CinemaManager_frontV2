import useRoomsAdmin from "../../Hooks/useRoomsAdmin"

export default function Rooms() {
    const {rooms,loading}=useRoomsAdmin();
    if (loading) return <div>Loading...</div>;

  return (
    <>
    
    <div className="p-5">

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
                <div >
                  <img
                    src="/delete.png"
                    className="w-7 cursor-pointer transition-transform transform hover:scale-150"
                    alt="delete"
                  />
                </div>
                <div >
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
    </div>
    
    </>
  )
}
