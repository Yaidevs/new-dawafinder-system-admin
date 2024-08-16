import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

const UsersTable = () => {
  return (
    <div className="overflow-x-auto mx-4">
      <table className="w-full text-left text-sm text-gray-800">
        <thead className="text-xs font-semibold uppercase bg-gray-200 text-gray-800">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="hover:bg-gray-100 transition-colors duration-200">
            <td className="px-6 py-4 flex items-center">
              <div className="relative w-10 h-10 mr-4 rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoYXJtYWN5fGVufDB8fDB8fHww"
                  alt="."
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Skin Protection</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center text-sm">Admin</div>
            </td>
            <td className="px-6 py-4 flex space-x-2">
              <button
                className="p-2 text-white bg-green-600 rounded-full hover:bg-green-500"
                title="Approve"
              >
                <FaCheck />
              </button>
              <Link
                to="/edit-user"
                className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-500"
                title="Edit"
              >
                <FaEdit />
              </Link>
              <button
                className="p-2 text-white bg-red-600 rounded-full hover:bg-red-500"
                title="Delete"
              >
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center px-6 py-4 text-xs text-gray-600 bg-gray-200 rounded-b-lg">
        <span>Showing 1-1 of 1</span>
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center space-x-2">
            <li>
              <button
                className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                disabled={true}
              >
                Previous
              </button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
                1
              </button>
            </li>
            <li>
              <button
                className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                disabled={true}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UsersTable;
