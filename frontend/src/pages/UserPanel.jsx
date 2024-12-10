import "./PagesStyles/UserPanel.css";
import { ShopContext } from "../context/ShopContext.jsx";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

function UserPanel() {
  const { navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token"); // remove token from local storage
    setToken("");
    setCartItems({}); // empty cart
    navigate("/");
  };

  return (
    <div class="user-panel">
      <div class="panel-header">
        <h1>User Panel</h1>
      </div>
      <div class="panel-body">
        <div class="panel-section" id="configure-account">
          <Link to={"/login"}>
            <h2>Configure Account</h2>
            <p>Update your account settings.</p>
          </Link>
        </div>

        <div class="panel-section" id="orders">
          <Link to={"/Orders"}>
            <h2>Orders</h2>
            <p>Check your order history and track orders.</p>
          </Link>
        </div>

        <div class="panel-section" id="logout">
          <button onClick={logout} class="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
