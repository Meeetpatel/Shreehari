import React from "react";
import logo from "./logo.png";
import "./styles.css";
import logo2 from "./logo2.jpg";

export default function Navbar() {
  return (
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
          <a className="navbar-brand d-flex flex-column" href="#">
            <img
              src={logo}
              alt="Logo"
              height="auto" // Adjusted for responsive design
              width="100%" // Adjusted for responsive design
              className="d-inline-block align-middle"
            />
          </a>

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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-overlay ms-5" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="#">
                  How It Works
                </a>
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
    </div>
  );
}
