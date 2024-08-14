import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'; // Replace with the path to your logo image

const Navbar = () => {
  const newNotifications = 3; // Example number of new notifications

  return (
    <div className="fixed w-full flex items-center justify-between h-16 z-10 shadow-md">
      {/* Logo and Sidebar background part */}
      <div className="flex items-center justify-start px-5 w-14 md:w-64 h-16 bg-gradient-to-b from-blue-600 to-blue-800">
        <img src={logo} alt="Logo" className="h-10 md:h-12" />
      </div>

      {/* White background part */}
      <div className="flex flex-1 justify-end items-center h-16 bg-white pr-6 shadow-lg">
        <ul className="flex items-center space-x-6">
          <li className="relative">
            <Link
              to="/notifications"
              className="flex items-center hover:text-blue-600 transition duration-300"
            >
              <IoMdNotificationsOutline size={24} className="text-gray-800" />
              {newNotifications > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-600 rounded-full shadow-md">
                  {newNotifications}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center hover:text-blue-600 transition duration-300"
            >
              <IoIosLogOut size={24} className="text-gray-800" />
              <span className="ml-2 hidden md:inline text-gray-800">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
