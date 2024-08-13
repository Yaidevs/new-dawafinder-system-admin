import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useAddHealthOrganizationMutation } from "../api/healthorgApi";
import { storage } from "../../../firebase";

const AddHealthOrg = () => {
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
  const [adding, setAdding] = useState(false);

  const [addHealthOrganization] = useAddHealthOrganizationMutation();

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

      setAdding(true);
      await addHealthOrganization({
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
      setAdding(false);

      // Reset form fields
      setName("");
      setType("");
      setImages([]);
      setSubscription("");
      setLicense("");
      setCoordinates(0);
      setDescription("");
      setCountry("");
      setCity("");
      setStreet("");
      setPhoneNumber("");
      setEmail("");
      setServiceName("");
      setServiceDescription("");
    } catch (error) {
      setAdding(false);
      console.error("Error adding org:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-200">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="px-6 py-10">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
            <h2 className="mb-6 text-3xl font-semibold text-center text-white">
              Add Health Organization
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter organization name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter organization type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="images"
                    className="block mb-2 text-sm font-medium"
                  >
                    Images
                  </label>
                  <input
                    type="file"
                    name="images"
                    id="images"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    multiple
                    onChange={(e) => setImages(Array.from(e.target.files))}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subscription"
                    className="block mb-2 text-sm font-medium"
                  >
                    Subscription
                  </label>
                  <input
                    type="text"
                    name="subscription"
                    id="subscription"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter subscription type"
                    value={subscription}
                    onChange={(e) => setSubscription(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="license"
                    className="block mb-2 text-sm font-medium"
                  >
                    License
                  </label>
                  <input
                    type="text"
                    name="license"
                    id="license"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter license number"
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="coordinates"
                    className="block mb-2 text-sm font-medium"
                  >
                    Coordinates
                  </label>
                  <input
                    type="number"
                    name="coordinates"
                    id="coordinates"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter coordinates"
                    value={coordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                    required
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
                    rows={5}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
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
                    required
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
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="street"
                    className="block mb-2 text-sm font-medium"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
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
                    htmlFor="service-name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="service-name"
                    id="service-name"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter service name"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="service-description"
                    className="block mb-2 text-sm font-medium"
                  >
                    Service Description
                  </label>
                  <textarea
                    id="service-description"
                    rows={5}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter service description"
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
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

export default AddHealthOrg;
