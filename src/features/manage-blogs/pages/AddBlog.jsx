/* eslint-disable */

import React, { useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useAddPostsMutation, useGetPostCategoryQuery } from "../api/blogApi";
import { storage } from "../../../firebase";

function ManageBlogs() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("65d64cb4ec5719c7c481ed11");
  const [tags, setTags] = useState([]);
  const [creatorId, setCreatorId] = useState("65d64cb4ec5719c7c481ed11");

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
  } = useGetPostCategoryQuery();

  const [addPost] = useAddPostsMutation();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setCategory(categoryId);

    setCreatorId(categoryId);
  };

  const handleTagsChange = (event) => {
    const newTags = event.target.value.split(",").map((tag) => tag.trim());
    setTags(newTags);
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    try {
      if (image === null) return;

      const imageRef = ref(storage, `Blog-images/${image.name + v4()}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      const response = await addPost({
        title,
        image: imageUrl,
        content,
        categoryId: category,
        tagNames: tags,
        creatorId,
      }).unwrap();

      setTitle("");
      setImage(null);
      setContent("");
      setCategory("");
      setTags([]);
      setCreatorId("");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-gray-300">
              Post A Blog
            </h2>
            <form onSubmit={submitFormHandler} className=" p-6  w-full">
              <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 rounded bg-gray-900 p-8">
                <div>
                  <label
                    htmlFor="post-title"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Post Title
                  </label>
                  <input
                    type="text"
                    name="post-title"
                    id="post-title"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Enter a post title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    onChange={handleImageChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Post Content
                  </label>
                  <QuillEditor
                    modules={module}
                    className="bg-gray-300 text-black sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    theme="snow"
                    value={content}
                    onChange={handleContentChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="tags"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Enter tags separated by commas"
                    value={tags.join(",")}
                    onChange={handleTagsChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="creatorId"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Creator ID
                  </label>
                  <input
                    type="text"
                    name="creatorId"
                    id="creatorId"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Enter creator ID"
                    value={creatorId}
                    onChange={(event) => setCreatorId(event.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Select Category
                  </label>
                  <select
                    name="category"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    {isLoading && <option>Loading...</option>}
                    {isError && <option>Error fetching categories</option>}
                    {isSuccess &&
                      categories?.data.categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center text-black px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-green-400 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManageBlogs;
