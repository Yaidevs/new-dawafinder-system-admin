import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useGetAllPostsQuery } from "../api/blogApi";
import pharma4 from "../../../assets/pharma4.jpeg";

const PostedBlog = () => {
  const { data: posts, isLoading, isSuccess } = useGetAllPostsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  if (isLoading || !isSuccess || !posts) {
    return (
      <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
        <div className="h-full flex flex-col gap-y-3 ml-14 p-8 mt-14 mb-10 md:ml-64">
          <div className="text-center text-gray-300">Loading...</div>
        </div>
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
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full flex flex-col gap-y-3 ml-14 p-8 mt-14 mb-10 md:ml-64">
        <div className="flex justify-end">
          <Link to="/post-blog">
            <button className="mb-3 bg-green-400 px-4 py-1 text-black rounded">
              Add Post
            </button>
          </Link>
        </div>
        {currentPosts.map((post) => (
          <div key={post.id} className="border bg-gray-900 rounded p-3">
            <div className="flex items-center gap-x-3">
              <div>
                <img
                  src={pharma4}
                  alt="No"
                  width={200}
                  height={200}
                  className="rounded"
                />
              </div>
              <div className="w-5/6">{parse(post.content)}</div>
            </div>
            <div className="flex justify-end gap-x-5">
              <div className="flex items-center justify-center gap-x-2 cursor-pointer font-semibold">
                <CiEdit size={30} />
                <button>Edit</button>
              </div>
              <div className="flex items-center justify-center gap-x-2 cursor-pointer font-semibold">
                <AiOutlineDelete size={30} color="red" />
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-blue-500 text-white mr-2"
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentPage(1)}
            className={"bg-gray-800 text-gray-300 rounded px-3 py-1"}
          >
            {currentPage}
          </button>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(posts.data.posts.length / postsPerPage)
            }
            className="px-3 py-1 rounded bg-blue-500 text-white ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostedBlog;
