import React from "react";
import "./Header2.css";
import { Link } from "react-router-dom";
import LogoImage from "../../images/LogoImage.png";
import Bag from "../../images/Bag.png";

function Header2() {
  return (
    <div className="header">
      <img src={LogoImage} alt="Logo Icon" />
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <h3>FitMe</h3>
      </Link>
      <div className="section-bar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter item or restaurant you are looking for"
          />
        </div>
        <img src={Bag} alt="Bag Icon" />
        <button type="submit">
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Sign In
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header2;
