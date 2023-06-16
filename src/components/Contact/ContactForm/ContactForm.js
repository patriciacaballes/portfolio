import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form action="https://api.staticforms.xyz/submit" method="post" id="contact-form">
      <div htmlFor="name">Name:</div>
      {/* <input type="text" id="name" value={name} onChange={handleNameChange} required /> */}
      <input type="text" name="name" placeholder="Your Name" />

      <div htmlFor="email">Email:</div>
      {/* <input type="email" id="email" value={email} onChange={handleEmailChange} required /> */}
      <input type="text" name="email" placeholder="Your Email" />

      <div htmlFor="message">Message:</div>
      {/* <textarea id="message" value={message} onChange={handleMessageChange} required></textarea> */}
      <textarea name="message"></textarea>
      <input type="hidden" name="accessKey" value="0aa5d5f9-f7ec-41e1-98db-d1dc89b040c4" />
      <input type="hidden" name="redirectTo" value="https://patriciacaballes.com/" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
