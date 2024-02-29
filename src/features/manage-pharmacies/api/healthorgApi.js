import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../../../constants";

export const healthorgApi = createApi({
  reducerPath: "healthorgApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllHealthOrganizations: builder.query({
      query: () => `userapi/health-organizations/`,
    }),
    addHealthOrganizations: builder.mutation({
      query: () => ({
        url: `userapi/health-organizations/`,
      }),
    }),
  }),
});
