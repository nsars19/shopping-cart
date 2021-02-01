import React, { useState, useEffect } from 'react';
import itemsList from "./itemsList";
import Cart from "./Cart";

const Shop = (props) => {
  const buildItemElement = (item) => {
    return (
      <div key={item.id}>
        <h1>{item.name} - ${item.price}</h1>
        <h3 onClick={() => props.handleClick(item)}>Add to Cart</h3>
      </div>
    )
  };

  return (
    <>
      <Cart cart={props.cart} />
      {itemsList.items.map(item => buildItemElement(item))}
    </>
  )
};

export default Shop;
