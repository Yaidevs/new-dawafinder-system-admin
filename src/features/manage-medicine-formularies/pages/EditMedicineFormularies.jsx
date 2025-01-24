/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetMedicineFormularyByIdQuery,
  useUpdateMedicineFormularyMutation,
} from "../api/formularyApi";


const EditMedicineFormularies = () => {
  const { id } = useParams();
  const [updated_by, setUpdatedBy] = useState("string");
  const {
    data: formulary,
    isLoading,
    error,
  } = useGetMedicineFormularyByIdQuery(id);
  const [updateFormulary] = useUpdateMedicineFormularyMutation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (formulary) {
      setTitle(formulary?.data.medicineFormulary.title);
      setDescription(formulary?.data.medicineFormulary.description);
    }
  }, [formulary]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      await updateFormulary({
        _id: id,
        title,
        description,
        updated_by,
      }).unwrap();
      setUpdating(false);
      navigate("/view-medicine-formularies");
      window.location.reload();
    } catch (err) {
      console.error("Error updating formulary:", err);
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {isLoading ? (
              <p className="text-center text-gray-500">
                Loading formulary data...
              </p>
            ) : error ? (
              <p className="text-center text-red-500">
                Error loading formulary data. Please try again later.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="Enter formulary title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows={4}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter formulary description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
                    disabled={updating}
                  >
                    {updating ? "Updating..." : "Update Formulary"}
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

export default EditMedicineFormularies;
