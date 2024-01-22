import React from "react";
import UserIcon from "../../assets/users.png";
import StoreIcon from "../../assets/medicine-store.png";
import AdsIcon from "../../assets/Ads.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-4">
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div className="absolute rounded-md bg-red-600 p-3">
                  <img className="w-8 h-8" src={StoreIcon} alt="." />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-300">
                  Total Pharmacies
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-100">71,897</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
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
                  <span className="sr-only"> Increased by </span>
                  122
                </p>
                {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a
                      href="."
                      className="font-medium text-orange-400 hover:text-red-500"
                    >
                      View all
                      <span className="sr-only"> Total Subscribers stats</span>
                    </a>
                  </div>
                </div> */}
              </dd>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div className="absolute rounded-md bg-orange-500  p-3">
                  <img className="w-8 h-8" src={AdsIcon} alt="." />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-300">
                  Active Ads
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-100">58</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
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
                  <span className="sr-only"> Increased by </span>
                  5.4%
                </p>
                {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a
                      href="."
                      className="font-medium text-yellow-600 hover:text-orange-500"
                    >
                      View all
                      <span className="sr-only"> Avg. Open Rate stats</span>
                    </a>
                  </div>
                </div> */}
              </dd>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
              <dt>
                <div className="absolute rounded-md bg-blue-500 p-3">
                  <img className="w-8 h-8" src={UserIcon} alt="." />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-300">
                  Total Active Useers
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-100">24</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                  <svg
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
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
                  <span className="sr-only"> Decreased by </span>
                  3.2%
                </p>
                {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a
                      href="."
                      className="font-medium text-cyan-600 hover:text-green-500"
                    >
                      View all
                      <span className="sr-only"> Avg. Click Rate stats</span>
                    </a>
                  </div>
                </div> */}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home;
