import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const newNotifications = 3; // Example number of new notifications

  return (
    <div className="fixed w-full flex items-center justify-between h-16 text-gray-100 bg-gradient-to-r from-blue-800 via-purple-700 to-purple-900 z-10">
      <div className="flex items-center justify-start md:justify-center px-5 w-14 md:w-64 h-16 bg-gradient-to-b from-gray-900 to-black border-none">
        <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white font-poppins">
          DAWAAFINDER
        </h1>
      </div>
      <div className="flex flex-1 justify-end items-center h-16 bg-gradient-to-b from-gray-900 to-black pr-6">
        <ul className="flex items-center space-x-6">
          <li className="relative">
            <Link
              to="/notifications"
              className="flex items-center hover:text-cyan-400"
            >
              <IoMdNotificationsOutline size={24} />
              {newNotifications > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-red-600 rounded-full">
                  {newNotifications}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center hover:text-cyan-400">
              <IoIosLogOut size={24} />
              <span className="ml-2">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
