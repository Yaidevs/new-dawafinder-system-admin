import React from "react";
import pharma4 from "../../../assets/pharma4.jpeg";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useGetAllPostsQuery } from "../api/blogApi";

const PostedBlog = () => {
  const { data: posts, isLoading, isSuccess } = useGetAllPostsQuery();

  console.log(posts?.data.posts);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full flex flex-col gap-y-3  ml-14 p-8  mt-14 mb-10 md:ml-64 ">
        <div className="flex justify-end">
          <Link to="/post-blog">
            <button className="mb-3 bg-green-400 px-4 py-1 text-black rounded">
              Add Post
            </button>
          </Link>
        </div>
        <div className="border  bg-gray-900 rounded p-3">
          <div className="flex items-center gap-x-3">
            <div>
              <img
                src={pharma4}
                alt="No"
                width={500}
                height={500}
                className="rounded"
              />
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, totam labore nihil sunt tempore quasi fugiat quod ea,
              ipsam itaque eligendi impedit illum excepturi enim ad laudantium,
              quam cupiditate. Error culpa, recusandae excepturi voluptates
              earum iusto? Ratione tempora sapiente impedit voluptatem sunt
              numquam ullam debitis mollitia dolorem repellat, officia
              voluptatibus?
            </div>
          </div>
          <div className="flex justify-end gap-x-5">
            <div className="flex items-center justify-center gap-x-2 cursor-pointer font-semibold">
              <CiEdit size={30} />
              <div>Edit</div>
            </div>
            <div className="flex items-center justify-center gap-x-2 cursor-pointer font-semibold">
              <AiOutlineDelete size={30} color="red" />
              <div>Delete</div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-900 rounded p-3">
          <div className="flex items-center gap-x-3">
            <div>
              <img
                src={pharma4}
                alt="No"
                width={500}
                height={500}
                className="rounded"
              />
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, totam labore nihil sunt tempore quasi fugiat quod ea,
              ipsam itaque eligendi impedit illum excepturi enim ad laudantium,
              quam cupiditate. Error culpa, recusandae excepturi voluptates
              earum iusto? Ratione tempora sapiente impedit voluptatem sunt
              numquam ullam debitis mollitia dolorem repellat, officia
              voluptatibus?
            </div>
          </div>
          <div className="flex justify-end gap-x-5">
            <div className="flex items-center justify-center gap-x-2 cursor-pointer font-semibold">
              <CiEdit size={30} />
              <div>Edit</div>
            </div>
            <div className="flex items-center justify-center gap-x-2 cursor-pointer font-semibold">
              <AiOutlineDelete size={30} color="red" />
              <div>Delete</div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-900 rounded p-3">
          <div className="flex items-center gap-x-3">
            <div>
              <img
                src={pharma4}
                alt="No"
                width={500}
                height={500}
                className="rounded"
              />
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, totam labore nihil sunt tempore quasi fugiat quod ea,
              ipsam itaque eligendi impedit illum excepturi enim ad laudantium,
              quam cupiditate. Error culpa, recusandae excepturi voluptates
              earum iusto? Ratione tempora sapiente impedit voluptatem sunt
              numquam ullam debitis mollitia dolorem repellat, officia
              voluptatibus?
            </div>
          </div>
          <div className="flex justify-end gap-x-5">
            <div className="flex items-center justify-center gap-x-2 cursor-pointer font-semibold">
              <CiEdit size={30} />
              <div>Edit</div>
            </div>
            <div className="flex items-center justify-center gap-x-2 cursor-pointer font-semibold">
              <AiOutlineDelete size={30} color="red" />
              <div>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedBlog;
