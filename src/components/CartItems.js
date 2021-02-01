import React from "react";
import uniqid from "uniqid";

function CartItems(state) {
  let cart = state.location.state;

  return (
    <div>
      {cart.map(item => {
        return <p key={uniqid()}>{item.name} - ${item.price}</p>
      })}
      <h3>Total: ${cart.reduce((total, current) => {
        return total + parseFloat(current.price);
      }, 0).toFixed(2)}</h3>
    </div>
  )
}

export default CartItems;
