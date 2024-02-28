import React, { useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAddPostsMutation, useGetPostCategoryQuery } from "../api/blogApi";

function ManageBlogs() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
  } = useGetPostCategoryQuery();
  // console.log(categories?.data.categories);
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
    setCategory(event.target.value);
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    console.log(title , image ,content , category)

    // try {
    //   const { data } = await addPost({
    //     variables: {
    //       title: title,
    //       image: image.name,
    //       content: content,
    //       categoryId: category,
    //     },
    //   });

    //   console.log("New post added:", data.addPost);

    //   setTitle("");
    //   setImage(null);
    //   setContent("");
    //   setCategory("");
    // } catch (error) {
    //   console.error("Error adding post:", error);
    // }
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
      <div className="mx-auto ml-72 w-full overflow-hidden mt-20">
        <div className="">
          <h2 className="text-center font-bold mb-3 w-3/4 text-gray-300">
            Post A Blog
          </h2>
        </div>
        <form
          onSubmit={submitFormHandler}
          className="flex flex-col gap-y-2 rounded bg-gray-900 p-3 w-3/4"
        >
          <label htmlFor="post title" className="mb-2 text-gray-300 font-sans">
            Post Title
          </label>
          <input
            type="text"
            placeholder="Enter a post title"
            className="border p-2 text-black outline-none bg-gray-300 w-full"
            value={title}
            onChange={handleTitleChange}
          />

          <label htmlFor="post title" className="mb-2 text-gray-300 font-sans">
            Image
          </label>
          <input
            type="file"
            placeholder="Enter a post title"
            className="border p-2 text-black outline-none bg-gray-300 w-full"
            onChange={handleImageChange}
          />

          <label htmlFor="content" className="mb-2 text-gray-300">
            Post Content
          </label>
          <QuillEditor
            modules={module}
            className="bg-gray-300 text-black outline-none"
            theme="snow"
            value={content}
            onChange={handleContentChange}
          />

          <label htmlFor="category" className="mb-2 text-gray-300">
            Select Category
          </label>
          <select
            name="category"
            className="border p-2 text-black outline-none bg-gray-300 w-full"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="skin">Skin</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <button
            type="submit"
            className="border bg-green-400 mx-auto px-3 mt-3 rounded text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManageBlogs;
