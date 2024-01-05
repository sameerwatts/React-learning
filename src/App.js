import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const ui = useSelector((state) => state.ui);
  const { cartIsVisible, notification } = ui;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    

    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart))
    // let timer;
    // sendCartData()
    //   .catch(() => {
       
    //   })
    //   .finally(() => {
    //     timer = setTimeout(() => {
    //       dispatch(uiActions.showNotification(null));
    //     }, 4000);
    //   });
    // return () => {
    //   clearTimeout(timer);
    // };
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
