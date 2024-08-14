import React, { useEffect, useState } from "react";
import {
  useDeleteCategoryMutation,
  useGetAllProductCategoryQuery,
} from "../api/productsApi";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const CategoryTable = () => {
  const { data, error, isLoading } = useGetAllProductCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const onDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (confirmed) {
      try {
        await deleteCategory(id).unwrap();
        window.location.reload();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    if (
      data?.data &&
      currentPage > Math.ceil(data?.data.length / itemsPerPage)
    ) {
      setCurrentPage(1);
    }
  }, [data?.data]);

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
      <table className="w-full text-left text-sm text-gray-700">
        <thead className="text-xs font-semibold uppercase bg-gray-200 text-gray-700">
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Category Name</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {isLoading && (
            <tr>
              <td className="px-6 py-3" colSpan="4">
                Loading...
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td className="px-6 py-3" colSpan="4">
                Error: {error.message}
              </td>
            </tr>
          )}
          {!isLoading &&
            !error &&
            data?.data.slice(startIndex, endIndex).map((category) => (
              <tr
                key={category.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4 flex items-center">
                  <div className="relative w-20 h-14 mr-4 rounded-md overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {category.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {category.description.length <= 100
                        ? category.description
                        : `${category.description.slice(0, 100)}...`}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">{category.name}</td>
                <td className="px-6 py-4">{category.description}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <Link
                    to={`/edit-category/${category.id}`}
                    className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-500"
                    title="Edit"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => onDelete(category.id)}
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
      <div className="flex justify-between items-center px-6 py-4 text-xs text-gray-600 bg-gray-200 rounded-b-lg">
        <span>
          Showing {startIndex + 1}-{endIndex} of {data?.data?.length}
        </span>
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center space-x-2">
            <li>
              <button
                className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
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
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
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

export default CategoryTable;
