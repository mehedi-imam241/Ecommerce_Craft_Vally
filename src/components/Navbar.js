import React from "react";
import { Link } from "react-router-dom";
import images from "../imageData";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={images.headerLogo} width="125px" />
        </Link>
      </div>
      <nav>
        <ul id="MenuItems">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/account" className="link">
              Account
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/cart">
        <img src={images.headerLogo2} width="30px" height="30px" />
      </Link>
      <img src={images.menu2} className="menu" onclick="menutoggle()" />
    </div>
  );
};

export default Navbar;
