import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation and submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="contact-form">
        <h1 className="talk-project">Let's talk about the project?</h1>

        <div>
          <div htmlFor="name">Name:</div>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <div htmlFor="email">Email:</div>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <div htmlFor="message">Message:</div>
          <textarea id="message" value={message} onChange={handleMessageChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
