import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PopularSearches from "../components/PopularSearches";
import MainText from "../components/MainText";
import ExploreHomes from "../components/ExploreHomes"; // Import the ExploreHomes component
import FeaturedHomes from "../components/FeaturedHomes"; // Import the FeaturedHomes component
import HeavenlyHelp from "../components/HeavenlyHelp"; // Import the HeavenlyHelp component
import AdvertisementBanner from "../components/AdvertisementBanner";
import Footer from "../components/Footer"; // Adjust the path as needed

import "./Dashboard.css";

const Dashboard = () => {
  const [showBanner, setShowBanner] = useState(false); // Control banner visibility
  const [showPopularSearches, setShowPopularSearches] = useState(false); // Popular Searches visibility
  const [showMainText, setShowMainText] = useState(false); // Control main text visibility
  const [showExploreHomes, setShowExploreHomes] = useState(false); // Explore Homes visibility
  const [showFeaturedHomes, setShowFeaturedHomes] = useState(false); // Featured Homes visibility
  const [showHeavenlyHelp, setShowHeavenlyHelp] = useState(false); // HeavenlyHelp visibility
  const [showAdvertisementBanner, setShowAdvertisementBanner] = useState(false); // Advertisement Banner visibility

  // Handle the page load transition (for showing various components)
  const handlePageLoad = () => {
    setTimeout(() => {
      setShowBanner(true); // Show banner
      setTimeout(() => {
        setShowPopularSearches(true); // Show popular searches
        setTimeout(() => {
          setShowMainText(true); // Show main text
          setTimeout(() => {
            setShowExploreHomes(true); // Show explore homes
            setTimeout(() => {
              setShowFeaturedHomes(true); // Show Featured Homes
              setTimeout(() => {
                setShowHeavenlyHelp(true); // Show Heavenly Help
                setTimeout(() => {
                  setShowAdvertisementBanner(true); // Show Advertisement Banner
                }, 500); // Delay for Advertisement Banner animation
              }, 500); // Delay for HeavenlyHelp animation
            }, 500); // Delay for Featured Homes animation
          }, 500); // Delay for explore homes animation
        }, 500); // Delay for main text animation
      }, 500); // Delay for popular searches animation
    }, 1000); // Delay for page load transition
  };

  // Call handlePageLoad on component mount
  React.useEffect(() => {
    handlePageLoad();
  }, []);

  return (
    <div className="dashboard">

      {/* Banner */}
      {showBanner && (
        <>
          <Banner />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <PopularSearches />
        </>
      )}

      {/* Main Text */}
      {showMainText && <MainText />}

      {/* Explore Homes */}
      {showExploreHomes && (
        <>
          <ExploreHomes />
          <br />
        </>
      )}

      {/* Heavenly Help */}
      {showHeavenlyHelp && (
        <>
          <HeavenlyHelp />
          <br />
        </>
      )}

      {/* Featured Homes */}
      {showFeaturedHomes && (
        <>
          <FeaturedHomes />
          <br />
        </>
      )}

      {/* Advertisement Banner */}
      {showAdvertisementBanner && (
        <>
          <AdvertisementBanner />
          <br />
        </>
      )}
    </div>
  );
};

export default Dashboard;
