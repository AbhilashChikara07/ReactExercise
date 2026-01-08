import React from "react";
import { Routes, Route } from "react-router-dom";

import "./res/color.css";

import Navbar from "./Features/Shoping/Components/Navbar.jsx";   // ✅ IMPORTANT
import ShopingPage from "./Features/Shoping/ShopingPage.jsx";
import ShopPage from "./Features/Shoping/ShopPage.jsx";
import ContactUsPage from "./Features/Shoping/ContactUsPage.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ShopingPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </>
  );
};

export default App;