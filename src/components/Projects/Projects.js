import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import arrow from "../../assets/img/arrow.svg";

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="project-page">
        <div className="project-and-work">
          <h1>
            <Link className="h1-project" to="/projects">
              My Projects and Works
            </Link>
          </h1>
        </div>
        <div className="project-page-container">
          <div className="project-page-items">
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>01/06</p>
              </div>
              <a href="/">
                <div className="project-page-item-header">
                  <h1>Job Creation</h1>
                  <p>web-app</p>
                </div>
                <div className="project-page-item-image project-page-item-image1"></div>
                <div className="project-page-item-footer">
                  <p>A web app that offers work from home opportunities.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>02/06</p>
              </div>
              <a href="https://www.figma.com/file/TlKNDfBe2ENfTXssj6LZ9s/Parliamo-di-Th%C3%A8?type=design&node-id=106%3A1353&t=3W4oeakWnSF3LR8u-1">
                <div className="project-page-item-header">
                  <h1>Parliamo di The</h1>
                  <p>A prototype of an app</p>
                </div>
                <div className="project-page-item-image project-page-item-image2"></div>
                <div className="project-page-item-footer">
                  <p>An e-commerce app that sells tea.</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>03/06</p>
              </div>
              <a href="https://xd.adobe.com/view/0177661e-b203-46ac-a58d-7cf7b3d95991-5424/screen/a2ff6b48-9b43-4497-a55d-c56c9caa76cc">
                <div className="project-page-item-header">
                  <h1>Interaction Design</h1>
                  <p>Prototype layout in Adobe XD</p>
                </div>
                <div className="project-page-item-image project-page-item-image3"></div>
                <div className="project-page-item-footer">
                  <p>Digital prototype in Adobe XD based on wireframes</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>04/06</p>
              </div>
              <a href="/">
                <div className="project-page-item-header">
                  <h1>Pizza Slice</h1>
                  <p>Dashboard</p>
                </div>
                <div className="project-page-item-image project-page-item-image4"></div>
                <div className="project-page-item-footer">
                  <p>A dashboard that collects data from a pizzeria. using PHPmyAdmin</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="project-page-item">
              <div className="project-page-item-number">
                <p>05/06</p>
              </div>
              <a href="/">
                <div className="project-page-item-header">
                  <h1>Per The</h1>
                  <p>Html & CSS Responsice</p>
                </div>
                <div className="project-page-item-image project-page-item-image5"></div>
                <div className="project-page-item-footer">
                  <p>A simple but modern code.</p>
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
                  <p>Information About Avatar</p>
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
