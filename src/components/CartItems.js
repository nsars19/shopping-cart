import React from "react";
import uniqid from "uniqid";

function CartItems(props) {
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
}

export default CartItems;
