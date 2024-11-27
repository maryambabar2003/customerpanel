import React, { useRef, useEffect, useState } from "react";
import "./ExploreHomes.css";

const ExploreHomes = () => {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle left scrolling
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth / 2, // Scroll by half the container width (two grid items)
      behavior: "smooth",
    });
  };

  // Function to handle right scrolling
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth / 2, // Scroll by half the container width (two grid items)
      behavior: "smooth",
    });
  };

  // Handling intersection observer for visibility animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    const element = document.querySelector(".explore-homes-container");
    if (element) {
      observer.observe(element); // Observe the container element
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Cleanup observer
      }
    };
  }, []);

  const homes = [
    { id: 1, location: "Philadelphia, PA", img: "/assets/image1.webp" },
    { id: 2, location: "Jurupa Valley, CA", img: "/assets/image1.webp" },
    { id: 3, location: "Anaheim, CA", img: "/assets/image1.webp" },
    { id: 4, location: "Aurora, CO", img: "/assets/image1.webp" },
    { id: 5, location: "Orlando, FL", img: "/assets/image1.webp" },
    { id: 6, location: "San Jose, CA", img: "/assets/image1.webp" },
  ];

  return (
    <div className={`explore-homes-container ${isVisible ? "visible" : ""}`}>
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
