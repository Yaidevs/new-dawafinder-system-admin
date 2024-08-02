import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useDeleteOrgsMutation,
  useGetAllHealthOrganizationsQuery,
} from "../api/healthorgApi";

const HealthorgTable = () => {
  const { data, error, isLoading } = useGetAllHealthOrganizationsQuery();
  const [deleteOrgs] = useDeleteOrgsMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const onDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this ad?"
    );
    if (confirmed) {
      try {
        await deleteOrgs(id).unwrap();
        window.location.reload();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

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
                <th className="px-4 py-3">Organization</th>
                <th className="px-4 py-3">Location</th>
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
                data.data.slice(startIndex, endIndex).map((org) => (
                  <tr key={org._id} className="bg-gray-900 text-gray-300">
                    <td className="px-4 py-3">
                      <Link to={`/healthorg-detail/${org._id}`}>
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full"
                              src="https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoYXJtYWN5fGVufDB8fDB8fHww"
                              alt={org.name}
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{org.name}</p>
                            <p className="text-xs text-gray-300">{org.type}</p>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        {org.relativeLocation.city},{" "}
                        {org.relativeLocation.country}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs flex gap-x-4 mt-2">
                      <div className="px-2 py-1 font-semibold leading-tight text-gray-300 rounded-full bg-green-700">
                        Approve
                      </div>
                      <Link
                        to={`/edit-health-org/${org._id}`}
                        className="px-2 py-1 font-semibold leading-tight text-gray-300 rounded-full bg-green-700"
                      >
                        Edit
                      </Link>
                      <div
                        onClick={() => onDelete(org._id)}
                        className="px-2 py-1 font-semibold leading-tight text-gray-300 rounded-full bg-green-700 cursor-pointer"
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

export default HealthorgTable;
