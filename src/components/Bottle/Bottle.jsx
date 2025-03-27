import React from "react";
import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  console.log(bottle);
  const { img, name, price, quantity, stock } = bottle;

  return (
    <div className="card">
      <img src={img} alt="" srcset="" />
      <h4>Product Name: {name}</h4>
      <p>Price: ${price}</p>
      <p>{stock} remaining</p>
      <button
        onClick={() => {
          handleAddToCart(bottle);
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
