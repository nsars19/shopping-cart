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
        <img src={item.src} alt="Picture of product" />
        <h3 onClick={() => props.handleClick(item)}>Add to Cart</h3>
      </div>
    )
  };

  return (
    <>
      <Cart cart={props.cart} />
      <div className="shop-items">
        {itemsList.items.map(item => buildItemElement(item))}
      </div>
    </>
  )
};

export default Shop;
