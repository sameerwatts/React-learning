import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggleCart: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification: (state, action) => {
      if (action.payload) {
        const { status, title, message } = action.payload;
        state.notification = {
          status,
          title,
          message,
        };
      } else {
        state.notification = action.payload;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
