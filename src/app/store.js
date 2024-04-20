import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

// created a centralized store
export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});
