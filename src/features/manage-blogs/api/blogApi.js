import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `blogapi/posts/`,
    }),
    getPostById: builder.query({
      query: (postId) => ({
        url: `blogapi/posts/{postId}`,
      }),
    }),
    getPostCategory: builder.query({
      query: () => ({
        url: `blogapi/categories`,
      }),
    }),

    addPostCategory: builder.mutation({
      query: () => ({
        url: `blogapi/categories/`,
      }),
    }),

    addPosts: builder.mutation({
      query: (data) => ({
        url: `blogapi/posts/`,
        method: "POST",
        body: data,
      }),
    }),
    updatePost: builder.mutation({
      query: (data) => ({
        url: `blogapi/posts/`,
        method: "PATCH",
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: (blogId) => ({
        url: `blogapi/posts/${blogId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostCategoryQuery,
  useAddPostCategoryMutation,
  useGetPostByIdQuery,
  useAddPostsMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = blogApi;
