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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-200">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
            <h2 className="mb-6 text-3xl font-semibold text-center text-white">
              Add Organization for Ads
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <label
                    htmlFor="org-name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="org-name"
                    id="org-name"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter organization name"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone-number"
                    className="block mb-2 text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
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
                  className="px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
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
