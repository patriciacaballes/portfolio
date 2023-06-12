import { FaFacebook, FaCodepen, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div className="footer">
      <IconContext.Provider value={{ color: "#d89666", className: "react-icons", size: "40px" }}>
        <div className="social">
          {" "}
          <Link to="https://www.facebook.com/il_tuo_profilo" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
        </div>
        <div className="social">
          {" "}
          <Link to="https://codepen.io/patriciacaballes" target="_blank" rel="noopener noreferrer">
            <FaCodepen />
          </Link>
        </div>
        <div className="social">
          <Link to="https://twitter.com/patriciacaba_" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
        </div>
        <div className="social">
          {" "}
          <Link to="http://linkedin.com/in/patriciacaballes" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        </div>
        <div className="social">
          <Link to="https://www.instagram.com/patriciacaballes_" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
        </div>
        <div className="social">
          {" "}
          <Link to="https://github.com/patriciacaballes" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
        </div>
      </IconContext.Provider>
    </div>
  );
}
