import React from "react";
import { Link } from "react-router-dom";

const HealthorgTable = () => {
  return (
    <div className="mt-4 mx-4 p-3">
      <div className="w-full overflow-hidden shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-900 ">
                <th className="px-4 py-3">Organization</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-700 bg-gray-900">
              <tr className=" bg-gray-900 cursor-pointer  hover:bg-gray-900 text-gray-300 ">
                <td className="px-4 py-3">
                  <Link to="/pharmacy-detail">
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
                        <p className="font-semibold">Kena Pharmacy</p>
                        <p className="text-xs text-gray-300 ">best pharmacy</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">Jimma</div>
                </td>
                <td className="px-4 py-3 text-xs flex gap-x-4 mt-2">
                  <div className="px-2 py-1 font-semibold leading-tight text-gray-300  rounded-full bg-green-700 ">
                    Approve
                  </div>
                  <div className="px-2 py-1 font-semibold leading-tight text-gray-300  rounded-full bg-green-700 ">
                    Edit
                  </div>
                  <div className="px-2 py-1 font-semibold leading-tight text-gray-300  rounded-full bg-green-700 ">
                    Delete
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HealthorgTable;
