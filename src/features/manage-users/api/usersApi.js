import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";


export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getTokenFromCookies();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => `userapi/customers`,
    }),
    getHealthOrgs: builder.query({
      query: () => `userapi/health-orgs/`,
    }),
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `userapi/customers/${id}`,
        method: "DELETE",
      }),
    }),
    deleteHealthOrg: builder.mutation({
      query: (id) => ({
        url: `userapi/health-orgs/${id}`,
        method: "DELETE",
      }),
    }),
    updateCustomer: builder.mutation({
      query: (data) => ({
        url: `userapi/customers/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateHealthOrg: builder.mutation({
      query: (data) => ({
        url: `userapi/health-orgs/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useDeleteCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteHealthOrgMutation,
  useGetHealthOrgsQuery,
  useUpdateHealthOrgMutation,
} = usersApi;
