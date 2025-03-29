import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeItemFromCart }) => {
  console.log(cart);
  // ShowDataWithPicsInUi 3.2 destructured the passed cart and loop over the cart and add a button to every items
  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div>
          <img src={bottle.img} />
          <button
            onClick={() => {
              removeItemFromCart(bottle.id); // 4.2 এখানে id টা parameter এ pass করা হয়েছে।
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
