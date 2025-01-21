import React from "react";
import UserIcon from "../../assets/users.png";
import StoreIcon from "../../assets/medicine-store.png";
import AdsIcon from "../../assets/Ads.png";
import ChartOne from "../../shared/ChartOne"; // Histogram
import ChartTwo from "../../shared/ChartTwo"; // Piechart
import ChartThree from "../../shared/ChartThree"; // Full-width chart

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Overview
          </h1>
          <dl className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Total Pharmacies Card */}
            <div className="relative overflow-hidden rounded-xl bg-[#20846c] shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute top-4 right-4 rounded-full bg-white p-4 shadow-md">
                  <img className="w-10 h-10" src={StoreIcon} alt="Pharmacy Icon" />
                </div>
                <p className="ml-6 mt-6 truncate text-lg font-medium text-white">
                  Total Pharmacies
                </p>
              </dt>
              <dd className="ml-6 mt-4 flex items-baseline p-2">
                <p className="text-4xl font-bold text-white">300</p>
              </dd>
            </div>

            {/* Active Ads Card */}
            <div className="relative overflow-hidden rounded-xl bg-[#20846c] shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute top-4 right-4 rounded-full bg-white p-4 shadow-md">
                  <img className="w-10 h-10" src={AdsIcon} alt="Ads Icon" />
                </div>
                <p className="ml-6 mt-6 truncate text-lg font-medium text-white">
                  Active Ads
                </p>
              </dt>
              <dd className="ml-6 mt-4 flex items-baseline">
                <p className="text-4xl font-bold text-white">8</p>
              </dd>
            </div>

            {/* Total Active Users Card */}
            <div className="relative overflow-hidden rounded-xl  bg-[#20846c] shadow-lg transform transition-transform hover:scale-105 duration-300">
              <dt>
                <div className="absolute top-4 right-4 rounded-full bg-white p-4 shadow-md">
                  <img className="w-10 h-10" src={UserIcon} alt="User Icon" />
                </div>
                <p className="ml-6 mt-6 truncate text-lg font-medium text-white">
                  Total Active Users
                </p>
              </dt>
              <dd className="ml-6 mt-4 flex items-baseline">
                <p className="text-4xl font-bold text-white">500</p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Charts Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Analytics
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300 border border-gray-200">
              <ChartOne />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300 border border-gray-200">
              <ChartTwo />
            </div>
          </div>
          <div className="mt-6 bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 duration-300 border border-gray-200">
            <ChartThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
