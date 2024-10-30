import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-row">
        <p class="footerlinks">
          <NavLink to="/" className="footerlinks" activeClassName="active-link">
            Login/Signup{" "}
          </NavLink>
          |{" "}
          <NavLink
            to="/About"
            className="footerlinks"
            activeClassName="active-link"
          >
            About Us{" "}
          </NavLink>
          |{" "}
          <NavLink
            to="/Contact"
            className="footerlinks"
            activeClassName="active-link"
          >
            {" "}
            Contact{" "}
          </NavLink>
        </p>
      </div>
      <div class="footer-row">
        <p>Follow Us</p>
        <br />
        <ul class="social-links">
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <i class="fab fa-facebook-f fa-3x"></i>
            </a>{" "}
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <i class="fab fa-twitter fa-3x"></i>
            </a>{" "}
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <i class="fab fa-instagram fa-3x"></i>
            </a>{" "}
          </li>
        </ul>
      </div>
      <div class="footer-row">
        <p> © EcoCulture.</p>
      </div>
    </footer>
  );
}

export default Footer;
