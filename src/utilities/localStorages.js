// ! LS 1.1 First check in local storage a specific key is present or not

const getCartFromLocalStorage = () => {
  // ! LS 1.2 checking the key name 'cart' is present or not in localStorage
  const storedCartStringified = localStorage.getItem("cart");

  // ! LS 1.3 if present then convert it to object by using JSON.parse, if not present it will return an empty array
  if (storedCartStringified) {
    const storedCart = JSON.parse(storedCartStringified);
    return storedCart;
  }
  return [];
};

// ! LS 1.4 Now get the return data from getCartFromLocalStorage with id as parameter.
// Note: here id is used as parameter because when we get the data from getCartFromLocalStorage, to identify the specific product best practice is use id as parameter.
const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  // ! LS 1.6 Now pass the newCart as a parameter to setCartToLocalStorage
  setCartToLocalStorage(newCart);
};

// ! LS 1.5 set the data to the localStorage by stringify

const setCartToLocalStorage = (cart) => {
  const cartStrigify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStrigify);
};

export {
  getCartFromLocalStorage as getStoredCart,
  addItemToCartLocalStorage as addToStoreCart,
};
