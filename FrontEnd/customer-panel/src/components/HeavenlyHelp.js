import React from "react";
import "./HeavenlyHelp.css";

const HeavenlyHelp = () => {
  return (
    <div className="heavenly-help-container">
      {/* Main Heading */}
      <h2 className="help-heading">See how Heavenly can help</h2>

      {/* Four Columns */}
      <div className="help-columns">
        {/* First Column */}
        <div className="help-column" style={{ backgroundColor: "#FF7F65" }}>
          <h3 className="help-title">Buy a home</h3>
          <p className="help-text">
            In today’s competitive market, buying a home requires careful planning.
          </p>
          <img src="/assets/Image1.png" alt="Buy a home" className="help-image" />
        </div>

        {/* Second Column */}
        <div className="help-column" style={{ backgroundColor: "#CEB7FF" }}>
          <h3 className="help-title">Rent a home</h3>
          <p className="help-text">
            Searching for a suitable home, a quest for comfort begins.
          </p>
          <img src="/assets/Image2.png" alt="Rent a home" className="help-image" />
        </div>

        {/* Third Column */}
        <div className="help-column" style={{ backgroundColor: "#052185" }}>
          <h3 className="help-title">Commercial a home</h3>
          <p className="help-text">
            In the bustling real estate market, this home stands out.
          </p>
          <img src="/assets/Image3.png" alt="Commercial a home" className="help-image" />
        </div>

        {/* Fourth Column */}
        <div className="help-column" style={{ backgroundColor: "#054F31" }}>
          <h3 className="help-title">See neighborhoods</h3>
          <p className="help-text">
            Exploring diverse neighborhoods, discovering cultural gems.
          </p>
          <img src="/assets/Image4.png" alt="See neighborhoods" className="help-image" />
        </div>
      </div>
    </div>
  );
};

export default HeavenlyHelp;
