import React, { useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useAddPostsMutation, useGetPostCategoryQuery } from "../api/blogApi";
import { storage } from "../../../firebase";

function AddBlog() {
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

      await addPost({
        title,
        image: imageUrl,
        content,
        categoryId: category,
        tagNames: tags,
        creatorId,
      }).unwrap();

      // Reset form fields after submission
      setTitle("");
      setImage(null);
      setContent("");
      setCategory("65d64cb4ec5719c7c481ed11");
      setTags([]);
      setCreatorId("65d64cb4ec5719c7c481ed11");
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-200">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
            <h2 className="mb-6 text-3xl font-semibold text-center text-white">
              Post a Blog
            </h2>
            <form onSubmit={submitFormHandler} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="post-title"
                    className="block mb-2 text-sm font-medium"
                  >
                    Post Title
                  </label>
                  <input
                    type="text"
                    name="post-title"
                    id="post-title"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter a post title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    onChange={handleImageChange}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium"
                  >
                    Post Content
                  </label>
                  <QuillEditor
                    modules={module}
                    className="bg-white text-black sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    theme="snow"
                    value={content}
                    onChange={handleContentChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="tags"
                    className="block mb-2 text-sm font-medium"
                  >
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter tags separated by commas"
                    value={tags.join(",")}
                    onChange={handleTagsChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="creatorId"
                    className="block mb-2 text-sm font-medium"
                  >
                    Creator ID
                  </label>
                  <input
                    type="text"
                    name="creatorId"
                    id="creatorId"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter creator ID"
                    value={creatorId}
                    onChange={(event) => setCreatorId(event.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium"
                  >
                    Select Category
                  </label>
                  <select
                    name="category"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    value={category}
                    onChange={handleCategoryChange}
                    required
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
}

export default AddBlog;
