import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <span className="nav-brand">Cheese Guys</span>
      <span className="nav-item">
        <Link to="/">Home</Link>
      </span>
      <span className="nav-item">
        <Link to="/shop">Shop</Link>
      </span>
      <span className="nav-item">
        <Link to={{
          pathname: "/cartitems",
          state: props.cart,
        }}>Cart</Link>
      </span>
    </nav>
  );
};

export default Navbar;
