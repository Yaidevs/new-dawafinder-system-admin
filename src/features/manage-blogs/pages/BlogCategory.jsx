import React from "react";

const BlogCategory = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="mx-auto ml-72 w-full overflow-hidden mt-20">
        <div className="">
          <h2 className="text-center font-bold mb-3 w-3/4 text-gray-300">
            Add Blog Category
          </h2>
        </div>
        <form className="flex flex-col gap-y-2 rounded bg-gray-900 p-3 w-3/4">
          <label htmlFor="category" className="mb-2 text-gray-300 font-sans">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter category name"
            className="border p-2 text-black outline-none bg-gray-300 w-full"
          />
          <button
            type="submit"
            className="border bg-green-400 mx-auto px-3 mt-3 rounded text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCategory;
