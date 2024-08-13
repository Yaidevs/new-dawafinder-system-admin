import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useDeletePostMutation, useGetAllPostsQuery } from "../api/blogApi";

const PostedBlog = () => {
  const { data: posts, isLoading, isSuccess } = useGetAllPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const onDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      try {
        await deletePost(id).unwrap();
        window.location.reload();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  if (isLoading || !isSuccess || !posts) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300">
        <div className="text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.data.posts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-200">
      <div className="h-full flex flex-col gap-y-6 ml-14 p-8 mt-14 mb-10 md:ml-64">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-white">Posted Blogs</h1>
          <Link to="/post-blog">
            <button className="mb-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
              Add New Post
            </button>
          </Link>
        </div>
        {currentPosts.map((post) => (
          <div key={post._id} className="bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <img
                src={post.image}
                alt="Blog"
                className="w-full md:w-1/3 rounded-lg shadow-md"
              />
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {post.title}
                </h2>
                <div className="text-gray-300">{parse(post.content)}</div>
              </div>
            </div>
            <div className="flex justify-end mt-4 gap-x-4">
              <Link
                to={`/edit-blog/${post._id}`}
                className="flex items-center gap-x-2 text-blue-500 hover:text-blue-400 transition duration-300"
              >
                <CiEdit size={24} />
                <span>Edit</span>
              </Link>
              <button
                onClick={() => onDelete(post._id)}
                className="flex items-center gap-x-2 text-red-500 hover:text-red-400 transition duration-300"
              >
                <AiOutlineDelete size={24} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-l-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 bg-gray-800 text-gray-300">
            Page {currentPage}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(posts.data.posts.length / postsPerPage)
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostedBlog;
