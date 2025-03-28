// ! 1. First check in local storage a specific key is present or not

const getCartFromLocalStorage = () => {
  // ! 2. checking the key name 'cart' is present or not in localStorage
  const storedCartStringified = localStorage.getItem("cart");

  // ! 3. if present then convert it to object by using JSON.parse, if not present it will return an empty array
  if (storedCartStringified) {
    const storedCart = JSON.parse(storedCartStringified);
    return storedCart;
  }
  return [];
};

// ! 4. Now get the return data from getCartFromLocalStorage with id as parameter.
// Note: here id is used as parameter because when we get the data from getCartFromLocalStorage, to identify the specific product best practice is use id as parameter.
const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  // ! 6. Now pass the newCart as a parameter to setCartToLocalStorage
  setCartToLocalStorage(newCart);
};

// ! 5. set the data to the localStorage by stringify

const setCartToLocalStorage = (cart) => {
  const cartStrigify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStrigify);
};

export {
  getCartFromLocalStorage as getStoreCart,
  addItemToCartLocalStorage as addToStoreCart,
};
