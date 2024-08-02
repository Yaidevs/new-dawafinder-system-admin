/* eslint-disable */

import React, { useState } from "react";
import { useAddAdsMutation, useGetOrgsQuery } from "../api/adsApi";
import { useNavigate } from "react-router-dom";

const Addads = () => {
  const [adding, setAdding] = useState(false);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [targetAudience, setTargetAudience] = useState([]);
  const [addressLine, setAddressLine] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const [addAds] = useAddAdsMutation();
  const { data: orgs, isLoading, isSuccess, isError } = useGetOrgsQuery();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const targetGeo = [{ addressLine, city, country }];

    try {
      setAdding(true);
      const response = await addAds({
        title,
        orgId: selectedOrganization,
        tags,
        imageUrl,
        linkUrl,
        startDate,
        endDate,
        price,
        targetAudience,
        targetGeo,
        description,
      }).unwrap();

      setTitle("");
      setSelectedOrganization("");
      setTags([]);
      setAddressLine("");
      setCity("");
      setCountry("");
      setDescription("");
      setImageUrl("");
      setLinkUrl("");
      setEndDate("");
      setStartDate("");
      setPrice("");
      setTargetAudience("");
      setAdding(false);
      navigate("/view-ads");
    } catch (error) {
      setAdding(false);
      console.error("Error adding post:", error);
    }
  };
  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-gray-300">
              Add Ads
            </h2>
            <form className=" p-6  w-full" onSubmit={submitFormHandler}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 rounded bg-gray-900 p-8">
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

                <div>
                  <label
                    htmlFor="organizations"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Select organizations
                  </label>
                  <select
                    id="organizations"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    value={selectedOrganization}
                    onChange={(e) => setSelectedOrganization(e.target.value)}
                  >
                    {isLoading && <option>Loading...</option>}
                    {isError && <option>Error fetching orgs</option>}
                    {isSuccess &&
                      orgs?.data.map((org) => (
                        <option key={org._id} value={org._id}>
                          {org.orgName}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="tags"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Tags"
                    value={tags}
                    onChange={(e) =>
                      setTags(
                        e.target.value.split(",").map((tag) => tag.trim())
                      )
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="imageUrl"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    ImagUrl
                  </label>
                  <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="linkUrl"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    LinkUrl
                  </label>
                  <input
                    type="text"
                    name="link-url"
                    id="link-url"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="start-date"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="start-date"
                    id="start-date"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="end-date"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="end-date"
                    id="end-date"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="which type of org."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="target-audience"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Target Audience
                  </label>
                  <input
                    type="text"
                    name="target-audience"
                    id="target-audience"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="target-audience"
                    value={targetAudience}
                    onChange={(e) =>
                      setTargetAudience(
                        e.target.value.split(",").map((tag) => tag.trim())
                      )
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="address-line"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Address Line
                  </label>
                  <input
                    type="text"
                    name="address-line"
                    id="address-line"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="address-line"
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
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
                    placeholder="Add about org."
                    defaultValue=""
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="px-5 py-2.5 text-center text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800  focus:outline-none"
                >
                  {adding ? "Adding..." : "Add Ad"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Addads;
