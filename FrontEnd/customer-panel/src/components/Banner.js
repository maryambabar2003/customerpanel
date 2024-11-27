import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "./Banner.css";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false); // Control banner visibility
  const [showSearchBar, setShowSearchBar] = useState(false); // Control search bar visibility

  useEffect(() => {
    // Smooth animation for the banner and search bar
    const bannerTimer = setTimeout(() => {
      setShowBanner(true); // Show banner
      setTimeout(() => {
        setShowSearchBar(true); // Show search bar after banner appears
      }, 700); // Delay for search bar animation
    }, 500); // Delay for banner animation

    return () => clearTimeout(bannerTimer); // Cleanup timers
  }, []);

  return (
    <div className={`banner ${showBanner ? "visible" : ""}`}>
      <div className="banner-text">
        <h1>
          Find <span className="highlight">exclusive homes</span> that
          <br />
          fit your lifestyle
        </h1>
      </div>
      <div className="banner-images">
        
      </div>
      {/* Search Bar */}
      <div className={`search-bar-container ${showSearchBar ? "visible" : ""}`}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
