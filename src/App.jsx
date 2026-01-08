import React from "react";
import { Routes, Route } from "react-router-dom";

import "./res/color.css";

import Navbar from "./Features/ShopingHome/Components/Navbar.jsx";  
import ShopPage from "./Features/ShopingHome/ShopPage.jsx";
import MonsterHomePageClass from "./routes/MonsterHomePage.jsx";
import ShopingHomePage from "./routes/ShopingHomePage.jsx";
import ContactUsPage from "./Features/ShopingHome/ContactUsPage.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ShopingHomePage />} />
        <Route path="/monster" element={<MonsterHomePageClass />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </>
  );
};

export default App;