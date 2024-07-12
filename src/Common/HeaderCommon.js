import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./HeaderCommon.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderCommon = () => {
  const [highlightNav, setHighlightNav] = useState("");
  const bagCount = useSelector((state) => state.cart.totalCount);
  // const cartItems = useSelector((store) => store.cart.items);

  const highlight = (navItem) => {
    setHighlightNav(navItem);
  };

  return (
    <header className="headercommon">
      <div className="headercommon-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>STYLE4YOU</h1>
        </Link>
        <nav>
          <ul className="headercommon-nav-menu">
            <li>
              <Link
                to="/product-list/men's clothing"
                style={{ textDecoration: "none" }}
              >
                <div
                  className={highlightNav === "men" ? "highlighted" : ""}
                  onClick={() => highlight("men")}
                >
                  Menswear
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/product-list/women's clothing"
                style={{ textDecoration: "none" }}
              >
                <div
                  className={highlightNav === "women" ? "highlighted" : ""}
                  onClick={() => highlight("women")}
                >
                  Womenswear
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/product-list/electronics"
                style={{ textDecoration: "none" }}
              >
                <div
                  className={
                    highlightNav === "electronics" ? "highlighted" : ""
                  }
                  onClick={() => highlight("electronics")}
                >
                  Electronics
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/product-list/jewelery"
                style={{ textDecoration: "none" }}
              >
                <div
                  className={highlightNav === "jewelery" ? "highlighted" : ""}
                  onClick={() => highlight("jewelry")}
                >
                  Jewelry
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="headercommon-flex">
          {/* <div>
            <i className="fas fa-user"></i> Profile
          </div>
          <div>
            <i className="far fa-heart"></i> Wishlist
          </div> */}
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <div className="bag-container">
              <FontAwesomeIcon icon={faShoppingBag} />
              <span className="bag-count">{bagCount}</span>
              Bag
            </div>
          </Link>
          <div>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCommon;
