import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
    cartItem: {},
  },
  reducers: {
    add(state, action) {
      const currentCarts = [...state.carts];
      currentCarts.push(action.payload);
      state.carts = currentCarts;
    },
    remove(state, action) {
      const currentCarts = [...state.carts];
      const { id } = action.payload;
      const newCarts = currentCarts.filter((item) => item.id !== id);
      state.carts = newCarts;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
