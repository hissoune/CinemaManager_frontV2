import { useEffect } from "react";
import { useFormData } from "../../Hooks/useFormData";

// eslint-disable-next-line react/prop-types
export default function MovieForm({ movie = {}, showme }) {

  const formtype = movie && Object.keys(movie).length > 0 ? 'MovieUpdate' : 'MovieCreate';

  const { formData, onChange, handleSubmit, setFormData } = useFormData(formtype);

  useEffect(() => {
    if (formtype === 'MovieUpdate') {
      setFormData({
        movieId: movie._id || '',
        title: movie.title || '',
        releaseDate: movie.releaseDate ? new Date(movie.releaseDate).toISOString().slice(0, 10) : '',
        description: movie.description || '',
        duration: movie.duration || '',
        genre: Array.isArray(movie.genre) ? movie.genre[0] : movie.genre || '',
      });
    }
  }, [movie, formtype, setFormData]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleSubmit(e);
      
      showme();
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div>
      <div className="dark:bg-gray-700 rounded-lg shadow-lg h-auto max-h-[90vh]">
        <div className="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
          <h3 className=" font-semibold text-gray-900 dark:text-white">
            {formtype === "MovieUpdate" ? "Update Movie" : "Create Movie"}
          </h3>
          <button
            onClick={showme}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                type="text"
                name="movieId"
                className="hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                value={movie?._id || ''}
                onChange={onChange}
              />
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="title"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="Movie Name"
                required
                value={formData?.title || ''}
                onChange={onChange}
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="releaseDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Release Date
              </label>
              <input
                type="date"
                name="releaseDate"
                id="releaseDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                value={formData?.releaseDate || ''}
                onChange={onChange}
                required
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Movie Description
              </label>
              <textarea
                id="description"
                rows="4"
                name="description"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Write Movie description here"
                value={formData?.description || ''}
                onChange={onChange}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="posterImage"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                type="file"
                name="posterImage"
                id="posterImage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                onChange={onChange}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Duration
              </label>
              <input
                type="number"
                name="duration"
                id="duration"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                value={formData?.duration || ''}
                onChange={onChange}
                placeholder="120 min"
                required
              />
            </div>

            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="genre"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Genre
              </label>
              <select
                id="genre"
                value={formData?.genre || ''}
                onChange={onChange}
                name="genre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              >
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="science_fiction">Science Fiction</option>
                <option value="fantasy">Fantasy</option>
                <option value="romance">Romance</option>
                <option value="thriller">Thriller</option>
                <option value="mystery">Mystery</option>
                <option value="documentary">Documentary</option>
                <option value="animation">Animation</option>
                <option value="biography">Biography</option>
              </select>
            </div>

            <div className="col-span-1 py-7 flex justify-end">
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
    </div>
  );
}
