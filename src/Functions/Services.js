import React from "react";

export default function Services() {
  return (
    <div className="Services" id="Services">
      <div className="header-section">
        <h1 className="header">What We Offer</h1>
        <p className="sub-header">
          Tailored to Reflect the Unique Lives of Those We Serve
        </p>
      </div>
      <div className="content row">
        {/**-----------------------**/}
        <div className="item img1 col">
          <h3 className="header">Funeral Service</h3>
          <button className="arrow"></button>
        </div>
        {/**-----------------------**/}
        <div className="item img2 col">
          <h3 className="header">Cremation Service</h3>
          <button className="arrow"></button>
        </div>
        {/**-----------------------**/}
        <div className="item img3 col">
          <h3 className="header">Memorial Service</h3>
          <button className="arrow"></button>
        </div>
        {/**-----------------------**/}
        <div className="item img4 col">
          <h3 className="header">Specialty Services</h3>
          <button className="arrow"></button>
        </div>
        {/**-----------------------**/}
      </div>
    </div>
  );
}
