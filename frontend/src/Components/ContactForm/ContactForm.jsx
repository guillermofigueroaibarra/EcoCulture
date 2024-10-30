import React from "react";
import "./Contact.css";

function ContactForm() {
  return (
    <section className="contact">
      <form>
        <h2>Contact Us!</h2>
        <div className="inputBox">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="Name"
            required
          />
        </div>

        <div className="inputBox">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your e-mail"
            name="e-mail"
            required
          />
        </div>

        <div className="inputBox">
          <label>Message</label>
          <textarea
            name="Message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
