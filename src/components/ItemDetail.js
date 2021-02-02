import React from "react";
import itemsList from "./itemsList";
import Cart from "./Cart";

const CartItem = (props) => {
  const findItemById = (id) => {
    const items = itemsList.items
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) return items[i];
    };
  };

  const id = parseInt(props.match.params.itemId)
  const item = findItemById(id)
  
  return (
    <>
      <Cart cart={props.cart}/>
      <h1>{item.name}</h1>
      <button onClick={() => props.handleClick(item)}>Add to cart</button>
    </>  
  )
};

export default CartItem;
