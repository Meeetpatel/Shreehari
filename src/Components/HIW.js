import React from "react";
import bg1 from "../bg1.jpeg";
import "./styles.css";
import useEmblaCarousel from "embla-carousel-react";
import before from "../Before.jpg";
import after from "../After.jpg";
import Autoplay from "embla-carousel-autoplay";
import bedroom from "../bedroom.jpg";
import bg3 from "../bg3.jpg";
import bg4 from "../bg4.jpg";
import bg5 from "../bg5.jpg";
const HIW = () => {
  const containerStyles = {
    height: "100vh", // Adjusted for full viewport height
    width: "100%",
    border: " 2px solid #F0F8FF ",
    background: `url(${bg1})`, // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black", // Adjust the text color
  };

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <>
      <div style={containerStyles}>
        <div>
          <h1 className="title1">Shree Hari's Interior Design Process</h1>
          <h3 className="title2">Easiest way to Build your Home</h3>
        </div>
      </div>
      <div className="process1">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img
                src={before}
                border=" 2px solid #F0F8FF "
                width="50%"
                height="90%"
                alt="before"
              />
            </div>
            <div className="embla__slide">
              <img
                src={after}
                border=" 2px solid #F0F8FF "
                width="50%"
                height="90%"
                alt="after"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="process-title">STEP 1</h1>
          <h1 className="process-description">
            Contact Us to schedule a Meeting With us in person.
          </h1>
        </div>
      </div>
      <div className="process">
        <div>
          <h1 className="process-title">STEP 2</h1>
          <h1 className="process-description">
            Tell us all about your dream home. We’ll get to work on bringing it
            to life.
          </h1>
        </div>
        <img
          width="40%"
          border=" 2px solid #F0F8FF "
          height="50%"
          src={bedroom}
          alt="img"
        />
      </div>
      <div className="process">
        <img
          width="40%"
          border=" 2px solid #F0F8FF "
          height="50%"
          src={bg3}
          alt="img"
        />
        <div>
          <h1 className="process-title">STEP 3</h1>
          <h1 className="process-description">
            Get an estimated Quote for your Residential or Work Space.
          </h1>
        </div>
      </div>
      <div className="process">
        <div>
          <h1 className="process-title">STEP 4</h1>
          <h1 className="process-description">
            We will blow your mind with inspo and ideas for transforming your
            space.
          </h1>
        </div>
        <img
          width="40%"
          border=" 2px solid #F0F8FF "
          height="50%"
          src={bg4}
          alt="img"
        />
      </div>
      <div className="process">
        <img
          width="40%"
          border=" 2px solid #F0F8FF "
          height="50%"
          src={bg5}
          alt="img"
        />
        <div>
          <h1 className="process-title">STEP 5</h1>
          <h1 className="process-description">
            Tell us which design ideas you vibe with, and we’ll add all the
            beautiful finishing touches.
          </h1>
        </div>
      </div>
    </>
  );
};

export default HIW;
