import React from "react";
import { Link } from "react-router-dom";
import { FcAdvertising } from "react-icons/fc";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { FaFilePrescription } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";


const Sidebar = () => {
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64  dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 ">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li>
            <Link
              to='/'
              className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent  dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <MdOutlineDashboard size={20}/>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/manage-pharmacies'
              className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent  dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <AiOutlineMedicineBox  size={20}/>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Manage Pharmacies</span>
            </Link>
          </li>
          <li>
            <Link
              to='/manage-ads'
              className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent  dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <FcAdvertising size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Manage Ads
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/prescriptions'
              className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent  dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <FaFilePrescription size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Prescription
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/manage-users'
              className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent  dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <FiUsers size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Manage users
              </span>
            </Link>
          </li>
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Settings
              </div>
            </div>
          </li>
          <li>
            <a
              href='.'
              className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent  dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <CiUser size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Profile
              </span>
            </a>
          </li>
          <li>
            <a
              href='.'
              className="relative flex flex-row items-center h-11 focus:outline-none  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent  dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <IoMdSettings size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Settings
              </span>
            </a>
          </li>
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Powered by YAI @2024 
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
