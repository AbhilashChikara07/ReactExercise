import React from "react";
import { Link } from "react-router-dom";
import "../StyleCss/NavStyle.css";



const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="nav-link">HOME</Link>
            </div>

            <div className="navbar-menu">
                <Link to="/shop" className="nav-link">Shop</Link>
                <Link to="/contact" className="nav-link">Sign In</Link>
            </div>
        </nav>
    );
};

export default Navbar;