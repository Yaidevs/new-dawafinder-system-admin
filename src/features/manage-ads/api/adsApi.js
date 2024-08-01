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

    getAdsById: builder.query({
      query: (id) => ({
        url: `adsapi/ads/${id}`,
      }),
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
    deleteAds: builder.mutation({
      query: (id) => ({
        url: `/adsapi/ads/${id}`,
        method: "DELETE",
      }),
    }),
    updateAds: builder.mutation({
      query: (data) => ({
        url: `adsapi/ads/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllAdsQuery,
  useAddAdsMutation,
  useGetOrgsQuery,
  useAddOrgForAdsMutation,
  useDeleteAdsMutation,
  useGetAdsByIdQuery,
  useUpdateAdsMutation,
} = adsApi;
