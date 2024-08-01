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
      window.location.reload();
    } catch (error) {
      console.error("Error updating product category:", error);
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-gray-300">
              Edit Product Category
            </h2>
            {categoryLoading ? (
              <p>Loading category...</p>
            ) : (
              <form className="p-6 w-full" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 rounded bg-gray-900 p-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Category Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="Type category name"
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
                      placeholder="Type category description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center text-black px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-green-400 rounded-lg"
                >
                  {updating ? "Updating ..." : "Update Category"}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditProductCategory;
