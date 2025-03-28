import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
// ! 7. importing addToStoreCart from localStorage
import { addToStoreCart } from "../../utilities/localStorages";

const Bottles = ({ bottlePromise }) => {
  const bottle = use(bottlePromise);
  const [cart, setCart] = useState([]);
  console.log(bottle);
  const handleAddToCart = (bottle) => {
    console.log("Bottle added", bottle);
    const updateCart = [...cart, bottle];
    setCart(updateCart);

    // ! 8. This portion is from localStorage
    //? Note: We know to get the data from child component we have to function it from it's parents though the button is in child component so to set the id in localStorage call addToStoreCart function from localStorage.jsx
    addToStoreCart(bottle.id);
  };

  return (
    <div>
      <h5>Cart: {cart.length}</h5>
      <div className="bottles-container">
        {bottle.map((bottle) => (
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
