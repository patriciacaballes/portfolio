import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import ArrowDown from "./ArrowDown/ArrowDown";
import RotatingCircle from "./RotatingCircle/RotatingCircle";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Cursor from "../Cursor/Cursor";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <div className="intro">
          <p className="fill one title">Hi I'm</p>
          <p className="stroke one title">PATRICIA</p>
          <p className="stroke two title">but you can call me</p>
          <p className="fill three title" id="name">
            Pat
          </p>
          {/* <p className="fill three title" id="name" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {name}
          </p> */}
        </div>
        {/* <Cursor /> */}
        <div id="arrow-down">
          <ArrowDown />
        </div>
        <RotatingCircle />
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
