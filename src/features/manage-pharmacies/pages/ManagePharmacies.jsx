import React from "react";
import pharma1 from "../../../assets/pharma1.jpeg";
import pharma2 from "../../../assets/pharma2.jpeg";
import pharma3 from "../../../assets/pharma3.jpeg";
import pharma4 from "../../../assets/pharma4.jpeg";

const ManagePharmacies = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="">
          <div className="flex justify-between p-4">
            <h1 className="mb-2 font-bold">Pharmacies We Are Working With</h1>
              <button className="bg-green-500 px-3 rounded">Add pharmacy</button>
          </div>
          <div className="w-full flex gap-3 p-4 mt-2">
            <div className="relative flex w-full max-w-[16rem] max-h-[32rem] flex-col rounded-xl bg-gray-600  bg-clip-border shadow-lg cursor-pointer">
              <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={pharma1} alt=".." />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-col">
                  <h1 className="whitespace-nowrap mb-1">
                    Name : Robot Pharmacy
                  </h1>
                  <p className="">Location : Addis Ababa , Mexico</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-full max-w-[16rem] max-h-[32rem] flex-col rounded-xl bg-gray-600  bg-clip-border shadow-lg cursor-pointer">
              <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={pharma2} alt=".." />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-col">
                  <h1 className="whitespace-nowrap mb-1">
                    Name : Robot Pharmacy
                  </h1>
                  <p className="">Location : Addis Ababa , Mexico</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-full max-w-[16rem] max-h-[32rem] flex-col rounded-xl bg-gray-600  bg-clip-border shadow-lg cursor-pointer">
              <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={pharma3} alt=".." />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-col">
                  <h1 className="whitespace-nowrap mb-1">
                    Name : Robot Pharmacy
                  </h1>
                  <p className="">Location : Addis Ababa , Mexico</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-full max-w-[16rem] max-h-[32rem] flex-col rounded-xl bg-gray-600  bg-clip-border shadow-lg cursor-pointer">
              <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={pharma4} alt=".." />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-col">
                  <h1 className="whitespace-nowrap mb-1">
                    Name : Robot Pharmacy
                  </h1>
                  <p className="">Location : Addis Ababa , Mexico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePharmacies;
