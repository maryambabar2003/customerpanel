import React, { useRef, useEffect, useState } from "react";
import "../styles/ExploreHomes.css";

const ExploreHomes = () => {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle left scrolling
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  // Function to handle right scrolling
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const element = document.querySelector(".explore-homes-container");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
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
      <div className="explore-heading">
        <h2 className="explore-title">Explore homes on Heavenly</h2>
      </div>

      <div className="explore-homes-scroll-container">
        <button className="explore-scroll-button left" onClick={scrollLeft}>
          ←
        </button>
        <div className="explore-homes-grid-container" ref={scrollRef}>
          <div className="explore-homes-grid">
            {homes.map((home) => (
              <div key={home.id} className="explore-home-item">
                <img src={home.img} alt={home.location} className="explore-home-img" />
                <div className="explore-home-overlay">
                  <p className="explore-home-location">
                    <span className="explore-location-icon">📍</span>
                    {home.location}
                  </p>
                  <button className="explore-arrow-circle">›</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="explore-scroll-button right" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default ExploreHomes;