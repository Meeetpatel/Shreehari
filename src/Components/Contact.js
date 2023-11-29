import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactimage from "../Pictures/contactimage.jpg";
import logo from "../Pictures/logo.png";
import phone from "../Pictures/telephone.png";
import email from "../Pictures/email2.png";
import "./styles.css";
export default function Contact() {
  return (
    <>
      <div>
        <Container className="text-center ">
          <p className="contactheading">Contact Us Today to Book a Meeting</p>
        </Container>
        <hr className="my-0 mb-5 mt-5" />
        <Container className="mb-5" style={{ marginLeft: "10%" }}>
          <Row>
            <Col md={4}>
              <img
                src={contactimage}
                alt="Left Image"
                className="img-fluid contactlogo"
              />
            </Col>
            <Col md={8} className="contactInfo" style={{ textAlign: "center" }}>
              <img src={logo} alt="Logo" className="img-fluid contactlogo1" />

              <p className="locationtitle1">
                We are Based in Ahmedabad & Gandhinagar,Gujarat.
              </p>
              <div className="mb-3">
                <img
                  src={phone}
                  height="10%"
                  width="10%"
                  alt="Logo"
                  className="img-fluid"
                  style={{ textAlign: "left" }}
                />
                <a
                  href="tel:+918758481541"
                  style={{
                    textDecoration: "none",
                    fontSize: "29px",
                    color: "rgb(52, 45, 45)",
                    marginRight: "17%",
                    marginTop: "5%",
                  }}
                >
                  +91 875 848 1541
                </a>
              </div>
              <div>
                <img
                  src={email}
                  height="10%"
                  width="10%"
                  alt="Logo"
                  className="img-fluid"
                  style={{ textAlign: "left", paddingRight: "1%" }}
                />
                <a
                  href="mailto:PatelRajesh5570@gmail.com"
                  style={{
                    textDecoration: "none",
                    fontSize: "29px",
                    color: "rgb(52, 45, 45)",
                  }}
                >
                  PatelRajesh5570@gmail.com
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
