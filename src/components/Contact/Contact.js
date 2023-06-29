import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import find from "../../assets/img/find2.svg";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";
import mypic from "../../assets/img/patricia caballes.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="stroke">Contact</h2>
      <div className="contact-form">
        <div>
          <ContactForm />
        </div>
        <div className="pic">
          <img src={mypic} alt="an old car" id="my-pic"></img>
          <div className="find-out">
            <img src={find} alt="" id="find" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
