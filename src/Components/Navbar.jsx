import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Login from './auth/Login';
import Register from './auth/Register';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const { user, logout } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-[#181823] fixed z-20 w-full py-4">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Cine</span>
          <img src="/clapperboard (1).png" className="h-10" alt="cinema logo" /> 
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">ma</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className='relative'>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-10 h-10 rounded-full" src={user ? user.image : '/login.png'} alt="user photo" /> 
            </button>

            {dropdownVisible && (
              <div className="absolute right-0 z-50 mt-2 w-96 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                {user ? (
                  <>
                    <div className="px-4 py-3">
                      <span className="block text-lg text-gray-900 dark:text-white">{user.name}</span> 
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                    </div>

                    <ul className="py-2">
                        {(user.role === 'admin')?
                      <li><Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link></li>
                      :
                      <></>
                    }
                      <li><Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Details</Link></li>
                      <li><button onClick={() => logout()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full"><img className='w-20 h-15' src="/logout.png" alt="logout" /></button></li>
                    </ul>
                  </>
                ) : (
                  <div>
                    {isLogin ? <Login /> : <Register />}
                    <button
                      type="button"
                      onClick={toggleForm}
                      className="mt-4 text-white md:dark:hover:text-[#C23C39] py-2 px-4 rounded-lg"
                    >
                      {isLogin ? "Switch to Register ?" : "Switch to Login ?"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`items-center justify-between ${menuVisible ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#181823] md:dark:bg-[#181823] dark:border-gray-700">
            <li><Link to="/movies-client" className="block py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-[#C23C39]">Movies</Link></li> {/* Increased font size */}
            <li><Link to="#" className="block py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-[#C23C39]">Sessions</Link></li> {/* Increased font size */}
            <li><Link to="#" className="block py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-[#C23C39]">Watch</Link></li> {/* Increased font size */}
            <li><Link to="#" className="block py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-[#C23C39]">Contact</Link></li> {/* Increased font size */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
