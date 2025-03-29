import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
// ! LS 1.7 importing addToStoreCart from localStorage
import { addToStoreCart, getStoredCart } from "../../utilities/localStorages";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  console.log(bottles);

  //? Note: এখানে আগের LS ধাপ গুলাতে browser reload দেওয়ার পরেও  localStorage data গুলা থেকে যাবে। কিন্তু UI তে তা থাকতেছেনা। browser reload দেওয়ার পরেও localStorage এর data গুলো নিয়ে UI তে show করার জন্য useEffect() ব্যাবহার করা হয়েছে। useEffect() সাধারনত বাইরের data নিয়ে কাজ করে i.e data fetch from server, data fetch from localStorage। useEffect একটা callback function এবং একটা dependencies parameter নেয়।

  useEffect(() => {
    // *ShowDataToUI: 2.1 getting data from localStorage by calling getStoredCart() and found an array
    const storedCartId = getStoredCart();
    console.log(storedCartId);

    // *ShowDataToUI: 2.3 store the cartBottle
    const storedCart = [];

    //*ShowDataToUI: 2.2 loop over the array and find the localStorage data id by comparing with previous found bottles array of object
    for (const id of storedCartId) {
      console.log(id, bottles);
      const cartBottle = bottles.find((bottle) => bottle.id === id);

      // *ShowDataToUI: 2.4 If any previously cart bottle is present it will push it to the empty array storedCart
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    console.log("Stored Cart", storedCart);

    //*ShowDataToUI: 2.5 Now set the data to show in UI
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    console.log("Bottle added", bottle);
    const updateCart = [...cart, bottle];
    setCart(updateCart);

    // ! LS 1.8 This portion is from localStorage
    //? Note: We know to get the data from child component we have to set the function on it's parents though the button is in child component so to set the bottle id in localStorage call addToStoreCart function from localStorage.jsx in eventHandler and the bottle id in localStorage.
    addToStoreCart(bottle.id);
  };

  return (
    <div>
      <h5>Cart: {cart.length}</h5>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
