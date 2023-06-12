import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import "./RotatingCircle.css";

// Registra il plugin CSS
gsap.registerPlugin(Draggable);

export default function RotatingCircle() {
  const draggableRef = useRef(null);

  useEffect(() => {
    Draggable.create(draggableRef.current);
  }, []);

  return (
    <div ref={draggableRef}>
      <div className="rotating-circle"></div>
    </div>
  );
}
