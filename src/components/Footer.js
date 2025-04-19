import React from "react";
import "../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faFacebookSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-bottom">
        <p>&copy; 2025 Ramki. All Rights Reserved.</p>
        <p className="made-with">Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> in India</p>
      </div>
    </footer>
  );
}

export default Footer;