import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventories: [],
  shoes: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setCollections: (state, action) => {
      state.inventories = action.payload;
      localStorage.setItem("inventories", JSON.stringify(action.payload));
    },
    setShoes: (state, action) => {
      state.shoes = action.payload;
      localStorage.setItem("shoes", JSON.stringify(action.payload));
    },
  },
});

export const { setCollections, setShoes } = inventorySlice.actions;

export default inventorySlice.reducer;
