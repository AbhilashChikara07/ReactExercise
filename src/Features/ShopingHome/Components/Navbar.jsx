import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../StyleCss/NavStyle.css";
import { AuthRepository } from "../../../data/repository/authRepository";

const Navbar = () => {
    const navigate = useNavigate();
    const user = AuthRepository.getLoggedInUser();

    const handleLogout = () => {
        AuthRepository.logout();
        navigate("/sign-in");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="nav-link">HOME</Link>
            </div>

            <div className="navbar-menu">
                <Link to="/shop" className="nav-link">Shop</Link>
                <Link to="/monster" className="nav-link">Monster</Link>

                {/* SHOW ONLY IF LOGGED IN */}
                {user && (
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                        onClick={handleLogout}
                    >
                        Logout
                    </span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;