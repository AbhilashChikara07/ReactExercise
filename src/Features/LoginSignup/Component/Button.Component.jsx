import React from "react";
import "../../../features/LoginSignup/Component/StyleCss/LoginSignup.Style.css";


const Button = ({ label = "Login", onClick, disabled = false }) => {
    return (
        <button
            className="primary-btn"
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;