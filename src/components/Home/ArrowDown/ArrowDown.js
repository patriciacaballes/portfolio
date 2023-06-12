import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./ArrowDown.css";

export default function ArrowDown() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(".arrow-down", { y: 20, duration: 1 }).to(".arrow-down", { y: 0, duration: 1 });
  }, []);

  return <div className="arrow-down"></div>;
}
