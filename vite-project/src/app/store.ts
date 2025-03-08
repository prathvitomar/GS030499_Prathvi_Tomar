import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "../features/storeSlice";
import skuReducer from "../features/skuSlice";
import planningReducer from "../features/planningSlice";
import authReducer from "../features/authSlice"; 

export const store = configureStore({
  reducer: {
    stores: storeReducer,
    skus: skuReducer,
    planning: planningReducer,
    auth : authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
