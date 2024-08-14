import React, { useEffect, useState } from "react";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../api/productsApi";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

const ProductsTable = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const onDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      try {
        await deleteProduct(id).unwrap();
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

  const truncateDescription = (description) => {
    return description.length <= 100
      ? description
      : `${description.slice(0, 100)}...`;
  };

  return (
    <div className="overflow-x-auto mx-4">
      <table className="w-full text-left text-sm text-gray-700">
        <thead className="text-xs font-semibold uppercase bg-gray-200 text-gray-700">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Brand</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {isLoading && (
            <tr>
              <td className="px-6 py-3" colSpan="5">
                Loading...
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td className="px-6 py-3" colSpan="5">
                Error: {error.message}
              </td>
            </tr>
          )}
          {!isLoading &&
            !error &&
            data?.data.slice(startIndex, endIndex).map((product) => (
              <tr
                key={product._id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4 flex items-center">
                  <div className="relative w-20 h-14 mr-4 rounded-md overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {truncateDescription(product.description)}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.status}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button
                    onClick={() => onDelete(product._id)}
                    className="p-2 text-white bg-red-600 rounded-full hover:bg-red-500"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                  <Link
                    to={`/edit-product/${product._id}`}
                    className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-500"
                    title="Edit"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="p-2 text-white bg-green-600 rounded-full hover:bg-green-500"
                    title="Approve"
                  >
                    <FaCheck />
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

export default ProductsTable;
