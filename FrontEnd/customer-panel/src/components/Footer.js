import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Grey Box with Selectable Options */}
      <div className="footer-options">
        <div className="bubble-option">Popular Search</div>
        <div className="bubble-option">Real estate markets</div>
        <div className="bubble-option">Top-Picked Properties</div>
        <div className="bubble-option">Find city rental homes</div>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-divider" />

      {/* Information Section */}
      <div className="footer-info-grid">
        <div>
          <h4 className="info-heading">Near me</h4>
          <a href="/near-me" className="info-text">Houses for rent near me</a>
        </div>
        <div>
          <h4 className="info-heading">Owner</h4>
          <a href="/owner" className="info-text">Houses for rent near me by owner</a>
        </div>
        <div>
          <h4 className="info-heading">Affordable apartments</h4>
          <a href="/affordable-apartments" className="info-text">Cheap apartments for rent near me</a>
        </div>
        <div>
          <h4 className="info-heading">Land</h4>
          <a href="/land" className="info-text">Land for sale near me</a>
        </div>
        {/* Add similar links for other categories */}
      </div>

      {/* Second Horizontal Line */}
      <hr className="footer-divider" />

      {/* Signup Section */}
      <div className="footer-signup">
        <h2 className="signup-heading">The better way to buy and sell</h2>
        <p className="signup-subtext">Sign up to get the latest from Heavenly</p>
        <div className="signup-form">
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email..."
          />
          <button className="signup-button">Sign up</button>
        </div>
        <p className="contact-info">
          Call Us: <span>888-457-5478</span> <br />
          Email Us: <span>hallo@musemind.agency</span>
        </p>
      </div>

      {/* Links Section */}
      <div className="footer-links">
        <div>
          <h4 className="info-heading">Buy</h4>
          <a href="/buy" className="info-text">Buy</a>
          <a href="/exclusives" className="info-text">Exclusives</a>
        </div>
        <div>
          <h4 className="info-heading">Sell</h4>
          <a href="/request-offer" className="info-text">Request an offer</a>
          <a href="/reviews" className="info-text">Reviews</a>
          <a href="/customer-stories" className="info-text">Customer stories</a>
        </div>
        <div>
          <h4 className="info-heading">Agents</h4>
          <a href="/make-offer" className="info-text">Make an offer</a>
          <a href="/request-offer" className="info-text">Request an offer</a>
        </div>
        <div>
          <h4 className="info-heading">About</h4>
          <a href="/company" className="info-text">Company</a>
          <a href="/careers" className="info-text">Careers</a>
          <a href="/contact" className="info-text">Contact</a>
          <a href="/investors" className="info-text">Investors</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
