import React from "react";
import bg1 from "../Pictures/bg1.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import before from "../Pictures/Before.jpg";
import after from "../Pictures/After.jpg";
import bedroom from "../Pictures/bedroom.jpg";
import bg3 from "../Pictures/bg3.jpg";
import bg4 from "../Pictures/bg4.jpg";
import bg5 from "../Pictures/bg5.jpeg";
import { Container, Row, Col } from "react-bootstrap";

const HIW = () => {
  const containerStyles = {
    height: "70vh",
    width: "100%",
    background: `url(${bg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#3e4444",
    zIndex: "-1",
  };

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <>
      <div style={containerStyles}>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <h3 className="title1">Shree Hari's Interior Design Process</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="process1">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <img className="w-100  image" src={before} alt="before" />
                </div>
                <div className="embla__slide">
                  <img className="w-100  image" src={after} alt="after" />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div>
              <h1 className="process-title fs-3 fs-md-3">STEP 1</h1>
              <p className="process-description fs-1 fs-md-2">
                "Contact Us to schedule a Meeting With us in person."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="process1">
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            className="order-2 order-md-1 d-flex align-items-center"
          >
            <div>
              <h1 className="process-title fs-3 fs-md-3">STEP 2</h1>
              <p className="process-description fs-1 fs-md-2">
                "Tell us all about your dream home. We’ll get to work on
                bringing it to life."
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="order-1 order-md-2">
            <img className="w-100  image" src={bedroom} alt="img" />
          </Col>
        </Row>
      </Container>
      <Container className="process1">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img className="w-100  image" src={bg3} alt="img" />
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div>
              <h1 className="process-title fs-3 fs-md-3">STEP 3</h1>
              <p className="process-description fs-1 fs-md-2">
                "Get an estimated Quote for your Residential or Work Space."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="process1">
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            className="order-2 order-md-1 d-flex align-items-center"
          >
            <div>
              <h1 className="process-title fs-3 fs-md-3">STEP 4</h1>
              <p className="process-description fs-1 fs-md-2">
                "We will blow your mind with inspo and ideas for transforming
                your space."
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="order-1 order-md-2">
            <img className="w-100  image" src={bg4} alt="img" />
          </Col>
        </Row>
      </Container>
      <Container className="process1">
        <Row className="align-items-center" style={{ marginBottom: "10%" }}>
          <Col xs={12} md={6}>
            <img className="w-100  image" src={bg5} alt="img" />
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div>
              <h1 className="process-title fs-3 fs-md-3">STEP 5</h1>
              <p className="process-description fs-1 fs-md-2">
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
