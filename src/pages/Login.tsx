import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Header1 from "./Header/Header1";
import Footer from "./Footer/Footer";

function Login() {
  return (
    <div className="login-page">
      <Header1 />
      <div className="login-content">
        <h3>Login</h3>
        <form className="form">
          <div className="form-styles">
            <h3>Username</h3>
            <input type="username"></input>
          </div>
          <div className="form-styles">
            <h3>Password</h3>
            <input type="password"></input>
          </div>
          <button type="submit">
            <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
              Submit
            </Link>
          </button>
          <p>
            Dont have and account?
            <span>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Register
              </Link>
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
