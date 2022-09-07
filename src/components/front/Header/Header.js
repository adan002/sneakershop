import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import Login from '../../../Login'
// import Register from "../../../Register";

const Header = ({cartItems}) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Sneaker Shop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="Login">Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="Register">Register</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/Cart">Cart</Link>
            <span className="cart-length">
              {cartItems.length === 0 ? "" : cartItems.length}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
