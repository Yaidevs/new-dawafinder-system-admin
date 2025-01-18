import React from "react";
import UserIcon from "../../assets/users.png";
import StoreIcon from "../../assets/medicine-store.png";
import AdsIcon from "../../assets/Ads.png";
import ChartOne from "../../shared/ChartOne"; // Histogram
import ChartTwo from "../../shared/ChartTwo"; // Piechart
import ChartThree from "../../shared/ChartThree"; // Full-width chart

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
           Overview
          </h1>
          <dl className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Total Pharmacies Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute rounded-full bg-teal-700 p-4 -top-4 -right-4 transform rotate-45 shadow-md">
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
              <dd className="ml-6 mt-4 flex items-baseline p-2">
                <p className="text-4xl font-bold text-white">71,897</p>
              </dd>
            </div>

            {/* Active Ads Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute rounded-full bg-orange-700 p-4 -top-4 -right-4 transform rotate-45 shadow-md">
                  <img className="w-8 h-8" src={AdsIcon} alt="Ads Icon" />
                </div>
                <p className="ml-6 mt-6 truncate text-lg font-medium text-white">
                  Active Ads
                </p>
              </dt>
              <dd className="ml-6 mt-4 flex items-baseline">
                <p className="text-4xl font-bold text-white">58</p>
              </dd>
            </div>

            {/* Total Active Users Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute rounded-full bg-pink-700 p-4 -top-4 -right-4 transform rotate-45 shadow-md">
                  <img className="w-8 h-8" src={UserIcon} alt="User Icon" />
                </div>
                <p className="ml-6 mt-6 truncate text-lg font-medium text-white">
                  Total Active Users
                </p>
              </dt>
              <dd className="ml-6 mt-4 flex items-baseline">
                <p className="text-4xl font-bold text-white">24</p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Charts Section */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <ChartOne />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300">
              <ChartTwo />
            </div>
          </div>
          <div className="mt-6 bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300">
            <ChartThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
