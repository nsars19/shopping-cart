import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <div className="bg-main" />
      <div className="bg-overlay" />
      <Navbar cart={cart}/>
      <Switch>
        <Route
          exact
          path="/shop"
          render={() => <Shop cart={cart} handleClick={addToCart} />}
        />
        <Route
          path={"/shop/:itemId"}
          render={(props) => {
            return <ItemDetail {...props} cart={cart} handleClick={addToCart} />;
          }}
        />
        <Route path="/cart" render={() => {
          return <Cart cart={cart} />
        }} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
}

export default App;
