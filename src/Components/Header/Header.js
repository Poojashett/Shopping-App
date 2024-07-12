import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LoginForm from "../../Utils/Auth/LoginForm";
import SignUpForm from "../../Utils/Auth/SignUpForm";
import Modal from "../../Utils/Modal/Modal";

const Header = ({ scrollToNewCollection, scrollToFooter }) => {
  const [highlightNav, setHighlightNav] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const highlight = (category) => {
    setHighlightNav(category);
  };

  const openModal = (login = true) => {
    setIsLogin(login);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleContactClick = () => {
    scrollToFooter();
  };

  return (
    <header className="header">
      <div className="background-video">
        <video autoPlay muted loop>
          <source
            src="https://videos.pexels.com/video-files/8322527/8322527-sd_960_506_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="header-overlay"></div>
      </div>
      <div className="header-content">
        <div className="header-top">
          <h1>STYLE4YOU</h1>
          <div className="flex">
            <div onClick={() => openModal(true)}>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </div>
          </div>
        </div>
        <nav>
          <ul>
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
            <li>
              <div
                className={highlightNav === "contact" ? "highlighted" : ""}
                onClick={handleContactClick}
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </div>
            </li>
          </ul>
        </nav>
        <p>GRAND GLOBAL BRANDS</p>
        <button onClick={scrollToNewCollection}>Explore</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <div className="switch-auth">
          <span onClick={() => openModal(!isLogin)}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </span>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
