import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import find from "../../assets/img/find2.svg";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-page">
        <div className="contact-page-container">
          <div className="info-contact">
            <div className="email">
              <ContactForm />
              {/* <p>Find out more about me on my social media </p>
              <p>I’m looking forward to hear from you!</p> */}
              {/* <Link to="mailto:patriciacaballes04@gmail.coms" style={{ textDecoration: "none" }}>
                <h1>patriciacaballes04@gmail.com</h1>
              </Link> */}
              <p>Feel free to discuss a new project.</p>
            </div>
            <div className="find-out">
              <img src={find} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
