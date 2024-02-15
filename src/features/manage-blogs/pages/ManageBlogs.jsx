import { useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

function ManageBlogs() {
  const [value, setValue] = useState("");
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
          <h2 className="text-center font-bold mb-3 w-3/4 text-gray-300">Post A Blog</h2>
        </div>
        <form action="" className="flex flex-col gap-y-2  bg-gray-900  p-3 w-3/4">
          <label htmlFor="post title" className="mb-2 text-gray-300 font-sans">
            Post Title
          </label>
          <input
            type="text"
            placeholder="Enter a post title"
            className="border p-2 text-black outline-none bg-gray-300  w-full"
          />
          <label htmlFor="content" className="mb-2 text-gray-300">
            Post Content
          </label>
          <QuillEditor
            modules={module}
            className="bg-gray-300  text-black outline-none"
            theme="snow"
            value={value}
            onChange={(value) => setValue(value)}
          />
          {/* <div className="bg-red-400">{value}</div> */}
          <button className="border bg-green-400 mx-auto px-3 mt-3  rounded text-white ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManageBlogs;
