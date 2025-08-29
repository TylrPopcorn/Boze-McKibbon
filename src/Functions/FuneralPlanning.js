import React from "react";

export default function FuneralPlanning() {
  return (
    <div className="FuneralPlanning" id="Planning">
      <div className="content row">
        <div className="text-content col">
          <div className="header-section">
            <h1 className="header">Funeral Planning</h1>
            <p className="sub-title">
              Guiding You Through Every Step of the Way
            </p>
          </div>
          <p className="description">
            We provide compassionate guidance to help you plan a meaningful
            tribute for your loved ones. From pre-planning to immediate
            arrangements, our dedicated team is here to assist you.
          </p>
          <button className="learnMore">Learn More</button>
        </div>
        <div className="img-wrapper col">
          <div className="img"></div>
        </div>
      </div>
    </div>
  );
}
