import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import "./PagesStyles/UserAccount.css";

function login() {
  const [newEmail, setNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { token, backendUrl } = useContext(ShopContext);

  const handleEmailChange = async (event) => {
    event.preventDefault();
    console.log(token);
    try {
      const response = await axios.post(
        backendUrl + "/api/user/update-email",
        { newEmail },
        { headers: { token } }
      );

      console.log(response);
      if (response.data.success) {
        toast.success("Email updated successfully!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error updating email");
    }
  };

  const handlePasswordChange = async (event) => {
    event.preventDefault();
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/user/update-password",
        { newEmail },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Password updated successfully!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error updating password");
    }
  };

  return (
    <div className="profile-settings">
      <h2>Update Profile</h2>

      <div className="update-email">
        <h3>Update Email</h3>
        <input
          type="email"
          placeholder="New Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button onClick={handleEmailChange}>Update Email</button>
      </div>

      <div className="update-password">
        <h3>Update Password</h3>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handlePasswordChange}>Update Password</button>
      </div>
    </div>
  );
}

export default login;
