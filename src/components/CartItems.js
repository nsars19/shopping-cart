import React from "react";
import uniqid from "uniqid";

function CartItems(state) {
  let cart = state.location.state;

  return (
    <div>
      {cart.map(item => {
        return <p key={uniqid()}>{item.name} - ${item.price}</p>
      })}
    </div>
  )
}

export default CartItems;
