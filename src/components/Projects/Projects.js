import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import arrow from "../../assets/img/arrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  return (
    <div>
      <div className="project-page">
        <div className="project-and-work">
          <h1 className="h1-project stroke" data-aos="flip-down" data-aos-duration="3000">
            My Projects
          </h1>
        </div>
        <div className="project-page-container">
          <div className="project-page-items">
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>02/06</p>
              </div>
              <a href="https://www.figma.com/proto/TlKNDfBe2ENfTXssj6LZ9s/Parliamo-di-Th%C3%A8?page-id=84%3A4359&type=design&node-id=125-5611&viewport=584%2C-1363%2C0.42&t=D3TbPd6yrpm8xJHT-1&scaling=scale-down&starting-point-node-id=149%3A3783&show-proto-sidebar=1&mode=design">
                <div className="project-page-item-header">
                  <h1>Parliamo di The</h1>
                  <p>A prototype of an app</p>
                </div>
                <div className="project-page-item-image project-page-item-image1"></div>
                <div className="project-page-item-footer">
                  <p>An e-commerce app that sells tea.</p>

                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>01/06</p>
              </div>
              <a href="https://jobcreation.netlify.app/">
                <div className="project-page-item-header">
                  <h1>Job Creation</h1>
                  <p>web-app</p>
                </div>
                <div className="project-page-item-image project-page-item-image2"></div>
                <div className="project-page-item-footer">
                  <p>A web app that offers work from home opportunities.</p>

                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>03/06</p>
              </div>
              <a href="https://www.figma.com/file/cpRmphTOzxYjKrvgQGWcqM/Interaction-Design?type=design&node-id=67%3A842&mode=design&t=993rT6u4P7GEW3ct-1">
                <div className="project-page-item-header">
                  <h1>GOOD MORNING</h1>
                  <p>Prototype layout in FIGMA</p>
                </div>
                <div className="project-page-item-image project-page-item-image3"></div>
                <div className="project-page-item-footer">
                  <p>Digital prototype in FIGMA based on wireframes</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>04/06</p>
              </div>
              <a href="https://nexhool.metaproject.xyz/">
                <div className="project-page-item-header">
                  <h1>Nexthool</h1>
                  <p>Landing page</p>
                </div>
                <div className="project-page-item-image project-page-item-image4"></div>
                <div className="project-page-item-footer">
                  <p>represent the school of the future</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>05/06</p>
              </div>
              <a href="https://www.figma.com/proto/0Ku9VOWx9V3EdqB63ANYAO/EAST?page-id=363%3A2016&type=design&node-id=363-2022&viewport=66%2C297%2C0.31&t=7x40L1OjSBTUjPWz-1&scaling=scale-down&starting-point-node-id=363%3A2022&show-proto-sidebar=1&mode=design">
                <div className="project-page-item-header">
                  <h1>Fly Track</h1>
                  <p>Digital prototype in FIGMA based on wireframes</p>
                </div>
                <div className="project-page-item-image project-page-item-image5"></div>
                <div className="project-page-item-footer">
                  <p>Track your travel details</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>06/06</p>
              </div>
              <a href="https://www.figma.com/file/EiCymz7ucsdQ3GvrkKDkmA/01_Avatar?type=design&node-id=122%3A1507&t=EADJzI6RvGYOmoXY-1">
                <div className="project-page-item-header">
                  <h1>Avatar 1 & 2</h1>
                  <p>a website prototype in Figma.</p>
                </div>
                <div className="project-page-item-image project-page-item-image6"></div>
                <div className="project-page-item-footer">
                  <p>Information About Avatar film</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <GetInTouch />
    <Footer /> */}
    </div>
  );
}

// const [view, setView] = useState("grid");
// const showGrid = () => {
//   setView("grid");
// };

// const showList = () => {
//   setView("list");
// };

// return (
//   <div className="projects">
//     <div className="project-and-work">
//       <h1>
//         <Link className="h1-project" to="/projects">
//           My Projects and Works
//           {/* <img src={arrow} alt="" /> */}
//         </Link>
//       </h1>
//       <br />
//       <p>Click me!</p>
//     </div>

//     {/*  */}
//     <div className="container-projects">
//       <ul className="change-view">
//         <li className={`option option-hover ${view === "grid" ? "active" : ""}`} onClick={showGrid} id="grid-project">
//           Grid
//         </li>

//         <li className={`option option-hover ${view === "list" ? "active" : ""}`} onClick={showList}>
//           List
//         </li>
//       </ul>
//       {view === "grid" && (
//         <div className="content-grid" id="grid-view">
//           <div className="grid-view">
//             <div className=""></div>
//             <div className="project b4">Project 2</div>
//             <div className="project">Project 3</div>
//             <div className="project">Project 4</div>
//             <div className=""></div>
//             <div className="project b4">Project 6</div>
//             <div className="project b4">Project 7</div>
//             <div className="project">Project 8</div>
//             <div className=""></div>
//           </div>
//         </div>
//       )}

//       {view === "list" && (
//         <div className="content-list" id="list-view">
//           <div className="view-list">
//             <div className="project">Project 1</div>
//             <div className="project">Project 2</div>
//             <div className="project">Project 3</div>
//             <div className="project">Project 4</div>
//             <div className="project">Project 5</div>
//             <div className="project">Project 6</div>
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
