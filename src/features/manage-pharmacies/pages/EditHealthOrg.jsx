import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import {
  useGetHealthOrgsByIdQuery,
  useUpdateHealthOrgMutation,
} from "../api/healthorgApi";
import { storage } from "../../../firebase";
import { useNavigate, useParams } from "react-router-dom";

const EditHealthOrg = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: healthOrg, isLoading } = useGetHealthOrgsByIdQuery(id);
  const [updateHealthOrganization] = useUpdateHealthOrgMutation();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);
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
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (healthOrg?.data) {
      const org = healthOrg.data;
      setName(org.name);
      setType(org.type);
      setImages(org.images || []);
      setSubscription(org.subscription);
      setLicense(org.license);
      setCoordinates(org.absoluteLocation.coordinates[0]);
      setDescription(org.services[0]?.description || "");
      setCountry(org.relativeLocation.country);
      setCity(org.relativeLocation.city);
      setStreet(org.relativeLocation.street || "");
      setPhoneNumber(org.contact.phoneNumber);
      setEmail(org.contact.email || "");
      setServiceName(org.services[0]?.name || "");
      setServiceDescription(org.services[0]?.description || "");
    }
  }, [healthOrg]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const imageUrls = [];
      if (images.length > 0) {
        for (const image of images) {
          const imageRef = ref(
            storage,
            `HealthOrg-images/${image.name + v4()}`
          );
          await uploadBytes(imageRef, image);
          const imageUrl = await getDownloadURL(imageRef);
          imageUrls.push(imageUrl);
        }
      }

      const absoluteLocation = { coordinates, street };
      const relativeLocation = { country, city, street };
      const contact = { phoneNumber, email };
      const service = [{ serviceName, serviceDescription }];

      setUpdating(true);
      await updateHealthOrganization({
        id,
        name,
        type,
        images: imageUrls,
        subscription,
        license,
        description,
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

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* <h2 className="mb-6 text-3xl font-semibold text-center text-gray-900">
              Edit Health Organization
            </h2> */}
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter organization name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter organization type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="images"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Images
                  </label>
                  <input
                    type="file"
                    name="images"
                    id="images"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    multiple
                    onChange={(e) => setImages(Array.from(e.target.files))}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subscription"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Subscription
                  </label>
                  <input
                    type="text"
                    name="subscription"
                    id="subscription"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter subscription type"
                    value={subscription}
                    onChange={(e) => setSubscription(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="license"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    License
                  </label>
                  <input
                    type="text"
                    name="license"
                    id="license"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter license number"
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="coordinates"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Coordinates
                  </label>
                  <input
                    type="number"
                    name="coordinates"
                    id="coordinates"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter coordinates"
                    value={coordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                    required
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
                    rows={5}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
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
                    required
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
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="street"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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

                <div className="sm:col-span-2">
                  <label
                    htmlFor="serviceName"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    id="serviceName"
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter service name"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="serviceDescription"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Service Description
                  </label>
                  <textarea
                    id="serviceDescription"
                    rows={5}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter service description"
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 focus:ring-4 focus:ring-teal-300"
                disabled={updating}
              >
                {updating ? "Updating..." : "Update"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditHealthOrg;
