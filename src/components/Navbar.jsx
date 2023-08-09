import React from "react";
import './Navbar.scss'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navBar">
        <div className="links">
            <Link to='/'>Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}></ShoppingCart>
            </Link>
        </div>
    </div>
  )
};
