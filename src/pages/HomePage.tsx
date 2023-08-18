import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Header2 from "./Header/Header2";
import Footer from "./Footer/Footer";
import BananaImage from "../images/Banana.png";
import AppleImage from "../images/Apple.png";
import FoodIntro1 from "../images/FoodIntro1.png";
import FoodIntro2 from "../images/FoodIntro2.png";
import Restaurant1 from "../images/Restaurant1.png";
import Restaurant2 from "../images/Restaurant2.png";
import Restaurant3 from "../images/Restaurant3.png";
import Restaurant4 from "../images/Restaurant4.png";
import GreenStar from "../images/GreenStar.png";
import OrangeStar from "../images/OrangeStar.png";
import Timing from "../images/Timing.png";

function HomePage() {
  return (
    <div className="home-page">
      <Header2 />
      <div className="home-content">
        <div className="intro-content">
          <div className="intro-text">
            <div className="intro-title">
              <h1>
                Premium <span>quality</span>
              </h1>
              <h1>
                Food for your <img src={BananaImage} alt="Banana" />
                <span>healthy</span>
              </h1>
              <h1>
                <img src={AppleImage} alt="Apple" />
                <span>& Daily Life</span>
              </h1>
            </div>
            <div className="intro-paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="intro-images">
            <img src={FoodIntro1} className="food1" alt="Food" />
            <img src={FoodIntro2} className="food2" alt="Food" />
          </div>
        </div>
        <div className="restaurants-content">
          <h3>Restaurants</h3>
          <div className="restaurants">
            <div className="cards-row">
              <Link
                to="/restaurant"
                className="restaurant"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <img src={Restaurant1} alt="Restaurant Food" />
                <h3>Ramachandra Parlour</h3>
                <div className="info-avaliation">
                  <p>south indian</p>
                  <div className="avaliation">
                    <img src={GreenStar} alt="Green Star" />
                    <p>4.0</p>
                  </div>
                </div>
                <div className="timing">
                  <img src={Timing} alt="Time for food" />
                  <p>30 Mins</p>
                </div>
              </Link>
                <Link
                  to="/restaurant"
                  className="restaurant"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img src={Restaurant2} alt="Restaurant Food" />
                  <h3>Uma Parlour - Pure Vegetarian</h3>
                  <div className="info-avaliation">
                    <p>south indian</p>
                    <div className="avaliation">
                      <img src={OrangeStar} alt="Green Star" />
                      <p>3.2</p>
                    </div>
                  </div>
                  <div className="timing">
                    <img src={Timing} alt="Time for food" />
                    <p>20 Mins</p>
                  </div>
                </Link>
                <Link
                  to="/restaurant"
                  className="restaurant"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img src={Restaurant1} alt="Restaurant Food" />
                  <h3>Ramachandra Parlour</h3>
                  <div className="info-avaliation">
                    <p>south indian</p>
                    <div className="avaliation">
                      <img src={GreenStar} alt="Green Star" />
                      <p>4.0</p>
                    </div>
                  </div>
                  <div className="timing">
                    <img src={Timing} alt="Time for food" />
                    <p>30 Mins</p>
                  </div>
                </Link>
                <Link
                  to="/restaurant"
                  className="restaurant"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img src={Restaurant2} alt="Restaurant Food" />
                  <h3>Uma Parlour - Pure Vegetarian</h3>
                  <div className="info-avaliation">
                    <p>south indian</p>
                    <div className="avaliation">
                      <img src={OrangeStar} alt="Green Star" />
                      <p>3.2</p>
                    </div>
                  </div>
                  <div className="timing">
                    <img src={Timing} alt="Time for food" />
                    <p>20 Mins</p>
                  </div>
                </Link>
            </div>
            <div className="cards-row">
                <Link
                  to="/restaurant"
                  className="restaurant"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img src={Restaurant3} alt="Restaurant Food" />
                  <h3>Swap - Diet Meal Box</h3>
                  <div className="info-avaliation">
                    <p>south indian</p>
                    <div className="avaliation">
                      <img src={GreenStar} alt="Green Star" />
                      <p>4.5</p>
                    </div>
                  </div>
                  <div className="timing">
                    <img src={Timing} alt="Time for food" />
                    <p>40 Mins</p>
                  </div>
                </Link>
                <Link
                  to="/restaurant"
                  className="restaurant"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img src={Restaurant4} alt="Restaurant Food" />
                  <h3>The Good Bowl - Traditional Bowls</h3>
                  <div className="info-avaliation">
                    <p>south indian</p>
                    <div className="avaliation">
                      <img src={GreenStar} alt="Green Star" />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="timing">
                    <img src={Timing} alt="Time for food" />
                    <p>25 Mins</p>
                  </div>
                </Link>
                <Link
                  to="/restaurant"
                  className="restaurant"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img src={Restaurant3} alt="Restaurant Food" />
                  <h3>Swap - Diet Meal Box</h3>
                  <div className="info-avaliation">
                    <p>south indian</p>
                    <div className="avaliation">
                      <img src={GreenStar} alt="Green Star" />
                      <p>4.5</p>
                    </div>
                  </div>
                  <div className="timing">
                    <img src={Timing} alt="Time for food" />
                    <p>40 Mins</p>
                  </div>
                </Link>
                <Link
                  to="/restaurant"
                  className="restaurant"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img src={Restaurant4} alt="Restaurant Food" />
                  <h3>The Good Bowl - Traditional Bowls</h3>
                  <div className="info-avaliation">
                    <p>south indian</p>
                    <div className="avaliation">
                      <img src={GreenStar} alt="Green Star" />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="timing">
                    <img src={Timing} alt="Time for food" />
                    <p>25 Mins</p>
                  </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
