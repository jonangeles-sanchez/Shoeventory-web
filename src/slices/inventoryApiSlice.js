import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/collections";

export const inventoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.merchantId}/merchant`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.collectionId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    addNewCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/collections`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    updateCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.collectionId}`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    deleteCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.collectionId}`,
        method: "DELETE",
        body: data,
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    addShoesToCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/collections/${data.collectionid}/shoes`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getShoesFromCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/collections/${data.collectionid}/shoes`,
        method: "GET",
        body: data,
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    updateShoesFromCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.collectionId}/shoes/${data.shoeId}`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    deleteShoesFromCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.collectionId}/shoes/${data.shoeId}`,
        method: "DELETE",
        body: data,
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetCollectionsMutation,
  useGetCollectionMutation,
  useAddNewCollectionMutation,
  useUpdateCollectionMutation,
  useDeleteCollectionMutation,
  useAddShoesToCollectionMutation,
  useGetShoesFromCollectionMutation,
  useUpdateShoesFromCollectionMutation,
  useDeleteShoesFromCollectionMutation,
} = inventoryApiSlice;
