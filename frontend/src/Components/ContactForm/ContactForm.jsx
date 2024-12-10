import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pz5n4nn", "template_js4b9h2", form.current, {
        publicKey: "tG9zpqUnke4rii1gW",
      })
      .then(
        () => {
          toast.success("Message sent!");

          console.log("SUCCESS!");
        },
        (error) => {
          toast.error(response.data.message);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contact Us!</h2>
        <div className="inputBox">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="from_name"
            required
          />
        </div>

        <div className="inputBox">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your e-mail"
            name="from_email"
            required
          />
        </div>

        <div className="inputBox">
          <label>Message</label>
          <textarea
            name="message"
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
