import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `productapi/products`,
    }),
    getAllProductCategory: builder.query({
      query: () => `productapi/product-categories`,
    }),
    addProducts: builder.mutation({
      query: (data) => ({
        url: `productapi/products`,
        method: "POST",
        body: data,
      }),
    }),
    addProductCategory: builder.mutation({
      query: (data) => ({
        url: `productapi/product-categories`,
        method: "POST",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/productapi/products/${id}`,
        method: "DELETE",
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `productapi/product-categories/${id}`,
        method: "DELETE",
      }),
    }),
    updateProductCategory: builder.mutation({
      query: (data) => ({
        url: `productapi/product-categories/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `productapi/products/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddProductsMutation,
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useAddProductCategoryMutation,
  useGetAllProductCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateProductCategoryMutation,
  useUpdateProductMutation,
} = productsApi;
