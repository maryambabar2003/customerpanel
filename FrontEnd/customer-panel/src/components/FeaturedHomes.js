import React, { useRef, useEffect, useState } from "react";
import "../styles/FeaturedHomes.css";

const FeaturedHomes = () => {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth / 3,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth / 3,
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
      { threshold: 0.5 }
    );

    const element = document.querySelector(".featured-homes-container");
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
    {
      id: 1,
      location: "Philadelphia, PA",
      img: "/assets/image1.webp",
      price: "Rs.23,000",
    },
    {
      id: 2,
      location: "Jurupa Valley, CA",
      img: "/assets/image1.webp",
      price: "Rs.25,000",
    },
    {
      id: 3,
      location: "Anaheim, CA",
      img: "/assets/image1.webp",
      price: "Rs.22,000",
    },
    // More items can be added as needed
  ];

  return (
    <div className={`featured-homes-container ${isVisible ? "visible" : ""}`}>
      <div className="featured-heading">
        <h2 className="featured-title">Featured homes for rent</h2>
      </div>

      <div className="featured-homes-scroll-container">
        <button className="featured-scroll-button left" onClick={scrollLeft}>
          ←
        </button>
        <div className="featured-homes-grid-container" ref={scrollRef}>
          <div className="featured-homes-grid">
            {homes.map((home) => (
              <div key={home.id} className="featured-home-item">
                <img src={home.img} alt={home.location} className="featured-home-img" />
                <div className="featured-home-overlay">
                  <p className="featured-home-location">
                    <span className="featured-location-icon">📍</span>
                    {home.location}
                  </p>
                  <p className="featured-home-price">{home.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="featured-scroll-button right" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default FeaturedHomes;