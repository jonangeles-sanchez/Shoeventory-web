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
        url: `${USERS_URL}/collections/${data.collectionid}`,
        method: "GET",
        body: data,
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
        url: `${USERS_URL}/collections/${data.collectionid}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/collections/${data.collectionid}`,
        method: "DELETE",
        body: data,
      }),
    }),
    addShoesToCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/collections/${data.collectionid}/shoes`,
        method: "POST",
        body: data,
      }),
    }),
    getShoesFromCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/collections/${data.collectionid}/shoes`,
        method: "GET",
        body: data,
      }),
    }),
    updateShoesFromCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/collections/${data.collectionid}/shoes/${data.shoeid}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteShoesFromCollection: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/collections/${data.collectionid}/shoes/${data.shoeid}`,
        method: "DELETE",
        body: data,
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
