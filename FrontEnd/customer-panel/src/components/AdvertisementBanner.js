import React from "react";
import "./AdvertisementBanner.css";

const AdvertisementBanner = () => {
  return (
    <div className="advertisement-banner">
      {/* Left Side */}
      <div className="banner-left">
        <h1 className="banner-logo">
          <span className="highlight">H</span>eavenly - a rewards program
        </h1>
        <h2 className="banner-heading">
          Earn up to<br />
          <span className="highlight">2% cash back</span> by<br />
          <span className="highlight">booking</span> early.
        </h2>
        <p className="banner-subtext">
          Earn up to 2% cash back on the exclusive offers by booking early in Heavenly.
        </p>
        <button className="banner-button">Explore offers</button>
      </div>

      {/* Right Side */}
      <div className="banner-right">
        <div className="stacked-images">
          <div className="stacked-image image-one">
            <img src="/assets/image1.webp" alt="Efficient homes" />
            <p>Efficient homes for people on-the-go</p>
          </div>
          <div className="stacked-image image-two">
            <img src="/assets/image1.webp" alt="Exceptional villa" />
            <p>Exceptional villa with first-class</p>
          </div>
          <div className="stacked-image image-three">
            <img src="/assets/image1.webp" alt="Independent dwelling" />
            <p>Enjoy independent dwelling units at affordable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBanner;
