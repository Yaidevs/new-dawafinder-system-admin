import CategoryTable from "./CategoryTable";

function ManageCategory() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className=" flex flex-col">
          <div className=" flex justify-center p-6 font-bold text-gray-300 ">
            All Categories
          </div>
          <CategoryTable />
        </div>
      </div>
    </div>
  );
}

export default ManageCategory;
