import React, { useState } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

const Cart = (props) => {
  // Get unique cart items for card elements
  const cart = new Set(props.cart);

  const count = (itemToCount) => {
    return props.cart.filter((item) => item === itemToCount).length;
  };

  const handleChange = (item, e) => {
    const value = parseInt(e.target.value);
    let diff = value - count(item);

    if (diff === 0) return;

    let itemsToAdd = [];
    for (let i = 0; i < Math.abs(diff); i++) {
      if (diff > 0) {
        itemsToAdd.push(item);
      } else {
        props.removeFromCart(item);
      }
    }

    if (!!itemsToAdd.length) props.setCart([...cart, ...itemsToAdd]);
  };

  return (
    <div>
      {props.cart.map((item) => {
        return (
          <p key={uniqid()}>
            {item.name} - ${item.price}
          </p>
        );
      })}
      <h3>
        Total: $
        {props.cart
          .reduce((total, current) => {
            return total + parseFloat(current.price);
          }, 0)
          .toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
