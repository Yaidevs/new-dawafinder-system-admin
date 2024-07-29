/* eslint-disable */

import React, { useState } from "react";
import { useAddOrgForAdsMutation } from "../api/adsApi";
const AddOrgAds = () => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNUmber] = useState("");
  const [createdBy, setCreatedBy] = useState("Barnaan");
  const [addOrgs] = useAddOrgForAdsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addOrgs({
        orgName,
        email,
        phoneNumber,
        createdBy,
      }).unwrap();

      setOrgName("");
      setEmail("");
      setPhoneNUmber("");
    } catch (error) {
      console.error("Error adding org:", error);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-gray-300">
              Add Organization for Ads
            </h2>
            <form className=" p-6  w-full" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 rounded bg-gray-900 p-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="org-name"
                    id="org-name"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Type org. name"
                    onChange={(e) => setOrgName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="abel@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="0933239293"
                    onChange={(e) => setPhoneNUmber(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center text-black px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-green-400 rounded-lg"
              >
                Add Org.
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddOrgAds;
