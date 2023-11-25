import React from "react";
import pic5 from "../pic-3.jpg";
import "./styles.css";
const HIW = () => {
  const containerStyles = {
    height: "70vh", // Adjusted for full viewport height
    width: "90vh",
    background: `url(${pic5})`, // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black", // Adjust the text color
  };

  return (
    <>
      <div style={containerStyles}>
        <div>
          <h1 className="title1">Shree Hari's Interior Design Process</h1>
          <h3 className="title2">Easiest way to Build your Home</h3>
        </div>
      </div>
      <div className="process">
        <h4 className="process-title">STEP 1</h4>
      </div>
    </>
  );
};

export default HIW;
