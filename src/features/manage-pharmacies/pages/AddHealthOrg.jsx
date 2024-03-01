import React from "react";

const AddHealthOrg = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl flex font-sans font-semibold justify-center ms-6 mt-10 text-white">
              Add Health Organizations
            </h2>
            <form className=" p-6  w-full">
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    placeholder="country"
                    required
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
