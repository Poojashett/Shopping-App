import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer" id="footer-section">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>SHOP4YOU</h2>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Shop4You - All Rights Reserved</p>
        </div>
        <div className="footer-social">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
