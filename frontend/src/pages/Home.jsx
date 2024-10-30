import React, { useState } from "react";

import "./PagesStyles/Home.css";
import recyclevideo from "../assets/recyclevideo.mp4";
import recyclesignup from "../assets/recyclesignup.mp4";

const Home = () => {
  const [currentState, setCurrentState] = useState("Login");

  {
    /* This function prevents reloading */
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
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
            <input type="text" placeholder="name" required />
          )}
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
          <div>
            <p>Forgot your password?</p>
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
