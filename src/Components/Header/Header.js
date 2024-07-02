import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [highlightNav, sethighlightNav] = useState();

  const highlight = (category) => {
    sethighlightNav(category);
  };

  return (
    <header className="header">
      <div className="header-top">
        <h1>STYLE4YOU</h1>
        <div className="flex">
          <div>
            <i className="fas fa-user"></i> Profile
          </div>
          <div>
            <i className="far fa-heart"></i> Wishlist
          </div>
          <div>
            <i className="fas fa-shopping-bag"></i> Bag
          </div>
          <div>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/product-list" style={{textDecoration:"none"}}>
              <div
                className={highlightNav === "men" ? "highlighted" : ""}
                onClick={() => highlight("men")}
              >
                Menswear
              </div>
            </Link>
          </li>
          <li>
            <Link to="/product-list" style={{textDecoration:"none"}}>
              <div
                className={highlightNav === "women" ? "highlighted" : ""}
                onClick={() => highlight("women")}
              >
                Womenswear
              </div>
            </Link>
          </li>
          <li>
            <Link to="/product-list" style={{textDecoration:"none"}}>
              <div
                className={highlightNav === "electronic" ? "highlighted" : ""}
                onClick={() => highlight("electronic")}
              >
                Electronics
              </div>
            </Link>
          </li>
          <li>
            <Link to="/product-list" style={{textDecoration:"none"}}>
              <div
                className={highlightNav === "jewelery" ? "highlighted" : ""}
                onClick={() => highlight("jewelery")}
              >
                Jewelery
              </div>
            </Link>
          </li>
          <li>
            <Link to="/product-list" style={{textDecoration:"none"}}>
              <div
                className={highlightNav === "about" ? "highlighted" : ""}
                onClick={() => highlight("about")}
              >
                About Us
              </div>
            </Link>
          </li>
          <li>
            <Link to="/product-list" style={{textDecoration:"none"}}>
              <div
                className={highlightNav === "contact" ? "highlighted" : ""}
                onClick={() => highlight("contact")}
              >
                Contact Us
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <p>GRAND GLOBAL BRANDS</p>
      <button>Explore</button>
    </header>
  );
};

export default Header;
