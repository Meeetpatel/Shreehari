import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import pic1 from "./Pictures/pic-1.png";
import pic2 from "./Pictures/pic-2.jpg";
import pic3 from "./Pictures/pic-3.jpg";
import pic4 from "./Pictures/pic-4.jpg";
import pic5 from "./Pictures/pic-5.jpg";
import "./Components/styles.css";
import Footer from "./Components/Footer";

function App() {
  const slides = [
    { url: pic1, title: "1" },
    { url: pic2, title: "2" },
    { url: pic3, title: "3" },
    { url: pic4, title: "4" },
    { url: pic5, title: "5" },
  ];

  const containerStyles = {
    width: "98vw",

    margin: "0 auto",
    marginBottom: "10px",
  };
  const footerStyles = {
    marginTop: "auto",
  };
  return (
    <>
      <div style={containerStyles}>
        <Navbar className="nav-bar" slides={slides}></Navbar>

        <Home className="responsive" slides={slides}></Home>
      </div>

      <hr className="my-0" />
      <Footer style={footerStyles}></Footer>
    </>
  );
}

export default App;
