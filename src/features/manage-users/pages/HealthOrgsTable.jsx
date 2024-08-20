import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";
import {
  useDeleteHealthOrgMutation,
  useGetHealthOrgsQuery,
} from "../api/usersApi";

const HealthOrgsTable = () => {
  const { data: healthOrgs, isLoading, isError } = useGetHealthOrgsQuery();
  const [deleteUser] = useDeleteHealthOrgMutation();

  const onDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      try {
        await deleteUser(id).unwrap();
        window.location.reload();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = healthOrgs?.data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil((healthOrgs?.data.length || 0) / rowsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="overflow-x-auto mx-4">
      <table className="w-full text-left text-sm text-gray-800">
        <thead className="text-xs font-semibold uppercase bg-gray-200 text-gray-800">
          <tr>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone Number</th>
            <th className="px-6 py-3">Health Service</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {isLoading ? (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-center">
                Loading...
              </td>
            </tr>
          ) : isError ? (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-center text-red-500">
                Error loading health organizations.
              </td>
            </tr>
          ) : currentRows?.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-center">
                No health organizations found.
              </td>
            </tr>
          ) : (
            currentRows.map((org) => (
              <tr
                key={org.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4">{org.firstName}</td>
                <td className="px-6 py-4">{org.lastName}</td>
                <td className="px-6 py-4">{org.email}</td>
                <td className="px-6 py-4">{org.phoneNumber}</td>
                <td className="px-6 py-4">{org.healthService?.name}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button
                    className="p-2 text-white bg-green-600 rounded-full hover:bg-green-500"
                    title="Approve"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => onDelete(org._id)}
                    className="p-2 text-white bg-red-600 rounded-full hover:bg-red-500"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center px-6 py-4 text-xs text-gray-600 bg-gray-200 rounded-b-lg">
        <span>
          Showing {indexOfFirstRow + 1} to
          {Math.min(indexOfLastRow, healthOrgs?.data.length)} of
          {healthOrgs?.data.length}
        </span>
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center space-x-2">
            <li>
              <button
                onClick={handlePrevious}
                className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            <li>
              <button
                onClick={handleNext}
                className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                disabled={currentPage === totalPages}
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

export default HealthOrgsTable;
