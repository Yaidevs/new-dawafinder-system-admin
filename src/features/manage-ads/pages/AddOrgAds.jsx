import React, { useState } from "react";
import { useAddOrgForAdsMutation } from "../api/adsApi";

const AddOrgAds = () => {
  const [adding, setAdding] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [createdBy] = useState("Barnaan");
  const [addOrgs] = useAddOrgForAdsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAdding(true);
      await addOrgs({
        orgName,
        email,
        phoneNumber,
        createdBy,
      }).unwrap();

      // Reset form fields after submission
      setOrgName("");
      setEmail("");
      setPhoneNumber("");
      setAdding(false);
    } catch (error) {
      setAdding(false);
      console.error("Error adding org:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* <h2 className="mb-6 text-3xl font-semibold text-center text-gray-900">
              Add Organization for Ads
            </h2> */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <label
                    htmlFor="org-name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="org-name"
                    id="org-name"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter organization name"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone-number"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-6 py-3 text-lg font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
                >
                  {adding ? "Adding..." : "Add Organization"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddOrgAds;
