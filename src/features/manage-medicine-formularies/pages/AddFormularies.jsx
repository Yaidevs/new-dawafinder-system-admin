/* eslint-disable */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddFormularyMutation } from "../api/formularyApi";

const AddFormularies = () => {
  const [adding, setAdding] = useState(false);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [addFormulary] = useAddFormularyMutation();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    try {
      setAdding(true);
      await addFormulary({
        title,
        description,
      }).unwrap();

      // Reset form fields
      setTitle("");
      setDescription("");
      setAdding(false);
      navigate("/view-formularies");
    } catch (error) {
      setAdding(false);
      console.error("Error adding formulary:", error);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section>
          <div>
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-gray-300">
              Add Formulary
            </h2>
            <form className="p-6 w-full" onSubmit={submitFormHandler}>
              <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 rounded bg-gray-900 p-8">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Type title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={8}
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Type description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="px-5 py-2.5 text-center text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none"
                >
                  {adding ? "Adding..." : "Add Formulary"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddFormularies;
