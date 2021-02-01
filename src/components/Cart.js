import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  return (
  <Link to={{
    pathname: "/cartitems",
    state: props.cart,
  }}>Cart({props.cart.length})</Link>
  );
};

export default Cart;
