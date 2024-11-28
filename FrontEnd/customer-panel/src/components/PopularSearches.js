import React, { useRef, useEffect } from "react";
import "../styles/PopularSearches.css";

const PopularSearches = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    // Adding the animation on component load
    const container = document.querySelector('.popular-searches');
    container.classList.add('slide-in');
  }, []);

  return (
    <div className="popular-searches">
      <h2 className="section-title">Popular Search</h2>
      <div className="search-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          ←
        </button>
        <div className="search-scroll" ref={scrollRef}>
          <div className="bubble">Jersey City</div>
          <div className="bubble">Journal Square</div>
          <div className="bubble">Hoboken</div>
          <div className="bubble">Bryant Park</div>
          <div className="bubble">Tribeca</div>
          <div className="bubble">Dumbo</div>
          <div className="bubble">Kumbo</div>
          <div className="bubble">Jersey City</div>
          <div className="bubble">Journal Square</div>
          <div className="bubble">Hoboken</div>
          <div className="bubble">Bryant Park</div>
          <div className="bubble">Tribeca</div>
          <div className="bubble">Dumbo</div>
          <div className="bubble">Kumbo</div>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default PopularSearches;
