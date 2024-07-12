import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
      
      state.totalCount += action.payload.quantity;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id && item.size === action.payload.size);
      if (index !== -1) {
        state.totalCount -= state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
