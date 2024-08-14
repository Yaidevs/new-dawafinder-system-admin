import React, { useState, useEffect } from "react";
import {
  useGetProductCategoryByIdQuery,
  useUpdateProductCategoryMutation,
} from "../api/productsApi";
import { useNavigate, useParams } from "react-router-dom";

const EditProductCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [updating, setUpdating] = useState(false);

  const { data: category, isLoading: categoryLoading } =
    useGetProductCategoryByIdQuery(id);
  const [updateProductCategory] = useUpdateProductCategoryMutation();

  useEffect(() => {
    if (category) {
      setName(category?.data.name);
      setDescription(category?.data.description);
      setImage(category?.data.image);
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      await updateProductCategory({
        id,
        name,
        description,
        image,
      }).unwrap();

      setUpdating(false);
      navigate("/view-categories");
    } catch (error) {
      console.error("Error updating product category:", error);
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* <h2 className="mb-6 text-3xl font-semibold text-center text-gray-900">
              Edit Product Category
            </h2> */}
            {categoryLoading ? (
              <p>Loading category...</p>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-1">
                  <div>
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
                      placeholder="Type category name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Type category description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="http://example.com/image.jpg"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-center text-sm font-medium text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:ring-teal-500"
                  >
                    {updating ? "Updating..." : "Update Category"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditProductCategory;
