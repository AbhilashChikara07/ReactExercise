import React from "react";
import { Routes, Route } from "react-router-dom";

import "./res/color.css";

import Navbar from "./features/ShopingHome/Components/Navbar.jsx";
import ShopPage from "./features/ShopingHome/ShopPage.jsx";
import ShopingHomePage from "./routes/ShopingHomePage.jsx";
import MonsterHomePageClass from "./features/MonsterHome/MonsterHomePage.jsx";
import SignIn from "./features/LoginSignup/SignInPage.jsx";
import SignupPage from "./features/LoginSignup/SignupPage.jsx";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />

        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />

        {/* PROTECTED ROUTES */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ShopingHomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <ShopingHomePage />
            </ProtectedRoute>
          }
        />


        <Route
          path="/monster"
          element={
            <ProtectedRoute>
              <MonsterHomePageClass />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;