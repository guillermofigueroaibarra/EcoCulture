import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Donations from "./pages/Donations";
import Footer from "./Components/Footer/Footer";
import Blog from "./pages/Blog";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      {/* notifications tag */}
      <ToastContainer position="bottom-center" />
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Donations" element={<Donations />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
