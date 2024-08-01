import React from "react";
import { Link } from "react-router-dom";
import { useGetAllPrescriptionsQuery } from "../api/prescriptionsApi";

const PrescriptionsTable = () => {
  const { data, isLoading, error } = useGetAllPrescriptionsQuery();
  console.log(data?.data);

  return (
    <div className="mt-4 mx-4">
      <div className="w-full overflow-hidden shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-900">
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Phone Number</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 bg-gray-900">
              {isLoading ? (
                <tr>
                  <td
                    colSpan="2"
                    className="px-4 py-3 text-center text-gray-300"
                  >
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan="2"
                    className="px-4 py-3 text-center text-gray-300"
                  >
                    Error: {error.message}
                  </td>
                </tr>
              ) : (
                data?.data.map((prescription) => (
                  <tr
                    key={prescription.id}
                    className="bg-gray-900 cursor-pointer hover:bg-gray-900 text-gray-300"
                  >
                    <td className="px-4 py-3">
                      <Link to="/prescription-detail">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full"
                              src={prescription.imageLink}
                              alt="Prescription"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {prescription.phoneNumber}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionsTable;
