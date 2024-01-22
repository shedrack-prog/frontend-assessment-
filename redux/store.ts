import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import wishlistSlice from './slices/wishlistSlice';

export const store = configureStore({
  reducer: {
    carts: cartSlice,
    wishlists: wishlistSlice,
  },
});
