/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetFormularyCategoryByIdQuery,
  useUpdateFormularyCategoryMutation,
} from "../api/formularyApi";

const EditCategoryForFormularies = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: category,
    isLoading: isFetching,
    error: fetchError,
  } = useGetFormularyCategoryByIdQuery(id);
  console.log("kk", category?.data.category);
  const [updateCategory, { isLoading: isUpdating, error: updateError }] =
    useUpdateFormularyCategoryMutation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (category) {
      setName(category?.data.category.name || "");
      setDescription(category?.data.category.description || "");
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCategory({ _id:id, name, description }).unwrap();
      navigate("/view-formulary-category");
      window.location.reload();
    } catch (err) {
      console.error("Error updating category:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {isFetching ? (
              <p className="text-center text-gray-700">
                Loading category details...
              </p>
            ) : fetchError ? (
              <p className="text-center text-red-500">
                Error loading category:{" "}
                {fetchError?.data?.message || "Something went wrong"}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Category Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter category name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows={4}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter category description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
                    disabled={isUpdating}
                  >
                    {isUpdating ? "Updating..." : "Update Category"}
                  </button>
                </div>
                {updateError && (
                  <p className="text-center text-red-500 mt-4">
                    Error updating category:{" "}
                    {updateError?.data?.message || "Something went wrong"}
                  </p>
                )}
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditCategoryForFormularies;
