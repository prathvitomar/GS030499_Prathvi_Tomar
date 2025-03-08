import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SKU, SKUState } from "../types/skusTypes";
import { skus } from "../data/skus";

const initialState: SKUState = {
  skus
};

const skuSlice = createSlice({
  name: "skus",
  initialState,
  reducers: {
    addSKU: (state, action: PayloadAction<SKU>) => {
      state.skus.unshift(action.payload); // ✅ Adds SKU at the first position
    },    
    removeSKU: (state, action: PayloadAction<string>) => {
      state.skus = state.skus.filter(sku => sku.id !== action.payload);
    },
    updateSKU: (state, action: PayloadAction<SKU>) => {
      const index = state.skus.findIndex(sku => sku.id === action.payload.id);
      if (index !== -1) {
        state.skus[index] = action.payload;
      }
    },
  },
});

export const { addSKU, removeSKU, updateSKU } = skuSlice.actions;
export default skuSlice.reducer;
