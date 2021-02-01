import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import itemsList from "./components/itemsList";
import ItemInfo from "./components/ItemInfo";
import CartItems from "./components/CartItems";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          path="/shop"
          render={() => <Shop cart={cart} handleClick={addToCart} />}
        />
        <Route path="/cartitems" component={CartItems} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;

