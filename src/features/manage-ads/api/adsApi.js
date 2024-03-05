import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllAds: builder.query({
      query: () => `adsapi/ads`,
    }),

    getOrgs: builder.query({
      query: () => `adsapi/organizations`,
    }),

    addOrgForAds: builder.mutation({
      query: (data) => ({
        url: `adsapi/organizations`,
        method: "POST",
        body: data,
      }),
    }),

    addAds: builder.mutation({
      query: (data) => ({
        url: `adsapi/ads`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllAdsQuery, useAddAdsMutation, useGetOrgsQuery , useAddOrgForAdsMutation} = adsApi;
