import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

function ManageAds() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="mx-auto ml-80 mt-20">
        <div className="">
          <h2 className="text-center font-bold mb-3">Post A Blog</h2>
        </div>
        <form action="" className="flex flex-col gap-y-2 border p-3">
          <label htmlFor="post title" className="mb-2">
            Post Title
          </label>
          <input
            type="text"
            placeholder="Enter a post title"
            className="border p-2 text-black outline-none"
          />
          <label htmlFor="content" className="mb-2">
            Content
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            className="text-black"
            onChange={(newContent) => setContent(newContent)}
          />
          <div className="bg-red-400">{content}</div>
          <button className="border bg-green-400 mx-auto px-3 rounded text-black ">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ManageAds;
