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
      const response = await updateAd({
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
      window.location.reload();
    } catch (error) {
      console.error("Error updating ad:", error);
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-gray-300">
              Edit Ad
            </h2>
            {adLoading ? (
              <p>Loading ad...</p>
            ) : (
              <form className="p-6 w-full" onSubmit={handleSubmit}>
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
                      Select Organization
                    </label>
                    <select
                      id="organizations"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      value={selectedOrganization}
                      onChange={(e) => setSelectedOrganization(e.target.value)}
                    >
                      {orgsLoading && <option>Loading...</option>}
                      {orgsError && (
                        <option>Error fetching organizations</option>
                      )}
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
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="imageUrl"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Image URL
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
                      Link URL
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
                      placeholder="Price"
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
                      placeholder="Target Audience"
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
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
                      placeholder="Country"
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
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="addressLine"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="addressLine"
                      id="addressLine"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="Address"
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
                      rows="4"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="Your description here"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-center text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800"
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
