import React from "react";
import { Routes, Route } from "react-router-dom";

import "./res/color.css";

import Navbar from "./features/ShopingHome/Components/Navbar.jsx";
import ShopPage from "./features/ShopingHome/ShopPage.jsx";
import ShopingHomePage from "./routes/ShopingHomePage.jsx";
import MonsterHomePageClass from "./features/MonsterHome/MonsterHomePage.jsx";
import SignIn from "./features/LoginSignup/SignInPage.jsx";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ShopingHomePage />} />
        <Route path="/monster" element={<MonsterHomePageClass />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;