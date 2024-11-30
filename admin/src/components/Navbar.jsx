import React, { useState } from "react";
import "./Navbar.css";

// import images necessary from file paths
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <button onClick={() => setToken("")} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
