import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventories: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setCollections: (state, action) => {
      state.inventories = action.payload;
      localStorage.setItem("inventories", JSON.stringify(action.payload));
    },
  },
});

export const { setCollections } = inventorySlice.actions;

export default inventorySlice.reducer;
