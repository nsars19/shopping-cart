import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import CartItems from "./components/CartItems";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
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
        <Route path="/cartitems" render={() => {
          return <CartItems cart={cart} />
        }} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
