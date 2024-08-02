import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useGetPrescriptionByIdQuery } from "../api/prescriptionsApi";
import { useParams } from "react-router-dom";

function PrescriptionDetail() {
  const { id } = useParams();
  const { data } = useGetPrescriptionByIdQuery(id);
  return (
    <div className="min-h-screen overflow-hidden flex flex-col flex-shrink-0 antialiased bg-gray-700 text-white">
      <div className="mx-auto ml-72 w-full overflow-hidden mt-20"></div>
      <div className="flex justify-center items-center">
        <Zoom>
          <img
            src={data?.data.imageLink}
            alt="Prescription"
            className="w-full ms-10 max-w-md"
          />
        </Zoom>
      </div>
    </div>
  );
}

export default PrescriptionDetail;
