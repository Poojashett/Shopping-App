import React, { useState, useRef } from "react";
import "./NewsLetter.css";
import EmailValidation from "../../Utils/validation/emailValidation";

const NewsLetter = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const subscribeButtonRef = useRef(null);

  const handleValidEmailChange = (isValid) => {
    setIsEmailValid(isValid);
  };

  const handleEmailInputChange = (email) => {
    setEmail(email);
    setIsSubscribed(false); // Reset subscription status when email input changes
  };

  const handleSubscribe = () => {
    if (isEmailValid) {
      setIsSubscribed(true);
    }
  };

  const getSubheadingText = () => {
    if (email === "") {
      return "Subscribe to our newsletter and stay updated";
    } else if (isSubscribed) {
      return "Subscription successful!";
    } else {
      return "Subscribe to our newsletter and stay updated";
    }
  };

  return (
    <div className="newsletter-section">
      <video className="background-video" autoPlay muted loop>
        <source
          src="https://videos.pexels.com/video-files/4913289/4913289-sd_640_360_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="heading">Get Exclusive Offers on Your Email</h1>
        <p className="subheading">{getSubheadingText()}</p>
        <div className="input-group">
          <EmailValidation
            onValidEmailChange={handleValidEmailChange}
            onEmailInputChange={handleEmailInputChange}
          />
          <button
            className="subscribe-button"
            ref={subscribeButtonRef}
            disabled={!isEmailValid}
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
