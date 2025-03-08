import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";
import storeReducer from "../features/storeSlice";
import skuReducer from "../features/skuSlice";
import planningReducer from "../features/planningSlice";
import authReducer from "../features/authSlice"; 

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  stores: storeReducer,
  skus: skuReducer,
  planning: planningReducer,
  auth: authReducer,  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;