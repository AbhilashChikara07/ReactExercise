/*
 * Created by CHIKARA on 23/12/25
 */

import React, { useState } from "react";
import "./StyleCss/AppNetworkImage.css";


function AppNetworkImage({
    imageUrl,
    width = "100%",
    height = "100%",
    borderRadius = 8,
    fit = "cover", // cover | fill | contain
    placeholder,
    errorWidget,
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <div
            className="app-image-wrapper"
            style={{ width, height, borderRadius }}
        >
            {!hasError && (
                <img
                    src={imageUrl}
                    alt="network"
                    className="app-network-image"
                    style={{ objectFit: fit }}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                    }}
                />
            )}

            {/* Loading State */}
            {isLoading && !hasError && (
                <div className="app-image-placeholder">
                    {placeholder ?? <div className="loader" />}
                </div>
            )}

            {/* Error State */}
            {hasError && (
                <div className="app-image-placeholder">
                    {errorWidget ?? <span className="error-icon">🖼️</span>}
                </div>
            )}
        </div>
    );
}

export default AppNetworkImage;