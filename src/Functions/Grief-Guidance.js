import React from "react";

export default function GriefGuidance() {
  return (
    <div className="GriefGuidance" id="Guidance">
      <div className="content row">
        <div className="img-wrapper col">
          <div className="img"></div>
        </div>
        <div className="text-content col">
          <div className="header-section">
            <h1 className="header">Grief & Guidance</h1>
            <p className="sub-title">Supporting You in Your Time of Loss</p>
          </div>
          <p className="description">
            Whether you're seeking emotional support to navigate difficult
            moments, practical resources to address your challenges, or advice
            on building resilience and coping strategies, we're here to guide
            you with compassion and understanding every step of the way.
          </p>
          <button className="learnMore">Learn More</button>
        </div>
      </div>
    </div>
  );
}
