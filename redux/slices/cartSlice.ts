import { createSlice, PayloadAction } from '@reduxjs/toolkit';
let cart: any;
if (typeof window !== 'undefined') {
  const cartItems: any = localStorage.getItem('cart');
  cart = JSON.parse(cartItems) || [];
}

// const initialState = [...cart];
const initialState = [
  {
    id: cart?.id || null,
    title: cart?.title || null,
    price: cart?.price || null,
    quantity: cart?.quantity || null,
    thumbnail: cart?.thumbnail || null,
  },
];

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const { id, title, thumbnail, quantity, price } = action.payload;
      state.push(action.payload);
      // let newItems = [];
    },
    deleteFromCart: (state, action: PayloadAction<any>) => {
      const cartId = action.payload;
      return state.filter((cart: any) => cart.id === cartId);
    },
    updateCart: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart, updateCart, deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;
