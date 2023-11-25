import React, { useState } from "react";
import logo from "./logo.png";
import "./styles.css";
import logo2 from "./logo2.jpg";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HIW from "./HIW";

export default function Navbar({ slides, parentWidth }) {
  const [showHIW, setShowHIW] = useState(false);
  const [showHome, setShowHome] = useState(false);
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg m-1 pb-1">
          <img
            src={logo2}
            alt="logo"
            height="100"
            width="100"
            className="d-inline-block align-middle"
          />
          <div className="container-fluid">
            <Link className="navbar-brand d-flex flex-column" to="/">
              <img
                src={logo}
                alt="Logo"
                height="auto"
                width="100%"
                className="d-inline-block align-middle"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    onClick={() => setShowHome(true)}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link hover-overlay ms-5" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ms-5"
                    onClick={() => setShowHIW(true)}
                    to="/HIW"
                  >
                    How It Works
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-5" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-5" href="#">
                    Contact
                  </a>
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
        </Routes>
      </div>
    </Router>
  );
}
