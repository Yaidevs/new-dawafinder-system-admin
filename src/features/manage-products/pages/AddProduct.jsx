import React, { useState } from "react";
import {
  useAddProductsMutation,
  useGetAllProductCategoryQuery,
} from "../api/productsApi";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [adding, setAdding] = useState(false);
  const navigate = useNavigate();
  const [addProduct] = useAddProductsMutation();
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllProductCategoryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAdding(true);
      await addProduct({
        name,
        description,
        brand,
        image,
        category,
      }).unwrap();

      // Reset form fields after submission
      setName("");
      setDescription("");
      setBrand("");
      setImage("");
      setCategory("");
      setAdding(false);
      navigate("/view-products");
    } catch (error) {
      setAdding(false);
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* <h2 className="mb-6 text-3xl font-semibold text-center text-gray-900">
              Add Product
            </h2> */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter product name"
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
                    placeholder="Enter product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter brand name"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
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
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  {categoriesLoading ? (
                    <p>Loading categories...</p>
                  ) : (
                    <select
                      name="category"
                      id="category"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="">Select a category</option>
                      {categories?.data.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
                >
                  {adding ? "Adding..." : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
