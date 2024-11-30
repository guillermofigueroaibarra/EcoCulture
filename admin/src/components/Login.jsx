import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault(); // prevent reloading

      // authenticate credentials
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        // display a pop up message if unsuccessfull login
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <p className="form-label">E-mail Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <p className="form-label">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
