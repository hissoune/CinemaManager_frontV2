import { useEffect } from "react";
import { useFormData } from "../../Hooks/useFormData";
import useMoviesAdmin from "../../Hooks/useMoviesAdmin";
import useRoomsAdmin from "../../Hooks/useRoomsAdmin";

// eslint-disable-next-line react/prop-types
export default function SessionForm({ session = {}, showme }) {
  const formtype = session && Object.keys(session).length > 0 ? 'SessionUpdate' : 'SessionCreate';
  const { formData, onChange, handleSubmit, setFormData } = useFormData(formtype);
  const { movies, moviesLoading } = useMoviesAdmin();
  const { rooms, loading } = useRoomsAdmin();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleSubmit(e);
      showme();
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  useEffect(() => {
    if (formtype === 'SessionUpdate' && session) {
      setFormData({
        sessionId: session._id || '',
        price: session.price || '',
        dateTime: session.dateTime ? new Date(session.dateTime).toISOString().slice(0, 16) : '',
        room: session.room?._id || '',
        movie: session.movie._id || '',
      });
    } else {
      setFormData({}); 
    }
  }, [session, formtype, setFormData]);

  if (moviesLoading || loading) return <div>Loading...</div>;

  return (
    <div className="dark:bg-gray-700 rounded-lg shadow-lg h-auto max-h-[90vh]">
      <div className="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {formtype === "SessionUpdate" ? "Update Session" : "Create Session"}
        </h3>
        <button
          onClick={showme}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>

      <form onSubmit={handleFormSubmit} encType="multipart/form-data" className="p-4 md:p-5 w-full">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-1">
            <input
              type="hidden"
              name="sessionId"
              value={formData?.sessionId || ''}
              onChange={onChange}
            />
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="Session price"
              required
              value={formData?.price || ''}
              onChange={onChange}
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="dateTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date and Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              id="dateTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
              value={formData?.dateTime || ''}
              onChange={onChange}
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="movie" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Movie
            </label>
            <select
              id="movie"
              name="movie"
              value={formData?.movie || ''}
              onChange={onChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            >
              <option value="" disabled>{formtype === 'SessionCreate' ? 'Select a movie' : 'Loading movie...'}</option>
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label htmlFor="rooms" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Room
            </label>
            <select
              id="rooms"
              name="room"
              value={formData?.room || ''}
              onChange={onChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            >
              <option value="" disabled>{formtype === 'SessionCreate' ? 'Select a room' : 'Loading room...'}</option>
              {rooms.map((room) => (
                <option key={room._id} value={room._id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-2 py-7 flex justify-end">
            <button
              type="submit"
              className="text-white block m-auto w-full bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
