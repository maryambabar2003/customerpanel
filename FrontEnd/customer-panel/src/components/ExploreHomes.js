import React, { useRef } from "react";
import "./ExploreHomes.css";

const ExploreHomes = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" }); // Scroll by two grid items (adjust as needed)
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" }); // Scroll by two grid items (adjust as needed)
  };

  const homes = [
    { id: 1, location: "Philadelphia, PA", img: "/assets/image1.webp" },
    { id: 2, location: "Jurupa Valley, CA", img: "/assets/image1.webp" },
    { id: 3, location: "Anaheim, CA", img: "/assets/image1.webp" },
    { id: 4, location: "Aurora, CO", img: "/assets/image1.webp" },
    { id: 5, location: "Orlando, FL", img: "/assets/image1.webp" },
    { id: 6, location: "San Jose, CA", img: "/assets/image1.webp" },
  ];

  return (
    <div className="explore-homes-container">
      {/* Header */}
      <div className="explore-heading">
        <h2 className="explore-title">Explore homes on Heavenly</h2>
      </div>

      {/* Homes Grid with Arrows */}
      <div className="homes-scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          ←
        </button>
        <div className="homes-grid-container" ref={scrollRef}>
          <div className="homes-grid">
            {homes.map((home) => (
              <div key={home.id} className="home-item">
                <img src={home.img} alt={home.location} className="home-img" />
                <div className="home-overlay">
                  <p className="home-location">
                    <span className="location-icon">📍</span>
                    {home.location}
                  </p>
                  <button className="arrow-circle">›</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default ExploreHomes;
