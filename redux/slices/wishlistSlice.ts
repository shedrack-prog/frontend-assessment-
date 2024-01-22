import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const wishlistItem: any = localStorage.getItem('wishlist');
const wishlist: any = JSON.parse(wishlistItem) || [];

const initialState = [
  {
    id: wishlist?.id || null,
    title: wishlist?.title || null,
    price: wishlist?.price || null,
    quantity: wishlist?.quantity || null,
    thumbnail: wishlist?.thumbnail || null,
  },
];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<any>) => {
      const { id, title, thumbnail, quantity } = action.payload;
      state.push(action.payload);
      // let newItems = [];
      wishlist.push({ id, title, thumbnail, quantity });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    },
    deleteFromWishlist: (state, action: PayloadAction<any>) => {
      const wishlistId = action.payload;
      localStorage.removeItem('wishlist');
      return state.filter((w: any) => w.id === wishlistId);
    },
  },
});

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
