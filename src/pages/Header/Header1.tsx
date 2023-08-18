import React from "react";
import "./Header1.css";
import { Link } from "react-router-dom";
import LogoImage from "../../images/LogoImage.png";

function Header1() {
  return (
    <div className="header">
      <img src={LogoImage} alt="Logo Icon" />
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <h3>FitMe</h3>
      </Link>
    </div>
  );
}

export default Header1;
