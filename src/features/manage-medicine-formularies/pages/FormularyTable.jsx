import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import {
  useDeleteFormularyMutation,
  useGetAllFormularyQuery,
} from "../api/formularyApi";
import { Link } from "react-router-dom";


const FormularyTable = () => {
  const { data, error, isLoading } = useGetAllFormularyQuery();
  console.log("formmms", data?.data.formularies);
  const [deleteFormulary] = useDeleteFormularyMutation();

  const onDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this formulary?"
    );
    if (confirmed) {
      try {
        await deleteFormulary(id).unwrap();
        window.location.reload();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (
      data &&
      currentPage > Math.ceil(data?.data.formularies.length / itemsPerPage)
    ) {
      setCurrentPage(1);
    }
  }, [data]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const totalPages =
    Math.ceil(data?.data.formularies.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    data?.data.formularies.length
  );

  return (
    <div className="overflow-x-auto mx-4">
      <table className="min-w-full text-left text-sm text-gray-700">
        <thead className="text-xs font-semibold uppercase bg-gray-200 text-gray-700">
          <tr>
            <th className="px-6 py-3">category</th>
            <th className="px-6 py-3">medicine</th>
            <th className="px-6 py-3">suspension</th>
            <th className="px-6 py-3">tablet</th>
            <th className="px-6 py-3">indication</th>
            <th className="px-6 py-3">caution</th>
            <th className="px-6 py-3">drug interaction</th>
            <th className="px-6 py-3">contraindication</th>
            <th className="px-6 py-3">side effect</th>
            <th className="px-6 py-3">dose</th>
            <th className="px-6 py-3">storage</th>
            <th className="px-6 py-3">created_by</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {isLoading && (
            <tr>
              <td className="px-6 py-3" colSpan="3">
                Loading...
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td className="px-6 py-3" colSpan="3">
                Error: {error.message}
              </td>
            </tr>
          )}
          {!isLoading &&
            !error &&
            data?.data.formularies
              .slice(startIndex, endIndex)
              .map((formulary) => (
                <tr
                  key={formulary._id}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.categoryId}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.medicine}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.suspension}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.tablet}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.indication}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.caution}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.drug_interaction}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.contraindication}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.side_effect}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.dose}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.storage}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {formulary.created_by}
                    </p>
                  </td>
                  <td className="px-6 py-4 flex space-x-2">
                    <Link
                      to={`/edit-formulary/${formulary._id}`}
                      className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-500"
                      title="Edit"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => onDelete(formulary._id)}
                      className="p-2 text-white bg-red-600 rounded-full hover:bg-red-500"
                      title="Delete"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <div className="min-w-full bg-gray-200 rounded-b-lg">
        <div className="flex justify-between items-center px-6 py-4 text-xs text-gray-600 bg-gray-200">
          <span>
            Showing {startIndex + 1}-{endIndex} of
            {data?.data.formularies.length}
          </span>
          <nav
            aria-label="Table navigation"
            className="flex items-center space-x-2"
          >
            {/* Previous Button */}
            <button
              className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Dynamic Pagination with Ellipses */}
            <ul className="flex items-center space-x-2">
              {/* Show '1' and ellipsis if currentPage > 3 */}
              {currentPage > 3 && (
                <>
                  <li>
                    <button
                      className={`px-3 py-1 rounded-md ${
                        currentPage === 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => goToPage(1)}
                    >
                      1
                    </button>
                  </li>
                  <span className="text-gray-500">...</span>
                </>
              )}

              {/* Show surrounding page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
                Math.abs(currentPage - page) <= 2 ? (
                  <li key={page}>
                    <button
                      className={`px-3 py-1 rounded-md ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  </li>
                ) : null
              )}

              {/* Show ellipsis and last page if currentPage < totalPages - 2 */}
              {currentPage < totalPages - 2 && (
                <>
                  <span className="text-gray-500">...</span>
                  <li>
                    <button
                      className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => goToPage(totalPages)}
                    >
                      {totalPages}
                    </button>
                  </li>
                </>
              )}
            </ul>

            {/* Next Button */}
            <button
              className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FormularyTable;
