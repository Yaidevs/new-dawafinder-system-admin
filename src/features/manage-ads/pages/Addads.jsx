import React, { useState } from "react";
import { useAddAdsMutation, useGetOrgsQuery } from "../api/adsApi";
import { useNavigate } from "react-router-dom";

const AddAds = () => {
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
      await addAds({
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

      // Reset form fields after submission
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
      setTargetAudience([]);
      setAdding(false);
      navigate("/view-ads");
    } catch (error) {
      setAdding(false);
      console.error("Error adding ad:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* <h2 className="mb-6 text-3xl font-semibold text-center text-gray-900">
              Add New Ad
            </h2> */}
            <form onSubmit={submitFormHandler} className="space-y-6">
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
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="organizations"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Select Organization
                  </label>
                  <select
                    id="organizations"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    value={selectedOrganization}
                    onChange={(e) => setSelectedOrganization(e.target.value)}
                    required
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

                <div className="sm:col-span-2">
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
                    placeholder="Enter tags, separated by commas"
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
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="linkUrl"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Link URL
                  </label>
                  <input
                    type="text"
                    name="linkUrl"
                    id="linkUrl"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter link URL"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="start-date"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    id="start-date"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="end-date"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    id="end-date"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="target-audience"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Target Audience
                  </label>
                  <input
                    type="text"
                    name="targetAudience"
                    id="target-audience"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter target audience"
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
                    htmlFor="addressLine"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Address Line
                  </label>
                  <input
                    type="text"
                    name="addressLine"
                    id="addressLine"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter address line"
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                    rows="4"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  disabled={adding}
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

export default AddAds;
