import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://localhost:7136" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Inventory"],
  endpoints: (builder) => ({}),
});
