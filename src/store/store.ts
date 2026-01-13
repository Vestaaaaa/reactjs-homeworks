import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.ts";
import cartReducer from "./cartSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
