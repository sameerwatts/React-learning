export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getCartTotal = (cartCtxObj) => {
return cartCtxObj.items.reduce((totalPrice, item) => {
  return totalPrice + item.quantity * item.price;
}, 0);
}