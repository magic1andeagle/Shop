import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsAPI = createApi({
  reducerPath: "itemsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  tagTypes: ["Item"],
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: (result) => ["Item"],
    }),
    fetchCategories: builder.query({
      query: () => ({
        url: "/products/categories",
      }),
      providesTags: (result) => ["Item"],
    }),
  }),
});
