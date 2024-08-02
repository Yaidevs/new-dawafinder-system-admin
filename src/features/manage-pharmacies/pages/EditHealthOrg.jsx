import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetHealthOrgsByIdQuery,
  useUpdateHealthOrgMutation,
} from "../api/healthorgApi";

const EditHealthOrg = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updating, setUpdating] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [subscription, setSubscription] = useState("");
  const [license, setLicense] = useState("");
  const [coordinates, setCoordinates] = useState(0);
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");

  const { data: org, isLoading: orgLoading } = useGetHealthOrgsByIdQuery(id);
  const [updateHealthOrganization] = useUpdateHealthOrgMutation();

  useEffect(() => {
    if (org && org.data) {
      setName(org.data.name || "");
      setType(org.data.type || "");
      setSubscription(org.data.subscription || "");
      setLicense(org.data.license || "");
      setCoordinates(org.data.absoluteLocation?.coordinates || 0);
      setDescription(org.data.description || "");
      setCountry(org.data.relativeLocation?.country || "");
      setCity(org.data.relativeLocation?.city || "");
      setStreet(org.data.relativeLocation?.street || "");
      setPhoneNumber(org.data.contact?.phoneNumber || "");
      setEmail(org.data.contact?.email || "");
      if (org.data.service && org.data.service.length > 0) {
        setServiceName(org.data.service[0]?.serviceName || "");
        setServiceDescription(org.data.service[0]?.serviceDescription || "");
      }
    }
  }, [org]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const absoluteLocation = { coordinates, street };
    const relativeLocation = { country, city, street };
    const contact = { phoneNumber, email };
    const service = [{ serviceName, serviceDescription }];

    try {
      setUpdating(true);
      await updateHealthOrganization({
        id,
        name,
        type,
        absoluteLocation,
        relativeLocation,
        contact,
        service,
      }).unwrap();
      setUpdating(false);
      navigate("/view-organizations");
      window.location.reload();
    } catch (error) {
      setUpdating(false);
      console.error("Error updating org:", error);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section>
          <div>
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-gray-300">
              Edit Health Organization
            </h2>
            {orgLoading ? (
              <p>Loading organization...</p>
            ) : (
              <form className="p-6 w-full" onSubmit={handleFormSubmit}>
                <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 rounded bg-gray-900 p-8">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="Type name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="type"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Type
                    </label>
                    <input
                      type="text"
                      name="type"
                      id="type"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="which type of org."
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Images
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="select a file"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="subscription"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Subscription
                    </label>
                    <input
                      type="text"
                      name="subscription"
                      id="subscription"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="free"
                      value={subscription}
                      onChange={(e) => setSubscription(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="license"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      License
                    </label>
                    <input
                      type="text"
                      name="license"
                      id="license"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="free"
                      value={license}
                      onChange={(e) => setLicense(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="coordinates"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Coordinates
                    </label>
                    <input
                      type="number"
                      name="coordinates"
                      id="coordinates"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="12"
                      value={coordinates}
                      onChange={(e) => setCoordinates(Number(e.target.value))}
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
                      htmlFor="street"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Street
                    </label>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
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
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="phone-number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service-name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Service
                    </label>
                    <input
                      type="text"
                      name="service-name"
                      id="service-name"
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="service"
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service-description"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Service Description
                    </label>
                    <textarea
                      id="service-description"
                      rows={8}
                      className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                      placeholder="Add about service"
                      value={serviceDescription}
                      onChange={(e) => setServiceDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-center text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800"
                  >
                    {updating ? "Updating..." : "Update Org."}
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

export default EditHealthOrg;
