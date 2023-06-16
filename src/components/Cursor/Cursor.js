import React from "react";
import "./Cursor.css";
import { useEffect } from "react";

const lerp = (a, b, n) => (1 - n) * a + n * b;

class CustomCursor {
  constructor() {
    // config
    this.target = { x: 0.5, y: 0.5 }; // mouse position
    this.cursor = { x: 0.5, y: 0.5 }; // cursor position
    this.speed = 0.2;
    this.init();
  }
  bindAll() {
    ["onMouseMove", "onClick", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }
  onMouseMove(e) {
    //get normalized mouse coordinates [0, 1]
    this.target.x = e.clientX / window.innerWidth;
    this.target.y = e.clientY / window.innerHeight;
    // trigger loop if no loop is active
    if (!this.raf) this.raf = requestAnimationFrame(this.render);
  }
  onClick() {
    document.documentElement.style.setProperty("--cursor-animation", "click");
    setTimeout(() => {
      document.documentElement.style.setProperty("--cursor-animation", "none");
    }, 500);
  }
  render() {
    //calculate lerped values
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
    document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
    document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
    //cancel loop if mouse stops moving
    const delta = Math.sqrt(Math.pow(this.target.x - this.cursor.x, 2) + Math.pow(this.target.y - this.cursor.y, 2));

    if (delta < 0.001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }
    //or continue looping if mouse is moving
    this.raf = requestAnimationFrame(this.render);
  }
  init() {
    this.bindAll();
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("click", this.onClick);

    this.raf = requestAnimationFrame(this.render);
  }
}

export default function Cursor() {
  useEffect(() => {
    // const cursor = document.querySelector(".cursor");
    // document.addEventListener("mousemove", (e) => {
    //   cursor.setAttribute(
    //     "style",
    //     "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    //   );
    // });

    // document.addEventListener("click", (e) => {
    // });
    new CustomCursor();
  });

  return <div id="cursor"></div>;
}

// import React from "react";
// import "./Cursor.css";
// import { useEffect } from "react";
// export default function Cursor() {
//   useEffect(() => {
//     const cursor = document.querySelector(".cursor");
//     document.addEventListener("mousemove", (e) => {
//       cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
//     });

//     document.addEventListener("click", (e) => {
//       cursor.classList.add("expand");
//       setTimeout(() => {
//         cursor.classList.remove("expand");
//       }, 500);
//     });
//   });

//   return <div className="cursor"></div>;
// }
