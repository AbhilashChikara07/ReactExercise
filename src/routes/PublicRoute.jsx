import React from "react";
import { Navigate } from "react-router-dom";
import { AuthRepository } from "../data/repository/authRepository";

const PublicRoute = ({ children }) => {
    const user = AuthRepository.getLoggedInUser();

    if (user) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PublicRoute;