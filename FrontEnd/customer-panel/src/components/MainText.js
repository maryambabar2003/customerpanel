import React, { useEffect, useState } from "react";
import "./MainText.css";

const MainText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Add class when the component enters the viewport
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    const element = document.querySelector(".main-text");
    if (element) {
      observer.observe(element); // Start observing the element
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className={`main-text ${isVisible ? "visible" : ""}`}>
      <p>
        Navigate the <span className="icon">🌍</span> real estate landscape with <br />
        confidence and discover a seamless <span className="icon">🏠</span> home <br />
        hunting experience using our <span className="icon">🏢</span> exclusive services.
      </p>
    </div>
  );
};

export default MainText;
