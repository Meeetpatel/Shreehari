import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import pic1 from "./pic-1.png";
import pic2 from "./pic-2.jpg";
import pic3 from "./pic-3.jpg";
import pic4 from "./pic-4.jpg";
import pic5 from "./pic-5.jpg";
import "./Components/styles.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const slides = [
    { url: pic1, title: "1" },
    { url: pic2, title: "2" },
    { url: pic3, title: "3" },
    { url: pic4, title: "4" },
    { url: pic5, title: "5" },
  ];

  const containerStyles = {
    width: "90vw", // Adjusted to 90% of the viewport width
    height: "550px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={containerStyles}>
        <Navbar className="nav-bar" slides={slides}></Navbar>
        <Home className="responsive" slides={slides}></Home>
      </div>
    </>
  );
}

export default App;
