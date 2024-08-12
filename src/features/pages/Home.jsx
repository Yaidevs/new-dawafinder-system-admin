import React from "react";
import UserIcon from "../../assets/users.png";
import StoreIcon from "../../assets/medicine-store.png";
import AdsIcon from "../../assets/Ads.png";
import ChartOne from "../../shared/ChartOne"; // Histogram
import ChartTwo from "../../shared/ChartTwo"; // Piechart
import ChartThree from "../../shared/ChartThree"; // Full-width chart

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-200">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-white mb-6">
            Dashboard Overview
          </h1>
          <dl className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Total Pharmacies Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-teal-700 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute rounded-full bg-teal-800 p-4 -top-4 -right-4 transform rotate-45 shadow-md">
                  <img
                    className="w-8 h-8"
                    src={StoreIcon}
                    alt="Pharmacy Icon"
                  />
                </div>
                <p className="ml-6 mt-6 truncate text-lg font-medium text-white">
                  Total Pharmacies
                </p>
              </dt>
              <dd className="ml-6 mt-4 flex items-baseline">
                <p className="text-4xl font-bold text-white">71,897</p>
                <p className="ml-3 flex items-baseline text-sm font-semibold text-green-200">
                  <svg
                    className="h-5 w-5 flex-shrink-0 self-center text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Increased by</span>
                  122
                </p>
              </dd>
            </div>

            {/* Active Ads Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute rounded-full bg-orange-800 p-4 -top-4 -right-4 transform rotate-45 shadow-md">
                  <img className="w-8 h-8" src={AdsIcon} alt="Ads Icon" />
                </div>
                <p className="ml-6 mt-6 truncate text-lg font-medium text-white">
                  Active Ads
                </p>
              </dt>
              <dd className="ml-6 mt-4 flex items-baseline">
                <p className="text-4xl font-bold text-white">58</p>
                <p className="ml-3 flex items-baseline text-sm font-semibold text-green-200">
                  <svg
                    className="h-5 w-5 flex-shrink-0 self-center text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Increased by</span>
                  5.4%
                </p>
              </dd>
            </div>

            {/* Total Active Users Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute rounded-full bg-pink-800 p-4 -top-4 -right-4 transform rotate-45 shadow-md">
                  <img className="w-8 h-8" src={UserIcon} alt="User Icon" />
                </div>
                <p className="ml-6 mt-6 truncate text-lg font-medium text-white">
                  Total Active Users
                </p>
              </dt>
              <dd className="ml-6 mt-4 flex items-baseline">
                <p className="text-4xl font-bold text-white">24</p>
                <p className="ml-3 flex items-baseline text-sm font-semibold text-red-200">
                  <svg
                    className="h-5 w-5 flex-shrink-0 self-center text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Decreased by</span>
                  3.2%
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Charts Section */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <ChartOne />
            </div>
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <ChartTwo />
            </div>
          </div>
          <div className="mt-6 bg-gray-900 rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300">
            <ChartThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
