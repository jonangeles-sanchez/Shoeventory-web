import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventories: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventories: (state, action) => {
      state.inventories = action.payload;
    },
  },
});

export const { setInventories } = inventorySlice.actions;

export default inventorySlice.reducer;
