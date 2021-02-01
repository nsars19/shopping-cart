import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/shop">Shop</Link>
      </span>
    </nav>
  );
};

export default Navbar;
