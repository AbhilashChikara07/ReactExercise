import React from 'react';
import "../../../features/LoginSignup/Component/StyleCss/ImageComponent.Style.css";
import AssetsConstant from "../../../constant/AssetsConstant";


const ImageComponent = ({ src, alt }) => {
    return (
        <div className="auth-image">
            <img
                src={AssetsConstant.LoginBanner}
                alt="Login Banner"
            />
        </div>
    );
};

export default ImageComponent;
