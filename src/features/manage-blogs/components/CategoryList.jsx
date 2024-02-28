import React from 'react'

const CategoryList = () => {
  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
    <div className="mt-4 mx-4">
      <div className="w-full overflow-hidden shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-900 ">
                <th className="px-4 py-3">Category Name</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
   
           <tbody className=" divide-y divide-gray-700 bg-gray-900">
              <tr className=" bg-gray-900 hover:bg-gray-900 text-gray-300 ">
                <td className="px-4 py-3">
                  <div>Skin</div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-x-4">
                    <div>
                      <button className="border bg-green-400 px-4 cursor-pointer text-black rounded">
                        Edit
                      </button>
                    </div>
                    <div>
                      <button className="border bg-red-400 px-4 cursor-pointer text-black rounded">
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CategoryList