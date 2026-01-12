import React from "react";
import { Navigate } from "react-router-dom";
import { AuthRepository } from "../data/repository/authRepository";

const ProtectedRoute = ({ children }) => {
    const user = AuthRepository.getLoggedInUser();

    if (!user) {
        return <Navigate to="/sign-in" replace />;
    }

    return children;
};

export default ProtectedRoute;