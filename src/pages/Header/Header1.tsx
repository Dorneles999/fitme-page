import React from "react";
import "./Header1.css";
import { Link } from "react-router-dom";
import LogoImage from "../../images/LogoImage.png";

function Header1() {
  return (
    <div className="header">
      <div className="logo">
        <img src={LogoImage} alt="Logo Icon" />
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          <h3 className="title">FitMe</h3>
        </Link>
      </div>
      <div className="invisible-bar"></div>
    </div>
  );
}

export default Header1;
