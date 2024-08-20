import React from "react";
import CustomersTable from "./CustomersTable";
import HealthOrgsTable from "./HealthOrgsTable"; 

const ManageUsers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
            Customers
          </h2>
          <CustomersTable />
          <div className="my-8 border-t-4 border-dashed border-gray-300" />
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
            Health Organizations
          </h2>
          <HealthOrgsTable />
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
