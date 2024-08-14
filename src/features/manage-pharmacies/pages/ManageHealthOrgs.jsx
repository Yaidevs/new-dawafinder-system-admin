import HealthorgTable from "./HealthorgTable";

function ManageHealthOrgs() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-6">
          {/* <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            All Health Organizations
          </h1> */}
          <HealthorgTable />
        </div>
      </div>
    </div>
  );
}

export default ManageHealthOrgs;
