import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../slices/inventorySlice";
import authReducer from "../slices/authSlice";
import { apiSlice } from "../slices/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    inventory: inventoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
