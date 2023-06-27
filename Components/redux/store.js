import { configureStore } from '@reduxjs/toolkit';
import CartSlice from "../redux/fechuare/foodsSlice"

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store