import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi"; // Burger and close icons
import { FaFilm, FaDoorOpen, FaHome, FaUsers, FaRegCalendarAlt, FaChair } from "react-icons/fa"; // Sidebar icons

function Sidebar() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <div className="md:hidden p-4 fixed top-0 left-0 z-50">
        <button onClick={toggleSidebar} className="text-white text-3xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 h-full p-6 bg-[#181823] text-white w-64 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <ul className="space-y-4 font-medium">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
              onClick={handleLinkClick}
            >
              <FaHome className="text-xl" />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/movise-admin"
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
              onClick={handleLinkClick}
            >
              <FaFilm className="text-xl" />
              <span className="ms-3">Movies</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/rooms-admin"
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
              onClick={handleLinkClick}
            >
              <FaChair className="text-xl" />
              <span className="ms-3">Rooms</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/sessions-admin"
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
              onClick={handleLinkClick}
            >
              <FaRegCalendarAlt className="text-xl" />
              <span className="ms-3">Sessions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/reservations-admin"
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
              onClick={handleLinkClick}
            >
              <FaDoorOpen className="text-xl" />
              <span className="ms-3">Reservations</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/admins-admin"
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
              onClick={handleLinkClick}
            >
              <FaUsers className="text-xl" />
              <span className="ms-3">Admins</span>
            </Link>
          </li>
          <li>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
