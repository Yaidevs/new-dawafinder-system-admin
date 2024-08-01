import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDeleteAdsMutation, useGetAllAdsQuery } from "../api/adsApi";

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
  const itemsPerPage = 5;

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
    <div className="mt-4 mx-4 p-3">
      <div className="w-full overflow-hidden shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-900 ">
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 bg-gray-900">
              {isLoading && (
                <tr className="bg-gray-900 text-gray-300">
                  <td className="px-4 py-3" colSpan="3">
                    Loading...
                  </td>
                </tr>
              )}
              {error && (
                <tr className="bg-gray-900 text-gray-300">
                  <td className="px-4 py-3" colSpan="3">
                    Error: {error.message}
                  </td>
                </tr>
              )}
              {!isLoading &&
                !error &&
                data.data.slice(startIndex, endIndex).map((ad) => (
                  <tr key={ad._id} className="bg-gray-900 text-gray-300">
                    <td className="px-4 py-3">
                      <Link to={`/ad-detail/${ad._id}`}>
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full"
                              src={ad.imageUrl}
                              alt={ad.title}
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{ad.title}</p>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        {new Date(ad.startDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs flex gap-x-4 mt-2">
                      <div className="px-2 py-1 font-semibold leading-tight text-gray-300 rounded-full bg-green-700">
                        Approve
                      </div>
                      <Link
                        to={`/edit-ads/${ad._id}`}
                        className="px-2 py-1 font-semibold leading-tight text-gray-300 rounded-full bg-green-700"
                      >
                        Edit
                      </Link>
                      <div
                        onClick={() => onDelete(ad._id)}
                        className="px-2 cursor-pointer py-1 font-semibold leading-tight text-gray-300 rounded-full bg-green-700"
                      >
                        Delete
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-900 sm:grid-cols-9">
            <span className="flex items-center col-span-3">
              Showing {startIndex + 1}-{endIndex} of {data?.data.length}
            </span>
            <span className="col-span-2" />
            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul className="inline-flex items-center">
                  <li>
                    <button
                      className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                      aria-label="Previous"
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
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
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <li key={page}>
                        <button
                          className={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple ${
                            currentPage === page
                              ? "text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                              : ""
                          }`}
                          onClick={() => goToPage(page)}
                        >
                          {page}
                        </button>
                      </li>
                    )
                  )}
                  <li>
                    <button
                      className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                      aria-label="Next"
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
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
              </nav>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsTable;
