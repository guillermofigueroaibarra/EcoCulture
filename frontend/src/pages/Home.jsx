import React, { useContext, useState } from "react";

import "./PagesStyles/Home.css";
import recyclevideo from "../assets/recyclevideo.mp4";
import recyclesignup from "../assets/recyclesignup.mp4";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import UserPanel from "./UserPanel";

const Home = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  // state variables for login/signup forms
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  {
    /* This function prevents reloading */
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      // if current state is sign up, call sign up api
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        // if successful sign up, stoke returned token
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token); // store token in local storage
        } else {
          // display error notification
          toast.error(response.data.message);
        }

        // else call login api
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        // if success login then save token in local storage
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token); // store token in local storage
          // otherwise display login error message
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // If the user is authenticated, display the logged-in component
  if (token) {
    return <UserPanel />;
  }

  return (
    <div>
      {currentState === "Login" ? (
        <video
          key="loginVideo"
          autoPlay
          muted
          loop
          className="background-video"
          id="myVideo"
        >
          <source src={recyclevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <video
          key="signupVideo"
          autoPlay
          muted
          loop
          className="background-video"
          id="myVideo"
        >
          <source src={recyclesignup} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div class="content">
        {currentState === "Login" ? (
          <h1 onClick={() => setCurrentState("Sign Up")}>Welcome Back!</h1>
        ) : (
          <h1 onClick={() => setCurrentState("Login")}>
            Welcome to EcoCulture!
          </h1>
        )}

        <form onSubmit={onSubmitHandler} className="formatForm">
          <div>
            <p>{currentState}</p>
          </div>
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="name"
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            required
          />
          <div>
            {currentState === "Login" ? (
              <p onClick={() => setCurrentState("Sign Up")}>Create Account</p>
            ) : (
              <p onClick={() => setCurrentState("Login")}>Login Here</p>
            )}
          </div>

          {/* if currentState is equals to login set to sign in otherwise set to
        sign up */}
          <button>{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
