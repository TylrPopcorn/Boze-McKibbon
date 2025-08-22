import React from "react";

export default function About() {
  return (
    <div className="About" id="About">
      <div className="backgroundColor"></div>
      <div className="content row">
        <div className="img-wrapper container col">
          <div className="img"></div>
        </div>
        <div className="text-content col">
          <div className="header-section">
            <h1 className="title">About Us</h1>
            <p className="sub-header">Compassionate Care Rooted in Tradition</p>
          </div>
          <p className="description">
            For generations, Boze-Mitchell McKibbin Funeral Home has served
            families in Waxahachie, Ennis, and Italy, Texas, with dedication and
            respect. As a family-owned and operated funeral home, we prioritize
            creating meaningful and personalized services to honor the lives of
            those who have passed.
          </p>
          <button className="learnMore">Learn More</button>
        </div>
      </div>
    </div>
  );
}
