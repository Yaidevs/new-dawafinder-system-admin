import React from "react";
import pres1 from "../../assets/pres1.png";
import pres2 from "../../assets/pres2.jpeg";
import pres3 from "../../assets/pres2.png";

const Prescription = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="">
          <div className="heading flex flex-col ml-4 p-3 mt-4">
            <div>
              <h1 className="font-extrabold font-sans mb-2">
                Uploaded Prescriptions
              </h1>
            </div>
            <div>
              <p className="font-normal">
                Prescriptions that the user uploaded{" "}
              </p>
            </div>
          </div>
          <div className="w-full flex gap-3 p-4">
            <div className="relative flex w-full max-w-[16rem] max-h-[32rem] flex-col rounded-xl bg-gray-600  bg-clip-border shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src="https://www.researchgate.net/publication/345830022/figure/fig1/AS:957640024793088@1605330582266/A-sample-prescription-containing-handwritten-texts-over-the-printed-lines.png"
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-col">
                  <h1 className="whitespace-nowrap mb-1">User: Abebe Balcha</h1>
                  <p className="">Date : January 11 , 2024</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-full max-w-[16rem] max-h-[32rem] flex-col rounded-xl bg-gray-600  bg-clip-border shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={pres1} alt="ui/ux review check" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-col">
                  <h1 className="whitespace-nowrap mb-1">User: Abebe Balcha</h1>
                  <p className="">Date : January 11 , 2024</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-full max-w-[16rem] max-h-[32rem] flex-col rounded-xl bg-gray-600  bg-clip-border shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={pres2} alt="ui/ux review check" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-col">
                  <h1 className="whitespace-nowrap mb-1">User: Abebe Balcha</h1>
                  <p className="">Date : January 11 , 2024</p>
                </div>
              </div>
            </div>
            <div className="relative flex w-full max-w-[16rem] max-h-[32rem] flex-col rounded-xl bg-gray-600  bg-clip-border shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={pres3} alt="ui/ux review check" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-col">
                  <h1 className="whitespace-nowrap mb-1">User: Abebe Balcha</h1>
                  <p className="">Date : January 11 , 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
