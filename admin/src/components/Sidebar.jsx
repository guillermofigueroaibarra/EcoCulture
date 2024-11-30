import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <SidebarLink to="/add" icon={assets.add_icon} label="Add Item" />
        <SidebarLink to="/list" icon={assets.order_icon} label="List Item" />
        <SidebarLink to="/orders" icon={assets.order_icon} label="Order" />
      </div>
    </div>
  );
}

function SidebarLink({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
    >
      <img src={icon} alt={label} />
      <span className="sidebar-label">{label}</span>
    </NavLink>
  );
}

export default Sidebar;
