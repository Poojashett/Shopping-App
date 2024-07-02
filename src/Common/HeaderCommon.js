import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./HeaderCommon.css"; 

const HeaderCommon = ()=> {
  const [highlightNav, setHighlightNav] = useState("");

  const highlight = (navItem) => {
    setHighlightNav(navItem);
  };

  return (
    <header className="headercommon">
      <div className="headercommon-top">
        <h1>STYLE4YOU</h1>
        <nav>
          <ul className="headercommon-nav-menu">
            <li>
              <div
                className={highlightNav === "men" ? "highlighted" : ""}
                onClick={() => highlight("men")}
              >
                Menswear
              </div>
            </li>
            <li>
              <div
                className={highlightNav === "women" ? "highlighted" : ""}
                onClick={() => highlight("women")}
              >
                Womenswear
              </div>
            </li>
            <li>
              <div
                className={highlightNav === "electronic" ? "highlighted" : ""}
                onClick={() => highlight("electronic")}
              >
                Electronics
              </div>
            </li>
            <li>
              <div
                className={highlightNav === "jewelery" ? "highlighted" : ""}
                onClick={() => highlight("jewelery")}
              >
                Jewelery
              </div>
            </li>
          </ul>
        </nav>
        <div className="headercommon-flex">
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
    </header>
  );
}

export default HeaderCommon;
