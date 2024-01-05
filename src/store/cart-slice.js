import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "",
        title: "Sending...",
        message: "Sending Cart data",
      })
    );

    async function sendRequest() {
      const response = await fetch(
        "https://fir-example-2c4a8.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data is failed");
      }
    }

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent Cart data, Successfully!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Error while Sending Cart data!!",
        })
      );
    } finally {
      const timer = setTimeout(() => {
        dispatch(uiActions.showNotification(null));
      }, 4000);
      console.log(timer);
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
