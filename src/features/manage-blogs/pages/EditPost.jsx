import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useUpdatePostMutation,
  useGetPostCategoryQuery,
  useGetPostByIdQuery,
} from "../api/blogApi";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [creatorId, setCreatorId] = useState("");

  const { data: post, isLoading: postLoading } = useGetPostByIdQuery(id);
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetPostCategoryQuery();
  const [updatePost] = useUpdatePostMutation();

  useEffect(() => {
    if (post) {
      setTitle(post.data?.post.title);
      setImageUrl(post.data?.post.image);
      setContent(post.data?.post.content);
      setCategory(post.data?.post.categoryId);
      setTags(post.data?.post.tagNames || []);
      setCreatorId(post.data?.post.creatorId || "");
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost({
        id,
        title,
        image: imageUrl,
        content,
        categoryId: category,
        tagNames: tags,
        creatorId,
      }).unwrap();
      navigate("/view-post");
      window.location.reload();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {postLoading ? (
              <p>Loading post...</p>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Post Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Image URL"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="content"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Content
                    </label>
                    <QuillEditor
                      modules={module}
                      className="bg-white text-black sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tags"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      id="tags"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter tags separated by commas"
                      value={tags.join(",")}
                      onChange={(e) =>
                        setTags(
                          e.target.value.split(",").map((tag) => tag.trim())
                        )
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {categoriesLoading && <option>Loading...</option>}
                      {categoriesError && (
                        <option>Error fetching categories</option>
                      )}
                      {categories?.data?.categories?.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="creatorId"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Creator ID
                    </label>
                    <input
                      type="text"
                      name="creatorId"
                      id="creatorId"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Creator ID"
                      value={creatorId}
                      onChange={(e) => setCreatorId(e.target.value)}
                    />
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
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

const module = {
  toolbar: [
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
  ],
};

export default EditPost;
