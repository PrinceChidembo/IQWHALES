import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/ContactUs.css"; // Import the CSS file
import personImage from "../assets/images/person-answering-call.jpg"; // Adjust path as needed

export const ContactUs = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    emailjs
      .sendForm("service_o3vfozs", "template_oncx7g8", form.current, {
        publicKey: "MsNb8EjrHRZG-cxHP",
      })
      .then(
        () => {
          setMessage("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setMessage("Failed to send email. Please try again.");
          console.error("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-container">
      <img
        src={personImage}
        alt="Person answering a call"
        className="contact-image"
      />
      <h2 className="contact-heading">Contact Us</h2>
      <h3 className="contact-heading-mobile">Contact Us</h3>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" required />

        <input
          type="submit"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading}
          className="submit-button"
        />
      </form>

      {message && <p className="response-message">{message}</p>}
    </div>
  );
};
