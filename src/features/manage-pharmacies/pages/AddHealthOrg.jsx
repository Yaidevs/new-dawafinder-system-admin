import React from "react";
import { useState } from "react";
import { useAddHealthOrganizationMutation } from "../api/healthorgApi";

const AddHealthOrg = () => {
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

  const [addHealthOrganization] = useAddHealthOrganizationMutation();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const absoluteLocation = { coordinates, street };
    const relativeLocation = { country, city, street };
    const contact = { phoneNumber, email };
    const service = [{ serviceName, serviceDescription }];

    try {
      const response = await addHealthOrganization({
        name,
        type,
        absoluteLocation,
        relativeLocation,
        contact,
        service,
      }).unwrap();
    } catch (error) {
      console.error("Error adding org:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-white">
              Add Health Organizations
            </h2>
            <form className=" p-6  w-full" onSubmit={handleFormSubmit}>
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
                    onChange={(e) => setImage(e.target.value)}
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
                    onChange={(e) => setLicense(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cordinates"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Cordinates
                  </label>
                  <input
                    type="number"
                    name="cordinates"
                    id="cordinates"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder={12}
                    onChange={(e) => setCoordinates(e.target.value)}
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
                    onChange={(e) => setDescription(e.target.value)}
                    defaultValue=""
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
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
                    id="description"
                    rows={8}
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Add about service"
                    onChange={(e) => setServiceDescription(e.target.value)}
                    defaultValue=""
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

export default AddHealthOrg;
