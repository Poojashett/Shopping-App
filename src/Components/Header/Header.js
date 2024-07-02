import React from "react";
import "./Header.css";

const Header = () => {
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
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <div>Menswear</div>
          </li>
          <li>
            <div>Womenswear</div>
          </li>
          <li>
            <div>Kids</div>
          </li>
          <li>
            <div>Accessories</div>
          </li>
          <li>
            <div>About Us</div>
          </li>
          <li>
            <div>Contact Us</div>
          </li>
        </ul>
      </nav>
      <p>GRAND GLOBAL BRANDS</p>
      <button>Explore</button>
    </header>
  );
};

export default Header;
