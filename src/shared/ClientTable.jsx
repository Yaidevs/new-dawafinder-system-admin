import React from "react";
import { Link } from "react-router-dom";

const ClientTable = () => {
  return (
    <div className="mt-4 mx-4">
      <div className="w-full overflow-hidden shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-900 ">
                <th className="px-4 py-3">Pharmacy</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-700 bg-gray-900">
              <tr className=" bg-gray-900 cursor-pointer  hover:bg-gray-900 text-gray-300 ">
                <td className="px-4 py-3">
                  <Link to="/details">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full"
                          src="https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoYXJtYWN5fGVufDB8fDB8fHww"
                          alt="."
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Hans Burger</p>
                        <p className="text-xs text-gray-300 ">10x Developer</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm">$855.85</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-gray-300  rounded-full bg-green-700 ">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">15-01-2021</td>
              </tr>
              <tr className=" bg-gray-900 cursor-pointer  hover:bg-gray-900 text-gray-300 ">
                <td className="px-4 py-3">
                  <Link to="/details">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full"
                          src="https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoYXJtYWN5fGVufDB8fDB8fHww"
                          alt="."
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Hans Burger</p>
                        <p className="text-xs text-gray-300 ">10x Developer</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm">$855.85</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-gray-300  rounded-full bg-green-700 ">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">15-01-2021</td>
              </tr>
              <tr className=" bg-gray-900 cursor-pointer  hover:bg-gray-900 text-gray-300 ">
                <td className="px-4 py-3">
                  <Link to="/details">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full"
                          src="https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoYXJtYWN5fGVufDB8fDB8fHww"
                          alt="."
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Hans Burger</p>
                        <p className="text-xs text-gray-300 ">10x Developer</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm">$855.85</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-gray-300  rounded-full bg-green-700 ">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">15-01-2021</td>
              </tr>
              <tr className=" bg-gray-900 cursor-pointer  hover:bg-gray-900 text-gray-300 ">
                <td className="px-4 py-3">
                  <Link to="/details">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full"
                          src="https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoYXJtYWN5fGVufDB8fDB8fHww"
                          alt="."
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Hans Burger</p>
                        <p className="text-xs text-gray-300 ">10x Developer</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm">$855.85</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-gray-300  rounded-full bg-green-700 ">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">15-01-2021</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t border-gray-700 bg-gray-500 sm:grid-cols-9 ">
          {/* <span className="flex items-center col-span-3">
            
            Showing 21-30 of 100
          </span> */}
          <span className="col-span-2" />
          {/* Pagination */}
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            {/* <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1  text-gray-800 transition-colors duration-150 bg-gray-100 border border-r-0  border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
