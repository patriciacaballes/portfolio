import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import find from "../../assets/img/find2.svg";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className="contact">
      <Header />
      <h2 className="stroke">Contact</h2>
      <div className="contact-form">
        <div>
          <ContactForm />
        </div>

        <div className="find-out">
          <img src={find} alt="" />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
