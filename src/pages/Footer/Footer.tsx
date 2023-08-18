import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LogoImage2 from "../../images/LogoImage2.png";
import FacebookIcon from "../../images/FacebookIcon.png";
import InstagramIcon from "../../images/InstagramIcon.png";
import TwitterIcon from "../../images/TwitterIcon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-primary">
        <div className="logo-footer">
          <img src={LogoImage2} alt="Logo Icon Footer" />
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <h3>FitMe</h3>
          </Link>
        </div>
        <div className="info-footer">
          <h5>About us</h5>
          <h5>Delivery</h5>
          <h5>Help & Support</h5>
          <h5>T&C</h5>
        </div>
        <div className="contact-footer">
          <h5>
            Contact: <span>+91 1234567899</span>
          </h5>
        </div>
      </div>
      <div className="footer-social-media">
        <img src={FacebookIcon} alt="Facebook Icon" />
        <img src={InstagramIcon} alt="Instagram Icon" />
        <img src={TwitterIcon} alt="Twitter Icon" />
      </div>
    </div>
  );
}

export default Footer;
