import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import "./PagesStyles/Contact.css";
import contactPhoto from "../assets/contactPhoto.jpg";

const Contact = () => {
  return (
    <div>
      <div className="containerContact">
        <div style={{ textAlign: "center" }}>
          <h1>We’d Love to Hear From You!</h1>
          <p>
            If you’d like to donate to support EcoCulture, have any issues with
            our website, or would like to share suggestions, please don’t
            hesitate to reach out.
          </p>
        </div>
        <div className="row">
          <div className="column">
            <img src={contactPhoto} alt="" className="sideimg" />{" "}
          </div>
          <div className="column">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
