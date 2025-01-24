import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const formularyApi = createApi({
  reducerPath: "formularyApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllMedicineFormularies: builder.query({
      query: () => `formularyapi/medicine-formularies`,
    }),

    getMedicineFormularyById: builder.query({
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

    addFormularyForMedicine: builder.mutation({
      query: (data) => ({
        url: `formularyapi/formularies`,
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
    getFormularyCategoryById: builder.query({
      query: (id) => ({
        url: `formularyapi/categories/${id}`,
      }),
    }),
    getAllFormulary: builder.query({
      query: () => `formularyapi/formularies`,
    }),
    getFormularyById: builder.query({
      query: (id) => `formularyapi/formularies/${id}`,
    }),
    deleteFormularyCategory: builder.mutation({
      query: (id) => ({
        url: `formularyapi/categories/${id}`,
        method: "DELETE",
      }),
    }),

    updateFormularyCategory: builder.mutation({
      query: (data) => ({
        url: `formularyapi/categories/${data._id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteMedicineFormulary: builder.mutation({
      query: (id) => ({
        url: `formularyapi/medicine-formularies/${id}`,
        method: "DELETE",
      }),
    }),
    deleteFormulary: builder.mutation({
      query: (id) => ({
        url: `formularyapi/formulary/${id}`,
        method: "DELETE",
      }),
    }),

    updateMedicineFormulary: builder.mutation({
      query: (data) => ({
        url: `formularyapi/medicine-formularies/${data._id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateFormulary: builder.mutation({
      query: (data) => ({
        url: `formularyapi/formularies/${data._id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllMedicineFormulariesQuery,
  useGetFormularyCategoryByIdQuery,
  useGetMedicineFormularyByIdQuery,
  useDeleteMedicineFormularyMutation,
  useAddMedicineFormularyMutation,
  useUpdateMedicineFormularyMutation,
  useAddCategoryForFormularyMutation,
  useGetAllFormularyCategoriesQuery,
  useDeleteFormularyCategoryMutation,
  useUpdateFormularyCategoryMutation,
  useAddFormularyForMedicineMutation,
  useGetAllFormularyQuery,
  useDeleteFormularyMutation,
  useGetFormularyByIdQuery,
  useUpdateFormularyMutation,
} = formularyApi;
