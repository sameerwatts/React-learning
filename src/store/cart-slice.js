import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      state.changed = true;
      state.totalQuantity++;
      if (!existingCartItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      } else {
        existingCartItem.quantity++;
        // existingCartItem.totalPrice = existingCartItem.price * existingCartItem.quantity;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice + existingCartItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingCartItem = state.items.find((item) => item.id === id);
      state.changed = true;
      state.totalQuantity--;
      if (existingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingCartItem.quantity--;
        // existingCartItem.totalPrice = existingCartItem.price * quantity;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice - existingCartItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
