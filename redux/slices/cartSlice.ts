import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const cartItems: any = localStorage.getItem('cart');
const cart: any = JSON.parse(cartItems) || [];

const initialState = [
  {
    id: cart?.id || null,
    title: cart?.title || null,
    price: cart?.price || null,
    quantity: cart?.quantity || null,
    thumbnail: cart?.thumbnail || null,
  },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const { id, title, thumbnail, quantity, price } = action.payload;
      state.push(action.payload);
      // let newItems = [];
      cart.push({ id, title, thumbnail, quantity, price });
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    deleteFromCart: (state, action: PayloadAction<any>) => {
      const cartId = action.payload;
      return state.filter((cart: any) => cart.id === cartId);
    },
    updateCart: (state, action: PayloadAction<any>) => {
      const { id, qty } = action.payload;
      state.forEach((cart: any) => {
        if (cart.id === id) {
          cart.quantity = qty;
        }
      });
    },
  },
});

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
