import React, { useEffect } from "react";
import "./About.css";
import Header from "../Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about">
      <div className=" title">
        <p className="not-colored" data-aos="fade-left" data-aos-duration="3000">
          SHORTLY
        </p>
        <p className="colored" data-aos="fade-right" data-aos-duration="3000">
          ABOUT
        </p>
        <p className="not-colored" data-aos="fade-left" data-aos-duration="3000">
          MY SELF
        </p>
      </div>
      <div id="about">
        <p>I'm a curious and creative soul, always on the lookout for new challenges and opportunities to learn.</p>
        <p>
          I'm currently studying web design at Mohole in Milan, where I'm honing my skills in creating beautiful and
          intuitive user experiences.
        </p>
        <p>
          When I'm not busy coding, you can find me spiking a volleyball, tinkering with DIY projects, or planning my
          next adventure.
        </p>
      </div>
    </div>
  );
}
