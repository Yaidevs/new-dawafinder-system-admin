import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const prescriptionsApi = createApi({
  reducerPath: "prescriptionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPrescriptions: builder.query({
      query: () => `searchandprescriptionapi/prescriptions/`,
    }),

    getPrescriptionById: builder.query({
      query: (id) => ({
        url: `searchandprescriptionapi/prescriptions/${id}`,
      }),
    }),
    addPrescription: builder.mutation({
      query: (data) => ({
        url: `searchandprescriptionapi/prescriptions/`,
        method: "POST",
        body: data,
      }),
    }),
    sendPrescriptionResult: builder.mutation({
      query: (data) => ({
        url: `searchandprescriptionapi/prescription-results/`,
        method: "POST",
        body: data,
      }),
    }),
    deletePrescription: builder.mutation({
      query: (id) => ({
        url: `searchandprescriptionapi/prescriptions/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPrescriptionsQuery,
  useAddPrescriptionMutation,
  useDeletePrescriptionMutation,
  useGetPrescriptionByIdQuery,
  useSendPrescriptionResultMutation,
} = prescriptionsApi;
