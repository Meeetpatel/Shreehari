import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Pictures/logo.png";
import phone from "../Pictures/phone.jpg";
import email from "../Pictures/email.jpg";
import instagram from "../Pictures/instagram.png";
import facebook from "../Pictures/facebook.png";
import "./styles.css";
const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "black", color: "white" }}
      className="footer text-center py-4"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 order-md-1 text-left order-2">
            <img src={phone} alt="phone" className="d-inline-block align-top" />
            <a
              style={{
                color: "white",
                marginLeft: "5%",
                textDecoration: "none",
              }}
              href="tel:+918758481541"
            >
              Phone: +91 875 848 1541
            </a>
          </div>

          <div className="col-md-6 order-md-2">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>

          <div className="col-md-3 order-md-3 text-right order-1">
            <img src={email} alt="Logo" className="d-inline-block align-top" />
            <a
              href="mailto: PatelRajesh5570@email.com"
              style={{
                color: "white",
                marginLeft: "5%",
                textDecoration: "none",
              }}
            >
              Email: PatelRajesh5570@email.com
            </a>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-4 text-left">
            <p>&copy; 2023 COPYRIGHT ALL RIGHTS RESERVED</p>
          </div>

          <div className="col-md-4 text-center">
            <a
              href="https://instagram.com/your_instagram_handle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                height="40"
                alt="phone"
                className="d-inline-block align-top"
              />
            </a>
            <a
              href="https://facebook.com/your_instagram_handle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                height="25"
                alt="phone"
                className="d-inline-block align-top"
              />
            </a>
          </div>
          <div className="col-md-4 text-right">
            <p>Web design by Meet Patel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
