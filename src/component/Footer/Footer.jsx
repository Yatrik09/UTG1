import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation(); // Get current route
  if (location.pathname === "/login" || location.pathname === "/sign") {
    return null; // Don't render anything
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-title">About Us</h2>
          <p style={{ textAlign: "center" }} >
            Discover hidden gems and book expert guides to explore cities like
            never before.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/guide">Guide</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h2 className="footer-title">Contact Us</h2>
          <p style={{ textAlign: "center" }}>📧 support@localguide.com</p>
          <p style={{ textAlign: "center" }}>📞 +91 98765 43210</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons">
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                alt="Facebook"
              />
            </a>
            <a href="">
              <img
                src="https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png"
                alt="X"
              />
            </a>
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt="Instagram"
              />
            </a>
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Local Experience Finder | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
