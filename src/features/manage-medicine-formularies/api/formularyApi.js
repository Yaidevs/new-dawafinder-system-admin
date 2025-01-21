import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const formularyApi = createApi({
  reducerPath: "formularyApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllFormularies: builder.query({
      query: () => `formularyapi/medicine-formularies`,
    }),

    getFormularyById: builder.query({
      query: (id) => ({
        url: `formularyapi/medicine-formularies/${id}`,
      }),
    }),

    addMedicineFormulary: builder.mutation({
      query: (data) => ({
        url: `formularyapi/medicine-formularies`,
        method: "POST",
        body: data,
      }),
    }),

    addCategoryForFormulary: builder.mutation({
      query: (data) => ({
        url: `formularyapi/categories`,
        method: "POST",
        body: data,
      }),
    }),
    getAllFormularyCategories: builder.query({
      query: () => `formularyapi/categories`,
    }),

    deleteFormularyCategory: builder.mutation({
      query: (id) => ({
        url: `formularyapi/categories/${id}`,
        method: "DELETE",
      }),
    }),

    updateFormularyCategory: builder.mutation({
      query: (data) => ({
        url: `formularyapi/categories/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteFormulary: builder.mutation({
      query: (id) => ({
        url: `formularyapi/medicine-formularies/${id}`,
        method: "DELETE",
      }),
    }),

    updateFormulary: builder.mutation({
      query: (data) => ({
        url: `formularyapi/medicine-formularies/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllFormulariesQuery,
  useGetFormularyByIdQuery,
  useAddMedicineFormularyMutation,
  useDeleteFormularyMutation,
  useUpdateFormularyMutation,
  useAddCategoryForFormularyMutation,
  useGetAllFormularyCategoriesQuery,
  useDeleteFormularyCategoryMutation,
  useUpdateFormularyCategoryMutation,
} = formularyApi;
