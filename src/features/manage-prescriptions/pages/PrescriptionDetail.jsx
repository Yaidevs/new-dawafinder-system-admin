import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
  useGetPrescriptionByIdQuery,
  useSendPrescriptionResultMutation,
} from "../api/prescriptionsApi";
import { useParams } from "react-router-dom";

function PrescriptionDetail() {
  const { id } = useParams();
  const { data } = useGetPrescriptionByIdQuery(id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adding, setAdding] = useState(false);
  const [addPrescription] = useSendPrescriptionResultMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAdding(true);
      const res = await addPrescription({
        title,
        prescription: id,
        description,
      }).unwrap();
      // Reset form fields after submission
      setTitle("");
      setDescription("");
      setAdding(false);
      window.location.reload();
    } catch (error) {
      setAdding(false);
      console.error("Error submiting:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
            {/* Image Section */}
            <div className="flex justify-center">
              <Zoom>
                <img
                  src={data?.data.imageLink}
                  alt="Prescription"
                  className="w-full max-w-sm rounded-md shadow-md"
                />
              </Zoom>
            </div>

            {/* Form Section */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Title */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Enter title"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Enter description"
                      rows={4}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
                  >
                    {adding ? "submiting ..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrescriptionDetail;
