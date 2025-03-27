import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlePromise }) => {
  const bottle = use(bottlePromise);
  const [cart, setCart] = useState([]);
  console.log(bottle);
  const handleAddToCart = (bottle) => {
    console.log("Bottle added", bottle);
  };

  return (
    <div className="bottles-container">
      {bottle.map((bottle) => (
        <Bottle
          bottle={bottle}
          key={bottle.id}
          handleAddToCart={handleAddToCart}
        ></Bottle>
      ))}
    </div>
  );
};

export default Bottles;
