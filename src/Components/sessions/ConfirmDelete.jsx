import useSessionsAdmin from "../../Hooks/useSessionsAdmin";

// eslint-disable-next-line react/prop-types
export default function ConfirmDelete({ session, showme }) {
    const {deleteSession} = useSessionsAdmin()

  return (
    <div>
           <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 max-w-md w-full">
          <div className="flex justify-between items-center border-b pb-3 mb-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-center w-full text-gray-900 dark:text-white">
              Are you sure you want to delete this room?
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
  
          <div className="text-center mb-6">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              {session.dateTime}   for {session.movie.name}
            </h2>
          </div>
  
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {deleteSession(session._id) ; showme(); }} 
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Yes, Delete
            </button>
            <button
              onClick={showme}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 dark:bg-gray-600 dark:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
