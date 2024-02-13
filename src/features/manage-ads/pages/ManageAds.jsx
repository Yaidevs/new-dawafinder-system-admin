import { useState} from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

function ManageAds() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="mx-auto ml-72 w-full overflow-hidden mt-20">
        <div className="">
          <h2 className="text-center font-bold mb-3 w-3/4">Post A Blog</h2>
        </div>
        <form action="" className="flex flex-col gap-y-2 border p-3 w-3/4">
          <label htmlFor="post title" className="mb-2">
            Post Title
          </label>
          <input
            type="text"
            placeholder="Enter a post title"
            className="border p-2 text-black outline-none  w-full"
          />
          <label htmlFor="content" className="mb-2">
            Post Content
          </label>
          <QuillEditor
            className = 'bg-white  text-black outline-none'
            theme="snow"
            value={value}
            onChange={(value) => setValue(value)}
          />
          <div className="bg-red-400">{value}</div>
          <button className="border bg-green-400 mx-auto px-3 rounded text-black ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManageAds;
