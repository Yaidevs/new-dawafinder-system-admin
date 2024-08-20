import React, { useState } from "react";
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import { useDeleteCustomerMutation, useGetCustomersQuery } from "../api/usersApi";

const CustomersTable = () => {
  const { data: customers, isLoading, isError } = useGetCustomersQuery();
  const [deleteCustomer] = useDeleteCustomerMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = customers?.data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil((customers?.data.length || 0) / rowsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const onDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (confirmed) {
      try {
        await deleteCustomer(id).unwrap();
        window.location.reload();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto mx-4">
      <table className="w-full text-left text-sm text-gray-800">
        <thead className="text-xs font-semibold uppercase bg-gray-200 text-gray-800">
          <tr>
            <th className="px-6 py-3">Phone Number</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {isLoading ? (
            <tr>
              <td colSpan="2" className="px-6 py-4 text-center">
                Loading...
              </td>
            </tr>
          ) : isError ? (
            <tr>
              <td colSpan="2" className="px-6 py-4 text-center text-red-500">
                Error loading customers.
              </td>
            </tr>
          ) : currentRows?.length === 0 ? (
            <tr>
              <td colSpan="2" className="px-6 py-4 text-center">
                No customers found.
              </td>
            </tr>
          ) : (
            currentRows.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4">{customer.phoneNumber}</td>
                <td className="px-6 py-4 flex justify-center space-x-2">
                  <button
                    className="p-2 text-white bg-green-600 rounded-full hover:bg-green-500"
                    title="Approve"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => onDelete(customer._id)}
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
          Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, customers?.data.length)} of {customers?.data.length}
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

export default CustomersTable;
