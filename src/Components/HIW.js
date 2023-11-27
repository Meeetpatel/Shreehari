import React from "react";
import bg1 from "../bg1.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import before from "../Before.jpg";
import after from "../After.jpg";
import bedroom from "../bedroom.jpg";
import bg3 from "../bg3.jpg";
import bg4 from "../bg4.jpg";
import bg5 from "../bg5.jpg";
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

const HIW = () => {
  const containerStyles = {
    height: "70vh",
    width: "100%",
    background: `url(${bg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center content vertically
    color: "#3e4444",
    zIndex: "-1",
  };

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <>
      <div style={containerStyles}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <h3 className="title1">Shree Hari's Interior Design Process</h3>
              <h3 className="title2">Easiest way to Build your Home</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="process1">
        <Row>
          <Col xs={12} md={6}>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <img className="w-100" src={before} alt="before" />
                </div>
                <div className="embla__slide">
                  <img className="w-100" src={after} alt="after" />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div>
              <h1 className="process-title">STEP 1</h1>
              <p className="process-description fs-1 fs-md-2">
                "Contact Us to schedule a Meeting With us in person."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="process1">
        <Row>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <div>
              <h1 className="process-title">STEP 2</h1>
              <p className="process-description fs-1 fs-md-2">
                "Tell us all about your dream home. We’ll get to work on
                bringing it to life."
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="order-1 order-md-2">
            <img className="w-100" src={bedroom} alt="img" />
          </Col>
        </Row>
      </Container>
      <Container className="process1">
        <Row>
          <Col xs={12} md={6}>
            <img className="w-100" src={bg3} alt="img" />
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div>
              <h1 className="process-title">STEP 3</h1>
              <p className="process-description fs-1 fs-md-2">
                "Get an estimated Quote for your Residential or Work Space."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="process1">
        <Row>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <div>
              <h1 className="process-title">STEP 4</h1>
              <p className="process-description fs-1 fs-md-2">
                "We will blow your mind with inspo and ideas for transforming
                your space."
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="order-1 order-md-2">
            <img className="w-100" src={bg4} alt="img" />
          </Col>
        </Row>
      </Container>
      <Container className="process1">
        <Row>
          <Col xs={12} md={6}>
            <img className="w-100" src={bg5} alt="img" />
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div>
              <h1 className="process-title">STEP 5</h1>
              <p
                className="process-description fs-1 fs-md-2"
                style={{ marginBottom: "50%" }}
              >
                "Tell us which design ideas you vibe with, and we’ll add all the
                beautiful finishing touches."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HIW;
