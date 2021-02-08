import React from 'react';
import itemsList from "./itemsList";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import "../styles/Shop.css";

const Shop = (props) => {
  const buildItemElement = (item) => {
    return (
      <div key={item.id} className="item-card">
        <Link to={`/shop/${item.id}`}>
          <h2>{item.name} - ${item.price}</h2>
        </Link>
        <img src="#" alt="Picture of product" height="100px" width="100px" />
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
