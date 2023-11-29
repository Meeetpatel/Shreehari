import React from "react";
import { Link } from "react-router-dom";
import about from "../Pictures/about.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
export default function About() {
  return (
    <>
      <div
        style={{
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom: "5%",
          backgroundColor: "#FDFBF7",
          padding: "3%",
        }}
      >
        <div className="container-fluid">
          <h3 className="mb-5 order-md-1 aboutHead">ABOUT RAJESH PATEL</h3>

          <div className="row  justify-content-center">
            <div className="col-md-4">
              <img
                src={about}
                alt="About"
                className="img-fluid rp"
                style={{ width: "55vh", height: "70vh" }}
              />
            </div>

            <div className="col-md-5 text-center ">
              <p className="aboutRP" style={{ fontWeight: "500" }}>
                Hi, I'm Rajesh Patel, the creative mind behind Shree Hari
                Interior Designs. My journey into the world of interior design
                began <strong>in 2008 </strong>when I decided to transform my
                own home. Witnessing the beauty and impact of the interior
                changes in my own space, I started receiving invitations to work
                on my friends' houses.
              </p>
              <p className="aboutRP">
                What started as a personal passion quickly evolved into a
                flourishing business. Shree Hari Interior Designs has now been
                bringing creative and functional design solutions to homes,
                apartments, offices, and workspaces for{" "}
                <strong>more than 15 years</strong> . With a keen eye for detail
                and a commitment to excellence, I have had the privilege of
                designing <strong>over 150 unique and inspiring spaces</strong>.
              </p>
              <p className="aboutRP">
                Over the years, Shree Hari Interior Designs has become
                synonymous with transforming spaces into personalized works of
                art. Each design is crafted with precision, reflecting the
                individuality and lifestyle of the clients. I take pride in
                creating spaces that not only look stunning but also enhance the
                quality of life for those who inhabit them.
              </p>
            </div>

            <div className="col-md-3 d-flex flex-column align-items-center">
              <Link to="/HIW" className="mb-5 aboutbtn">
                HOW IT WORKS
              </Link>
              <Link to="/Gallery" className="mb-5 aboutbtn">
                GALLERY
              </Link>
              <Link to="/Contact" className="aboutbtn">
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="row mt-4">
            <p className="aboutRP ">
              Whether it's a cozy home, a modern apartment, a dynamic office, or
              a collaborative workspace, Shree Hari Interior Designs is
              dedicated to <strong>bringing your vision to life</strong>. Join
              me on this design journey, and let's create spaces that tell your
              unique story.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
