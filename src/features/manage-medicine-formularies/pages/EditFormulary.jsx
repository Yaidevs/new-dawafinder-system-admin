/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetAllFormularyCategoriesQuery,
  useGetFormularyByIdQuery,
  useUpdateFormularyMutation,
} from "../api/formularyApi";

const EditFormulary = () => {
  const { id } = useParams(); 
  const { data: formulary, isLoading: formularyLoading } =
    useGetFormularyByIdQuery(id);
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllFormularyCategoriesQuery();
  const [updateFormulary] = useUpdateFormularyMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    medicine: "",
    suspension: "",
    tablet: "",
    indication: "",
    caution: "",
    drugInteraction: "",
    contraindication: "",
    sideEffect: "",
    dose: "",
    storage: "",
  });

  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (formulary) {
      setFormData({
        category: formulary?.data.formulary.categoryId || "",
        medicine: formulary?.data.formulary.medicine || "",
        suspension: formulary?.data.formulary.suspension || "",
        tablet: formulary?.data.formulary.tablet || "",
        indication: formulary?.data.formulary.indication || "",
        caution: formulary?.data.formulary.caution || "",
        drugInteraction: formulary?.data.formulary.drug_interaction || "",
        contraindication: formulary?.data.formulary.contraindication || "",
        sideEffect: formulary?.data.formulary.side_effect || "",
        dose: formulary?.data.formulary.dose || "",
        storage: formulary?.data.formulary.storage || "",
      });
    }
  }, [formulary]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      await updateFormulary({ _id: id, ...formData }).unwrap();
      navigate("/view-formulary");
      window.location.reload();
    } catch (error) {
      console.error("Error updating formulary:", error);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {formularyLoading || categoriesLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="text-lg font-semibold text-gray-600">Loading...</div>
        </div>
      ) : (
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <section className="px-6 py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
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
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a category</option>
                      {categories?.data?.categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Repeat the input fields with pre-filled data */}
                  {Object.entries(formData).map(([key, value]) => {
                    if (key === "category") return null; // Skip category field
                    return (
                      <div key={key}>
                        <label
                          htmlFor={key}
                          className="block mb-2 text-sm font-medium text-gray-700 capitalize"
                        >
                          {key.replace(/([A-Z])/g, " $1")}
                        </label>
                        <input
                          type="text"
                          name={key}
                          id={key}
                          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                          placeholder={`Enter ${key}`}
                          value={value}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    );
                  })}
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
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default EditFormulary;
