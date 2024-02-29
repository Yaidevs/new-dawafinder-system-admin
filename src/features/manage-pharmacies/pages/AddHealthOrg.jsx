import React from "react";

const AddHealthOrg = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <section className="">
          <div className="">
            <h2 className="mb-4 text-xl text-center flex ms-6 mt-10 font-bold text-gray-900 dark:text-white">
              Add Health Organizations
            </h2>
            <form className=" p-6  w-full">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 rounded bg-gray-900 p-8">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Product brand"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="subscription"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Subscription
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="$2999"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    License
                  </label>
                  <select
                    id="category"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                  >
                    <option selected>Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="item-weight"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Item Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="item-weight"
                    id="item-weight"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder={12}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={8}
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Your description here"
                    defaultValue=""
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center text-black px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-green-400 rounded-lg"
              >
                Add product
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddHealthOrg;
