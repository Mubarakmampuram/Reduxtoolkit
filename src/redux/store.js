import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
//import dishReducer from "./dishes";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
