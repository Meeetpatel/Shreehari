import React from "react";
import { Link } from "react-router-dom";
import about from "../Pictures/about.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  const About = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  };
  return (
    <>
      <div className="container-fluid">
        <h2 className="mb-5 order-md-1 aboutHead">ABOUT RAJESH PATEL</h2>
        <div className="text-center">
          <hr
            className="mb-5 mx-auto"
            style={{ borderTop: "1px solid #333", width: "60%" }}
          />
        </div>

        <img
          src={about}
          alt="About"
          className="img-fluid mx-auto d-block mb-5 "
          style={{ width: "55vh", height: "70vh" }}
        />

        <div>
          <p
            data-aos="fade-up"
            className="aboutRP"
            style={{ fontWeight: "500" }}
          >
            Hi, I'm Rajesh Patel, the creative mind behind Shree Hari Interior
            Designs. My journey into the world of interior design began{" "}
            <strong style={{ color: "#FB4D30" }}>in 2008 </strong>when I decided
            to transform my own home. Witnessing the beauty and impact of the
            interior changes in my own space, I started receiving invitations to
            work on my friends' houses.
          </p>
          <p data-aos="fade-right" className="aboutRP">
            What started as a personal passion quickly evolved into a
            flourishing business. Shree Hari Interior Designs has now been
            bringing creative and functional design solutions to homes,
            apartments, offices, and workspaces for{" "}
            <strong style={{ color: "#FB4D30" }}>more than 15 years</strong> .
            With a keen eye for detail and a commitment to excellence, I have
            had the privilege of designing{" "}
            <strong style={{ color: "#FB4D30" }}>
              over 150 unique and inspiring spaces
            </strong>
            .
          </p>
          <p data-aos="fade-left" className="aboutRP">
            Over the years, Shree Hari Interior Designs has become synonymous
            with transforming spaces into personalized works of art. Each design
            is crafted with precision, reflecting the individuality and
            lifestyle of the clients. I take pride in creating spaces that not
            only look stunning but also enhance the quality of life for those
            who inhabit them.
          </p>
          <p data-aos="fade-right" className="aboutRP d-md-none">
            Whether it's a cozy home, a modern apartment, a dynamic office, or a
            collaborative workspace, Shree Hari Interior Designs is dedicated to{" "}
            <strong style={{ color: "#FB4D30" }}>
              bringing your vision to life
            </strong>
            . Join me on this design journey, and let's create spaces that tell
            your unique story.
          </p>
        </div>

        <p data-aos="fade-left" className="aboutRP">
          Whether it's a cozy home, a modern apartment, a dynamic office, or a
          collaborative workspace, Shree Hari Interior Designs is dedicated to{" "}
          <strong style={{ color: "#FB4D30" }}>
            bringing your vision to life
          </strong>
          . Join me on this design journey, and let's create spaces that tell
          your unique story.
        </p>

        <div
          data-aos="fade-down"
          className="d-flex flex-column flex-md-row justify-content-center align-items-center"
        >
          <Link to="/HIW" className="mb-3 mr-md-3 aboutbtn">
            HOW IT WORKS
          </Link>
          <Link to="/Gallery" className="mb-3 mr-md-3 aboutbtn">
            GALLERY
          </Link>
          <Link to="/Contact" className="mb-3 aboutbtn">
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}
