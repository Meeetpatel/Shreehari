import React, { useState } from "react";
import logo from "../Pictures/logo.png";
import "./styles.css";
import logo2 from "../Pictures/logo2.jpg";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import HIW from "./HIW";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar({ slides, parentWidth }) {
  const [showHIW, setShowHIW] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg m-1 pb-1">
          <img
            src={logo2}
            alt="logo"
            height="100"
            width="100"
            className="d-sm-none d-md-inline d-inline-block align-middle"
          />
          <div className="container-fluid">
            <a className="navbar-brand d-flex flex-column" href="/">
              <img
                src={logo}
                alt="Logo"
                height="auto"
                width="100%"
                className="d-inline-block align-middle"
              />
            </a>

            <button
              className="navbar-toggler custom-toggler d-md-none d-inline-block"
              type="button"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon " />
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end ${
                expanded ? "show" : ""
              }`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    onClick={() => setShowHome(true)}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link hover-overlay ms-5"
                    onClick={() => setShowGallery(true)}
                    to="/Gallery"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ms-5"
                    onClick={() => setShowHIW(true)}
                    to="/HIW"
                  >
                    How It Works
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ms-5"
                    onClick={() => setShowAbout(true)}
                    to="/About"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ms-5" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                slides={slides}
                setShowHIW={setShowHIW}
                parentWidth={1500}
                setShowHome={setShowHome}
              />
            }
          />
          <Route exact path="/HIW" element={<HIW />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <Home
                slides={slides}
                setShowHIW={setShowHIW}
                parentWidth={1500}
                setShowHome={setShowHome}
                to="/"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
