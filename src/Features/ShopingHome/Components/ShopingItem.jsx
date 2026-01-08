import React from "react";
import "../StyleCss/ShopingStyle.css";
import AppNetworkImage from "../../../utils/AppNetworkImage.jsx";


const ShoepingItem = ({ categories }) => {
    return (
        <div className="ShopingListStyle">
            {categories.map(({ id, title, imageUrl }) => (
                <div key={id} className="ShopingItemContainerStyle">
                    <div
                        className="background-image"
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                        }}
                    />
                    <div className="shoping-item-body">
                        <AppNetworkImage
                            imageUrl={`${imageUrl}`}
                            fit="cover"
                            borderRadius={4}
                        />
                        <h2 className="ShopingItemTextStyle">{title}</h2>
                        <h2 className="ShopingItemButtonStyle">Shop Now</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShoepingItem;