import React from "react";
import "./Skills.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import $ from "jquery"; // Import the jQuery library

export default function Skills() {
  $(function () {
    var marqueeClass = ".marquee__content";
    var $tickerText = $(marqueeClass).children();
    $tickerText.clone().appendTo(marqueeClass);
    $tickerText.clone().appendTo(marqueeClass);
  });
  return (
    <div className="skills" id="skills-marquee">
      <div className="marquee">
        <div className="marquee__content">
          <ul className="list-inline">
            <li className="skill1">
              {/* {" "} */}
              My <span className="not-colored title">Skills</span>
            </li>
            <li className="skill1">My Skills</li>
            <li>
              My <span className="not-colored title">Skills</span>
            </li>
            <li>My Skills</li>
            <li>
              My <span className="not-colored title">Skills</span>
            </li>
            <li>My Skills</li>
          </ul>
        </div>
      </div>
      {/* <!-- Start Skills-Info --> */}
      <div className="skills-info" id="skills">
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />

        <div className="flex flex-dc">
          <div className="social-links">
            <div className="social-btn flex-center" id="ai">
              <div className="skill-btn ai" width="60" height="60" />
              <span>Adobe Illustrator</span>
            </div>
            <div className="social-btn flex-center" id="ps">
              <div className="skill-btn ps" width="60" height="60" />
              <span>Adobe Photoshop</span>
            </div>
            <div className="social-btn flex-center" id="xd">
              <div className="skill-btn xd" width="60" height="60" />
              <span>Adobe Experience Design</span>
            </div>
            <div className="social-btn flex-center" id="figma">
              <div className="skill-btn figma" width="60" height="60" />
              <span>Figma</span>
            </div>
            <div className="social-btn flex-center" id="html">
              <div className="skill-btn html" width="60" height="60" />
              <span>HyperText Markup Language</span>
            </div>
            <div className="social-btn flex-center" id="css">
              <div className="skill-btn css" width="60" height="60" />
              <span>Cascading Style Sheets</span>
            </div>
            <div className="social-btn flex-center" id="php">
              <div className="skill-btn php" width="60" height="60" />
              <span>Hypertext Preprocessor</span>
            </div>
            <div className="social-btn flex-center" id="wordpress">
              <div className="skill-btn wordpress" width="60" height="60" />
              <span>Wordpress</span>
            </div>
            <div className="social-btn flex-center" id="python">
              <div className="skill-btn python" width="60" height="60" />
              <span>Python</span>
            </div>
            <div className="social-btn flex-center" id="js">
              <div className="skill-btn js" width="60" height="60" />
              <span>Java Script</span>
            </div>
            <div className="social-btn flex-center" id="vue">
              <div className="skill-btn vue" width="60" height="60" />
              <span>Vue</span>
            </div>
            <div className="social-btn flex-center" id="react">
              <div className="skill-btn react" width="60" height="60" />
              <span>React</span>
            </div>
            <div className="social-btn flex-center" id="node-js">
              <div className="skill-btn node-js" width="60" height="60" />
              <span>Node Js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// return (
//   <div className="projects">
//     <Header />
//     <div className="my-skills-main-reel">
//       <div className="my-skills-reel" id="skill-reel">
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//         <div className="reel-item">&nbsp; -- My skills</div>
//       </div>
//       <div className="skill-set-boxes">
//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">HTML5</h1>
//           <p className="skill-set-box-p">I mainly used to develop Website Markup</p>
//           <p>___</p>
//         </div>
//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">CSS3</h1>
//           <p className="skill-set-box-p">I use this to style and bring design to browsers</p>
//           <p>___</p>
//         </div>
//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">javascript</h1>
//           <p className="skill-set-box-p">
//             With this technology i create visual effects and interaction and DOM elements
//           </p>
//           <p>___</p>
//         </div>
//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">React.js</h1>
//           <p className="skill-set-box-p">I loved it! I use it to create applications that have lot of reactivity</p>
//           <p>___</p>
//         </div>
//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">Greensock - GSAP</h1>
//           <p className="skill-set-box-p">I used this as an animation library, The most loved ones!</p>
//           <p>___</p>
//         </div>
//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">Three.js</h1>
//           <p className="skill-set-box-p">This library deals and simplifies the working with webgl and glsl</p>
//           <p>___</p>
//         </div>
//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">Sass</h1>
//           <p className="skill-set-box-p">I prefer this also instead of CSS beacouse of advance functionalities</p>
//           <p>___</p>
//         </div>
//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">Node.js</h1>
//           <p className="skill-set-box-p">I use it to writing server scripting for applications</p>
//           <p>___</p>
//         </div>

//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">Photoshop</h1>
//           <p className="skill-set-box-p">Use to edit photos or prototype any website design</p>
//           <p>___</p>
//         </div>

//         <div className="skill-set-box">
//           <h1 className="skill-set-box-h1">Illustrator</h1>
//           <p className="skill-set-box-p">I use to make creative svgs and illustrations for website</p>
//           <p>___</p>
//         </div>
//       </div>
//       <div className="project-and-work">
//         <h1>
//           <Link className="h1-project" to="/projects">
//             My Projects and Works
//             {/* <img src={arrow} alt="" /> */}
//           </Link>
//         </h1>
//         <br />
//         <p>Click me!</p>
//       </div>
//       {/* <GetInTouch />
// <Footer /> */}
//     </div>
//   </div>
// );
