import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

import Donations from "./pages/Donations";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Donations" element={<Donations />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
