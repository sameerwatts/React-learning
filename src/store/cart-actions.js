import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export function fetchCartData() {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "",
    //     title: "Fetching...",
    //     message: "Fetching Cart data",
    //   })
    // );
    async function fetchRequest() {
      const response = await fetch(
        "https://fir-example-2c4a8.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();
      return data;
    }

    try {
      const cartData = await fetchRequest();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       title: "Success...",
      //       message: "Fetch Cart data, Successfully!!",
      //     })
      //   );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Error while Sending Cart data!!",
        })
      );
    }
  };
}

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
      setTimeout(() => {
        dispatch(uiActions.showNotification(null));
      }, 4000);
    }
  };
};
