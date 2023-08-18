import React from "react";
import "./RestaurantPage.css";
import Header2 from "./Header/Header2";
import Footer from "./Footer/Footer";
import RestaurantImage from "../images/RestaurantImage.png";
import GreenStar from "../images/GreenStar.png";
import Line from "../images/Line.png";
import PercentIcon from "../images/PercentIcon.png";
import Line2 from "../images/Line2.png";
import ItemImage from "../images/ItemImage.png";

function RestaurantPage() {
  return (
    <div className="restaurant-page">
      <Header2 />
      <div className="restaurant-content">
        <div className="restaurant-info">
          <div className="restaurant-details">
            <img src={RestaurantImage} alt="Restaurant Food" />
            <div className="restaurant-description">
              <h3>LunchBox - Meals and Thalis</h3>
              <p>North Indian, Punjabi</p>
              <div className="infos">
                <div className="details">
                  <div className="avaliation-detail">
                    <img src={GreenStar} alt="Green Star" />
                    <p>4.0</p>
                  </div>
                  <p>100+ ratings</p>
                </div>
                <img src={Line} alt="Line" />
                <div className="details">
                  <p>30 Mins</p>
                  <p>Delivery Time</p>
                </div>
                <img src={Line} alt="Line" />
                <div className="details">
                  <p>₹200</p>
                  <p>Cost for two</p>
                </div>
              </div>
            </div>
          </div>
          <div className="restaurant-offers">
            <h3>Offers</h3>
            <div className="offer">
              <div className="descount">
                <img src={PercentIcon} alt="Percentage Icon" />
                <p>50% off up to ₹100 | Use code TRYNEW</p>
              </div>
              <div className="descount">
                <img src={PercentIcon} alt="Percentage Icon" />
                <p>20% off | Use code PARTY</p>
              </div>
            </div>
          </div>
        </div>
        <div className="restaurant-item">
          <div className="item-recommended">
            <p>Recommended</p>
            <p>Breakfast Box</p>
            <p>Lunch Box</p>
            <p>Combo Box</p>
            <p>Biriyani Box</p>
          </div>
          <img src={Line2} alt="Line" />
          <div className="item-content">
            <div className="item-description">
              <h3>Brunch for 2 - Veg (Save upto Rs.45)</h3>
              <p>₹599</p>
              <p>
                Brunch: One meal to rule them all! Grab this mega saver combo
                with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and
                Curd lunchbox and 2 choco lava cakes. This is just bliss on a
                plate!
              </p>
            </div>
            <div className="item-image">
              <img src={ItemImage} alt="Item" />
              <button>Add +</button>
            </div>
          </div>
          <div className="item-cart">
            <div className="cart-info">
              <p>Cart</p>
              <p>2 Items</p>
            </div>
            <div className="itens-info">
              <div className="item">
                <p>
                  from <span>Lunch box</span>
                </p>
                <div className="cart-item">
                  <div className="info-item">
                    <p>Brunch for 2 - Veg</p>
                    <p>₹599</p>
                  </div>
                  <div className="quantity-item">
                    <p>
                      -<span>1</span>+
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <p>
                  from <span>Fasso</span>
                </p>
                <div className="cart-item">
                  <div className="info-item">
                    <p>Paneer Signature Rice Bowl (Regular)</p>
                    <p>₹200</p>
                  </div>
                  <div className="quantity-item">
                    <p>
                      -<span>1</span>+
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="price-info">
              <div className="price">
                <p>Subtotal</p>
                <p>₹799</p>
              </div>
              <p>Extra charges may apply</p>
            </div>
            <button type="submit">Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RestaurantPage;
