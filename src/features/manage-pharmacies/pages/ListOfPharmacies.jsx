import React from "react";
import PharmaciesTable from "./PharmaciesTable";



const ListOfPharmacies = () => {
  return (
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className=" flex flex-col">
            <div className=" flex justify-center p-6 font-bold text-gray-300 ">
              Pharmacies
            </div>
            <PharmaciesTable/>
          </div>
        </div>
      </div>
  );
};

export default ListOfPharmacies;
