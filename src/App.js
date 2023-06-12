import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
// import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <Router>
      <div>
        <Cursor />
        <div className="noise"></div>
        {/* <div class="cursor"></div> */}
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
