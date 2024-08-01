import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const prescriptionsApi = createApi({
  reducerPath: "prescriptionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPrescriptions: builder.query({
      query: () => `searchandprescription/prescriptions/`,
    }),

    addPrescription: builder.mutation({
      query: (data) => ({
        url: `searchandprescription/prescriptions/`,
        method: "POST",
        body: data,
      }),
    }),
    deletePrescription: builder.mutation({
      query: (id) => ({
        url: `searchandprescription/prescriptions/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPrescriptionsQuery,
  useAddPrescriptionMutation,
  useDeletePrescriptionMutation,
} = prescriptionsApi;
