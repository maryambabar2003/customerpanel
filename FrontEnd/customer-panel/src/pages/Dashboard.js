import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PopularSearches from "../components/PopularSearches";
import MainText from "../components/MainText";
import ExploreHomes from "../components/ExploreHomes"; // Import the ExploreHomes component
import HeavenlyHelp from "../components/HeavenlyHelp"; // Import the HeavenlyHelp component
import AdvertisementBanner from "../components/AdvertisementBanner";
import Footer from "../components/Footer"; // Adjust the path as needed


import "./Dashboard.css";

const Dashboard = () => {
    const [moveToTopLeft, setMoveToTopLeft] = useState(false); // Control video position
    const [showNavbar, setShowNavbar] = useState(false); // Control navbar visibility
    const [showBanner, setShowBanner] = useState(false); // Control banner visibility
    const [showPopularSearches, setShowPopularSearches] = useState(false);
    const [showMainText, setShowMainText] = useState(false); // Control main text visibility
    const [showExploreHomes, setShowExploreHomes] = useState(false); // Explore Homes visibility
    const [showHeavenlyHelp, setShowHeavenlyHelp] = useState(false); // HeavenlyHelp visibility
    const [showAdvertisementBanner, setShowAdvertisementBanner] = useState(false); // Advertisement Banner visibility


    // Handle the end of the video
 // Handle the end of the video
 const handleVideoEnd = () => {
  setTimeout(() => {
    setMoveToTopLeft(true); // Move video to top-left
    setTimeout(() => {
      setShowNavbar(true); // Show navbar
      setTimeout(() => {
        setShowBanner(true); // Show banner
        setTimeout(() => {
          setShowPopularSearches(true); // Show popular searches
          setTimeout(() => {
            setShowMainText(true); // Show main text
            setTimeout(() => {
              setShowExploreHomes(true); // Show explore homes
              setTimeout(() => {
                setShowHeavenlyHelp(true); // Show Heavenly Help
                setTimeout(() => {
                  setShowAdvertisementBanner(true); // Show Advertisement Banner
                }, 500); // Delay for Advertisement Banner animation
              }, 500); // Delay for HeavenlyHelp animation
            }, 500); // Delay for explore homes animation
          }, 500); // Delay for main text animation
        }, 500); // Delay for popular searches animation
      }, 500); // Delay banner appearance
    }, 500); // Delay navbar appearance
  }, 1000); // Delay for video transition
};

  return (
    <div className="dashboard">
      {/* Logo Animation */}
      <video
        src="/assets/Logo.mp4"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className={`logo-video ${moveToTopLeft ? "to-top-left" : ""}`}
      />

      {/* Navbar */}
      {showNavbar && <Navbar />}
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      {/* Banner */}
      {showBanner && (
        <>
          <Banner />
          <br></br>
          <br></br>

          <br></br>

          <PopularSearches />
        </>
      )}


      {/* Main Text */}
      {showMainText && <MainText />}

      {showExploreHomes && (
        <>
          <ExploreHomes />
          <br />
        </>
      )}

{showHeavenlyHelp && (
          <>
            <HeavenlyHelp />
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
