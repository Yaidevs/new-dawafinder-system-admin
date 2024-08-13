import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDeleteAdsMutation, useGetAllAdsQuery } from "../api/adsApi";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa"; // Importing icons

const AdsTable = () => {
  const { data, error, isLoading } = useGetAllAdsQuery();
  const [deleteAds] = useDeleteAdsMutation();

  const onDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this ad?"
    );
    if (confirmed) {
      try {
        await deleteAds(id).unwrap();
        window.location.reload();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    if (data && currentPage > Math.ceil(data.data.length / itemsPerPage)) {
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

  const totalPages = Math.ceil(data?.data.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data?.data.length);

  return (
    <div className="overflow-x-auto mx-4">
      <table className="w-full text-left text-sm text-gray-400">
        <thead className="text-xs font-semibold uppercase bg-gray-700 text-gray-200">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 bg-gray-900">
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
            data?.data.slice(startIndex, endIndex).map((ad) => (
              <tr
                key={ad._id}
                className="hover:bg-gray-800 transition-colors duration-200"
              >
                <td className="px-6 py-4 flex items-center">
                  <div className="relative w-20 h-14 mr-4 rounded-md overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={ad.imageUrl}
                      alt={ad.title}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">{ad.title}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {new Date(ad.startDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 flex space-x-2">
                  <button
                    onClick={() => onDelete(ad._id)}
                    className="p-2 text-gray-100 bg-red-600 rounded-full hover:bg-red-500"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                  <Link
                    to={`/edit-ads/${ad._id}`}
                    className="p-2 text-gray-100 bg-blue-600 rounded-full hover:bg-blue-500"
                    title="Edit"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="p-2 text-gray-100 bg-green-600 rounded-full hover:bg-green-500"
                    title="Approve"
                  >
                    <FaCheck />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center px-6 py-4 text-xs text-gray-400 bg-gray-700 rounded-b-lg">
        <span>
          Showing {startIndex + 1}-{endIndex} of {data?.data?.length}
        </span>
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center space-x-2">
            <li>
              <button
                className="px-3 py-1 rounded-md bg-gray-600 hover:bg-gray-500 disabled:opacity-50"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  className={`px-3 py-1 rounded-md ${
                    currentPage === page
                      ? "bg-purple-600 text-white"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                className="px-3 py-1 rounded-md bg-gray-600 hover:bg-gray-500 disabled:opacity-50"
                onClick={goToNextPage}
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

export default AdsTable;
