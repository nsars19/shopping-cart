import React from 'react';
import "../styles/Homepage.css";

const Homepage = (props) => {
  return (
    <div className="home-text">
      <div className="home-overlay"></div>
      <h3>Fresh-made & Imported cheeses from around the world</h3>
      <p>Orders delivered in 2-3 business days</p>
      <p>Free shipping on all orders over $30</p>
    </div>
  )
};

export default Homepage;
