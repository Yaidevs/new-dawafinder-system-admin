import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const healthorgApi = createApi({
  reducerPath: "healthorgApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllHealthOrganizations: builder.query({
      query: () => `userapi/health-organizations/`,
    }),
    getHealthOrgsById: builder.query({
      query: (id) => ({
        url: `userapi/health-organizations/${id}`,
      }),
    }),
    addHealthOrganization: builder.mutation({
      query: (data) => ({
        url: `userapi/health-organizations/`,
        method: "POST",
        body: data,
      }),
    }),
    deleteOrgs: builder.mutation({
      query: (id) => ({
        url: `/userapi/health-organizations/${id}`,
        method: "DELETE",
      }),
    }),
    updateHealthOrg: builder.mutation({
      query: (data) => ({
        url: `userapi/health-organizations/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllHealthOrganizationsQuery,
  useAddHealthOrganizationMutation,
  useDeleteOrgsMutation,
  useUpdateHealthOrgMutation,
  useGetHealthOrgsByIdQuery,
} = healthorgApi;
