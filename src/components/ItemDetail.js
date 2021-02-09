import React from "react";
import itemsList from "./itemsList";
import { Link } from "react-router-dom";
import "../styles/itemDetail.css";

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
      <div className="detail-wrap">
        <div id="item-detail" className="item-detail item-card">
          <h1>{item.name}</h1>
          <img src={item.src} />
          <div>${item.price}/lb</div>
          <button className="add-to-cart" onClick={() => props.handleClick(item)}>Add to cart</button>
        </div>
      </div>
      <Link to="/shop" className="back-link">Back</Link>
    </>
  )
};

export default CartItem;
