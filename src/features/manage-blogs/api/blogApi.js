import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";


export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => `blogapi/`,
    }),
    addBlogs: builder.mutation({
      query: (data) => ({
        url: `blogapi/`,
        method: "POST",
        body: data,
      }),
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `blogapi/`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `blogapi/${blogId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useAddBlogsMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
