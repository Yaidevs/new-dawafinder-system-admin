import React from "react";
import { IoIosLogOut } from "react-icons/io";
import dawalogo from "../assets/dawafinder.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
      <div className="flex items-center justify-start md:justify-center p-5 w-14 md:w-64 h-14  bg-gray-800 border-none">
        <img
          className="w-50 h-50 md:w-50 md:h-50 mr-2 rounded-md overflow-hidden"
          src={dawalogo}
          alt="."
        />
      </div>
      <div className="flex w-screen justify-between items-center h-14  bg-gray-800 header-right">
        <div className="bg-gray-700 rounded flex items-center w-full max-w-xl ml-9 mr-4 p-2 shadow-sm border border-gray-400">
          <button className="outline-none focus:outline-none">
            <svg
              className="w-5 mr-5 text-white h-5 cursor-pointer"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <input
            type="search"
            name
            id
            placeholder="Search"
            className="w-full  text-sm text-white font-semibold outline-none focus:outline-none bg-transparent"
          />
        </div>
        <ul className="flex items-center">
          {/* <li className="bg-red">
            <MdOutlineDarkMode />
          </li> */}
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-700" />
          </li>
          <li>
            <Link to='/' className="flex items-center mr-4 hover:text-blue-100">
              <span className="inline-flex mr-1">
              <IoIosLogOut size={20} />
              </span>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
