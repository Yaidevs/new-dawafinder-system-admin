/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddFormularyForMedicineMutation,
  useGetAllFormularyCategoriesQuery,
} from "../api/formularyApi";

const AddFormulary = () => {
  const [category, setCategory] = useState("");
  const [medicine, setMedicine] = useState("");
  const [suspension, setSuspension] = useState("");
  const [tablet, setTablet] = useState("");
  const [indication, setIndication] = useState("");
  const [caution, setCaution] = useState("");
  const [drugInteraction, setDrugInteraction] = useState("");
  const [contraindication, setContraindication] = useState("");
  const [sideEffect, setSideEffect] = useState("");
  const [dose, setDose] = useState("");
  const [storage, setStorage] = useState("");
  const [createdBy] = useState("string"); // Default value
  const [adding, setAdding] = useState(false);

  const [addFormulary] = useAddFormularyForMedicineMutation();
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllFormularyCategoriesQuery();
  const navigate = useNavigate();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    try {
      setAdding(true);
      await addFormulary({
        categoryId:category,
        medicine,
        suspension,
        tablet,
        indication,
        caution,
        drug_interaction: drugInteraction,
        contraindication,
        side_effect: sideEffect,
        dose,
        storage,
        created_by: createdBy,
      }).unwrap();

      // Reset form fields
      setCategory("");
      setMedicine("");
      setSuspension("");
      setTablet("");
      setIndication("");
      setCaution("");
      setDrugInteraction("");
      setContraindication("");
      setSideEffect("");
      setDose("");
      setStorage("");
      setAdding(false);
      navigate("/view-formulary");
      window.location.reload();
    } catch (error) {
      setAdding(false);
      console.error("Error adding formulary:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={submitFormHandler} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  {categoriesLoading ? (
                    <p>Loading categories...</p>
                  ) : (
                    <select
                      name="category"
                      id="category"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="">Select a category</option>
                      {categories?.data?.categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="medicine"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Medicine
                  </label>
                  <input
                    type="text"
                    name="medicine"
                    id="medicine"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter medicine name"
                    value={medicine}
                    onChange={(e) => setMedicine(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="suspension"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Suspension
                  </label>
                  <input
                    type="text"
                    name="suspension"
                    id="suspension"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter suspension details"
                    value={suspension}
                    onChange={(e) => setSuspension(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="tablet"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Tablet
                  </label>
                  <input
                    type="text"
                    name="tablet"
                    id="tablet"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter tablet details"
                    value={tablet}
                    onChange={(e) => setTablet(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="indication"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Indication
                  </label>
                  <input
                    type="text"
                    name="indication"
                    id="indication"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter indication"
                    value={indication}
                    onChange={(e) => setIndication(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="caution"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Caution
                  </label>
                  <input
                    type="text"
                    name="caution"
                    id="caution"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter caution"
                    value={caution}
                    onChange={(e) => setCaution(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="drugInteraction"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Drug Interaction
                  </label>
                  <input
                    type="text"
                    name="drugInteraction"
                    id="drugInteraction"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter drug interaction"
                    value={drugInteraction}
                    onChange={(e) => setDrugInteraction(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contraindication"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Contraindication
                  </label>
                  <input
                    type="text"
                    name="contraindication"
                    id="contraindication"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter contraindication"
                    value={contraindication}
                    onChange={(e) => setContraindication(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="sideEffect"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Side Effect
                  </label>
                  <input
                    type="text"
                    name="sideEffect"
                    id="sideEffect"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter side effect"
                    value={sideEffect}
                    onChange={(e) => setSideEffect(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="dose"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Dose
                  </label>
                  <input
                    type="text"
                    name="dose"
                    id="dose"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter dose"
                    value={dose}
                    onChange={(e) => setDose(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="storage"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Storage
                  </label>
                  <input
                    type="text"
                    name="storage"
                    id="storage"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter storage"
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
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

export default AddFormulary;
