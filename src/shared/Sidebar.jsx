import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiAdvertisementLine } from "react-icons/ri";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { FaFilePrescription, FaBlogger } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { IoMdSettings, IoMdArrowDropdown } from "react-icons/io";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-gray-900 h-full text-white transition-all duration-300 border-none z-10">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li>
            <Link
              to="/"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <MdOutlineDashboard size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </Link>
          </li>

          <li>
            <div
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 cursor-pointer pr-6"
              onClick={() => toggleDropdown("manageProducts")}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <RiAdvertisementLine size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Manage Products
              </span>
              <span
                className={`text-sm ml-auto transition-transform duration-300 ${
                  openDropdown === "manageProducts" ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoMdArrowDropdown size={20} />
              </span>
            </div>
            <div
              className={`submenu text-left text-sm mt-2 w-4/5 mx-auto ${
                openDropdown === "manageProducts" ? "" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/view-products"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    View Product
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/view-categories"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    View Categories
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/add-products"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Add Product
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/add-product-category"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Add Product Category
                  </span>
                </Link>
              </li>
            </div>
          </li>

          <li>
            <div
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 cursor-pointer pr-6"
              onClick={() => toggleDropdown("manageAds")}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <RiAdvertisementLine size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Manage Ads
              </span>
              <span
                className={`text-sm ml-auto transition-transform duration-300 ${
                  openDropdown === "manageAds" ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoMdArrowDropdown size={20} />
              </span>
            </div>
            <div
              className={`submenu text-left text-sm mt-2 w-4/5 mx-auto ${
                openDropdown === "manageAds" ? "" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/view-ads"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    View All Ads
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/add-ads"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Add Ads
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/add-orgads"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Add Ads Organization
                  </span>
                </Link>
              </li>
            </div>
          </li>

          <li>
            <div
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 cursor-pointer pr-6"
              onClick={() => toggleDropdown("manageHealthOrgs")}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <AiOutlineMedicineBox size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Manage Health Organizations
              </span>
              <span
                className={`text-sm ml-auto transition-transform duration-300 ${
                  openDropdown === "manageHealthOrgs"
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              >
                <IoMdArrowDropdown size={20} />
              </span>
            </div>
            <div
              className={`submenu text-left text-sm mt-2 w-4/5 mx-auto ${
                openDropdown === "manageHealthOrgs" ? "" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/view-organizations"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    View All Health Org.
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/add-health-org"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Add Health Org.
                  </span>
                </Link>
              </li>
            </div>
          </li>

          <li>
            <div
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 cursor-pointer pr-6"
              onClick={() => toggleDropdown("manageBlogs")}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaBlogger size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Manage Blogs
              </span>
              <span
                className={`text-sm ml-auto transition-transform duration-300 ${
                  openDropdown === "manageBlogs" ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoMdArrowDropdown size={20} />
              </span>
            </div>
            <div
              className={`submenu text-left text-sm mt-2 w-4/5 mx-auto ${
                openDropdown === "manageBlogs" ? "" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/view-post"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Posted Blogs
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-category"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Add Blog Category
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/post-blog"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AiOutlineMedicineBox size={20} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Post Blog
                  </span>
                </Link>
              </li>
            </div>
          </li>

          <li>
            <Link
              to="/prescriptions"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FaFilePrescription size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Prescription
              </span>
            </Link>
          </li>

          {/* <li>
            <Link
              to="/manage-users"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FiUsers size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Manage users
              </span>
            </Link>
          </li> */}

          {/* <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Settings
              </div>
            </div>
          </li>

          <li>
            <Link
              to="/"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <CiUser size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Profile
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <IoMdSettings size={20} />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Settings
              </span>
            </Link>
          </li> */}
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Powered by YAI @2024
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
