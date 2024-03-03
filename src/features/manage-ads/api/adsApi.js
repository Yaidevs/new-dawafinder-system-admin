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

    addAds: builder.mutation({
      query: (data) => ({
        url: `adsapi/ads`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllAdsQuery, useAddAdsMutation, useGetOrgsQuery } = adsApi;
