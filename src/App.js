import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const ui = useSelector((state) => state.ui);
  const { cartIsVisible, notification } = ui;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "",
          title: "Sending...",
          message: "Sending Cart data",
        })
      );
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

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent Cart data, Successfully!!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    let timer;
    sendCartData()
      .catch(() => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Error while Sending Cart data!!",
          })
        );
      })
      .finally(() => {
        timer = setTimeout(() => {
          dispatch(uiActions.showNotification(null));
        }, 4000);
      });
    return () => {
      clearTimeout(timer);
    };
  }, [cart]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
