import React, { useContext, useState } from "react";
import "./Navbar.css";
import { ShopContext } from "../../context/ShopContext";
// import images necessary from file paths

import logo from "../../assets/logo.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import cartIcon from "../../assets/cart_icon.png";

// to set up the links in navbar
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext); // get number of items in cart
  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const logout = () => {
    navigate("/Home.jsx");
    localStorage.removeItem("token"); // remove token from local storage
    setToken("");
    setCartItems({}); // empty cart
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <NavLink to="/">
        <img src={logo} alt="" className="logo" />
      </NavLink>

      <ul className={menuOpen ? "show" : ""}>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="/Donations">
          <li>Donations</li>
        </NavLink>

        <NavLink to="/Resources">
          <li>Resources</li>
        </NavLink>
        <NavLink to="/Blog">
          <li>Blog</li>
        </NavLink>
        <NavLink to="/About">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/Contact">
          <li>Contact</li>
        </NavLink>

        <NavLink to="/">
          {/* Check if the token exists toherwise don't display the logout word*/}
          {token ? (
            <li onClick={logout} style={{ color: "red" }}>
              Logout
            </li>
          ) : null}
        </NavLink>
      </ul>

      {/* Check if the token exists otherwise don't display the cart*/}
      {token ? (
        <NavLink to="/Cart">
          <img src={cartIcon} alt="" className="cart" />
          <p>{getCartCount()}</p>
        </NavLink>
      ) : null}
      <img
        onClick={toggleMode}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
