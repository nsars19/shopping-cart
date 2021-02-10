import React from "react";
import "../styles/Cart.css";

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
    <div className="wrap-cart">
      {[...cart].map((item) => {
        return (
          <div className="item-card item-card-cart" key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}/lb</p>
            <img src={item.src} alt="Cheese" />
            <div className="count-wrap">
              <span
                className="cart-remove"
                onClick={() => {
                  props.removeFromCart(item);
                  const countVal = document.getElementById("item-count");
                  countVal.value -= 1;
                }}
              >
                <span></span>
              </span>
              <input
                type="number"
                id="item-count"
                className="item-count"
                onChange={handleChange.bind(this, item)}
                defaultValue={count(item)}
                max="20"
              />
              <span className="input-unit">lbs</span>
              <span
                className="cart-add"
                onClick={() => {
                  props.addToCart(item);
                  const countVal = document.getElementById("item-count");
                  countVal.value = parseInt(countVal.value) + 1
                }}
              >
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
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
