import AdsTable from "./AdsTable";

function ManageAds() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-center text-gray-200 mb-6">
            All Ads
          </h1>
          <AdsTable />
        </div>
      </div>
    </div>
  );
}

export default ManageAds;
