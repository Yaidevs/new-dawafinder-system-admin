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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-200">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
            <h2 className="mb-6 text-3xl font-semibold text-center text-white">
              Add New Ad
            </h2>
            <form onSubmit={submitFormHandler} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="organizations"
                    className="block mb-2 text-sm font-medium"
                  >
                    Select Organization
                  </label>
                  <select
                    id="organizations"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
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

                <div>
                  <label
                    htmlFor="tags"
                    className="block mb-2 text-sm font-medium"
                  >
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
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
                    className="block mb-2 text-sm font-medium"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="linkUrl"
                    className="block mb-2 text-sm font-medium"
                  >
                    Link URL
                  </label>
                  <input
                    type="text"
                    name="link-url"
                    id="link-url"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter link URL"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="start-date"
                    className="block mb-2 text-sm font-medium"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="start-date"
                    id="start-date"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="end-date"
                    className="block mb-2 text-sm font-medium"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="end-date"
                    id="end-date"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="target-audience"
                    className="block mb-2 text-sm font-medium"
                  >
                    Target Audience
                  </label>
                  <input
                    type="text"
                    name="target-audience"
                    id="target-audience"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
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
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="address-line"
                    className="block mb-2 text-sm font-medium"
                  >
                    Address Line
                  </label>
                  <input
                    type="text"
                    name="address-line"
                    id="address-line"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter address line"
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={6}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-6 py-3 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none transition-colors duration-300"
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
