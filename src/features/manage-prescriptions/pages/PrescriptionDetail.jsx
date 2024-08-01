import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function PrescriptionDetail() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="mx-auto ml-72 w-full overflow-hidden mt-20">
        <div className="">
          <h2 className="text-center font-bold mb-3 w-3/4 text-gray-300">
            Prescription detail
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center"> 
        <Zoom>
          <img 
            src="https://www.the-hospitalist.org/wp-content/uploads/2022/05/Hassprescription.jpg" 
            alt="Prescription"
            className="w-full ms-10 max-w-md"
          />
        </Zoom>
      </div>
    </div>
  );
}

export default PrescriptionDetail;
