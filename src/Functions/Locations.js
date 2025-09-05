import React from "react";

export default function Locations() {
  return (
    <div className="Locations">
      <div className="header-section">
        <h1 className="header">Our Locations</h1>
        <p className="sub-header">We have multiple locations</p>
      </div>
      <div className="content row">
        {/**-----------------------**/}
        <div className="location col">
          <div className="main-img"></div>
          <div className="text-content">
            <h1 className="header">Waxahachie Chapel</h1>
            <div className="address-section">
              <div className="img"></div>
              <p className="address">
                511 West Main <br></br>Street, Waxahachie, TX 75165
              </p>
            </div>
            <div className="phone-section">
              <div className="img"></div>
              <p className="phone">(972)-937-2211</p>
            </div>
          </div>
        </div>
        {/**-----------------------**/}
        <div className="location col">
          <div className="main-img"></div>
          <div className="text-content">
            <h1 className="header">Ennis Chapel</h1>
            <div className="address-section">
              <div className="img"></div>
              <p className="address">
                800 S. Kaufman <br></br>Street, Ennis, TX 75119
              </p>
            </div>
            <div className="phone-section">
              <div className="img"></div>
              <p className="phone">(972)-878-2211</p>
            </div>
          </div>
        </div>
        {/**-----------------------**/}
        <div className="location col">
          <div className="main-img"></div>
          <div className="text-content">
            <h1 className="header">Italy Chapel</h1>
            <div className="address-section">
              <div className="img"></div>
              <p className="address">
                800 S. Ward <br></br>Street, Italy, TX 76651
              </p>
            </div>
            <div className="phone-section">
              <div className="img"></div>
              <p className="phone">(972)-937-2211</p>
            </div>
          </div>
        </div>
        {/**-----------------------**/}
      </div>
    </div>
  );
}
