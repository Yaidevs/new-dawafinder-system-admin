import React from "react";
import ClientTable from "../../../shared/ClientTable";

const ManageUsers = () => {
  return (
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className=" flex flex-col">
            <div className=" flex justify-center p-6 font-bold">
              List of Users
            </div>
            <ClientTable />
          </div>
        </div>
      </div>
  );
};

export default ManageUsers;
