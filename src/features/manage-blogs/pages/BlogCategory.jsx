import React from "react";

const BlogCategory = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* <h2 className="mb-6 text-3xl font-semibold text-center text-gray-900">
              Add Blog Category
            </h2> */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  id="category"
                  placeholder="Enter category name"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogCategory;
