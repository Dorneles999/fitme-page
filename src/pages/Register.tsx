import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Header1 from "./Header/Header1";
import Footer from "./Footer/Footer";

function Register() {
  return (
    <div className="register-page">
      <Header1 />
      <div className="register-content">
        <h3>Register</h3>
        <p>Please Fill out form to Register!</p>
        <form className="form">
          <div className="form-styles">
            <h3>Full name</h3>
            <input type="text"></input>
          </div>
          <div className="form-styles">
            <h3>Username</h3>
            <input type="text"></input>
          </div>
          <div className="form-styles">
            <h3>E-mail</h3>
            <input type="email"></input>
          </div>
          <div className="form-styles">
            <h3>Password</h3>
            <input type="password"></input>
          </div>
          <div className="form-styles">
            <h3>Confirm password</h3>
            <input type="password"></input>
          </div>
          <button type="submit">
            <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
              Register
            </Link>
          </button>
          <p>
            Yes i have an account?
            <span>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Login
              </Link>
            </span>
          </p>
        </form>
        h
      </div>
      <Footer />
    </div>
  );
}

export default Register;
