import React from "react";
import "../StyleCss/ShopingStyle.css";
import AppNetworkImage from "../../../utils/AppNetworkImage.jsx";
import { capitalizeFirst } from "../../../utils/StringUtils.jsx";


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
                            width="100%"
                            height="100%"
                            imageUrl={`${imageUrl}`}
                            fit="cover"
                            borderRadius={4}
                        />
                        <h2 className="ShopingItemTextStyle">{capitalizeFirst(title)}</h2>
                        <h2 className="ShopingItemButtonStyle">Shop Now</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShoepingItem;