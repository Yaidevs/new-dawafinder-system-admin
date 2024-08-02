import React, { useState, useEffect } from "react";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useGetAllProductCategoryQuery,
} from "../api/productsApi";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [updating, setUpdating] = useState(false);

  const { data: product, isLoading: productLoading } =
    useGetProductByIdQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllProductCategoryQuery();

  useEffect(() => {
    if (product) {
      setName(product?.data.name);
      setDescription(product?.data.description);
      setBrand(product?.data.brand);
      setImage(product?.data.image);
      setCategory(product?.data.category);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      const response = await updateProduct({
        id,
        name,
        description,
        brand,
        image,
        category,
      }).unwrap();

      setUpdating(false);
      navigate("/view-products");
      window.location.reload();
    } catch (error) {
      console.error("Error updating product:", error);
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-gray-300">
              Edit Product
            </h2>
            {productLoading ? (
              <p>Loading product...</p>
            ) : (
              <form className="p-6 w-full" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 rounded bg-gray-900 p-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="Type product name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="Type product description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="Type brand name"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="http://example.com/image.jpg"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Category
                    </label>
                    {categoriesLoading ? (
                      <p>Loading categories...</p>
                    ) : (
                      <select
                        name="category"
                        id="category"
                        className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
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
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-center text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800"
                  >
                    {updating ? "Updating..." : "Updating Ad"}
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

export default EditProduct;
