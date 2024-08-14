import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useUpdateAdsMutation,
  useGetOrgsQuery,
  useGetAdsByIdQuery,
} from "../api/adsApi";

const EditAds = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [updating, setUpdating] = useState(false);

  const { data: ad, isLoading: adLoading } = useGetAdsByIdQuery(id);
  const [updateAd] = useUpdateAdsMutation();
  const {
    data: orgs,
    isLoading: orgsLoading,
    isError: orgsError,
  } = useGetOrgsQuery();

  useEffect(() => {
    if (ad) {
      setTitle(ad?.data.title);
      setSelectedOrganization(ad?.data.orgId);
      setTags(ad?.data.tags ? ad.data.tags.join(", ") : "");
      setPrice(ad?.data.price);
      setImageUrl(ad?.data.imageUrl);
      setLinkUrl(ad?.data.linkUrl);
      setStartDate(ad?.data.startDate);
      setEndDate(ad?.data.endDate);
      setTargetAudience(
        ad?.data.targetAudience ? ad.data.targetAudience.join(", ") : ""
      );
      setAddressLine(ad?.data.targetGeo[0]?.addressLine || "");
      setCity(ad?.data.targetGeo[0]?.city || "");
      setCountry(ad?.data.targetGeo[0]?.country || "");
      setDescription(ad?.data.description);
    }
  }, [ad]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      const targetGeo = [{ addressLine, city, country }];
      await updateAd({
        id,
        title,
        orgId: selectedOrganization,
        tags: tags.split(",").map((tag) => tag.trim()),
        imageUrl,
        linkUrl,
        startDate,
        endDate,
        price,
        targetAudience: targetAudience
          .split(",")
          .map((audience) => audience.trim()),
        targetGeo,
        description,
      }).unwrap();

      setUpdating(false);
      navigate("/view-ads");
    } catch (error) {
      console.error("Error updating ad:", error);
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* <h2 className="mb-6 text-3xl font-semibold text-center text-gray-900">
              Edit Ad
            </h2> */}
            {adLoading ? (
              <p>Loading ad...</p>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
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
                      placeholder="Type title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
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
                    >
                      {orgsLoading && <option>Loading...</option>}
                      {orgsError && <option>Error fetching organizations</option>}
                      {orgs &&
                        orgs.data.map((org) => (
                          <option key={org._id} value={org._id}>
                            {org.orgName}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
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
                      placeholder="Tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
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
                      name="image-url"
                      id="image-url"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
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
                      name="link-url"
                      id="link-url"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
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
                      name="start-date"
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
                      name="end-date"
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
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
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
                      name="target-audience"
                      id="target-audience"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Target Audience"
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
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
                      placeholder="Country"
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
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="addressLine"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="addressLine"
                      id="addressLine"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Address"
                      value={addressLine}
                      onChange={(e) => setAddressLine(e.target.value)}
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
                      id="description"
                      rows="4"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                      placeholder="Your description here"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-center text-sm font-medium text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:ring-teal-500"
                  >
                    {updating ? "Updating..." : "Update Ad"}
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

export default EditAds;
