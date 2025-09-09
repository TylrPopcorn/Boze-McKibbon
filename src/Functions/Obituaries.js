import React from "react";

export default function Obituaries() {
  return (
    <div className="Obituaries" id="Obituaries">
      <div className="header-section">
        <h1 className="header">Recent Obituaries</h1>
        <p className="sub-header">
          Explore the lives and legacies of those we've had the honor to serve.
        </p>
      </div>
      <div className="content">
        <button className="left-Arrow"></button>
        <div className="boxes">
          {/**-----------------------**/}
          <div className="item ">
            <div className="img img1"></div>
            <div className="text-content">
              <h3 className="victimName">Michael Sammet</h3>
              <p className="deathDate">Dec, 29, 2024</p>
              <p className="description">
                Michael Joel Sammet entered the Kingdom of Heaven December 29,
                2024. Born December 23, 1945 to Heila (Fishman)...
              </p>
            </div>
            <button className="readMore">Read More</button>
          </div>
          {/**-----------------------**/}
          <div className="item ">
            <div className="img img2"></div>
            <div className="text-content">
              <h3 className="victimName">Rita Richardson</h3>
              <p className="deathDate">Dec, 27, 2024</p>
              <p className="description">
                Rita Richardson entered the Kingdom of Heaven December 27, 2024.
              </p>
            </div>
            <button className="readMore">Read More</button>
          </div>
          {/**-----------------------**/}
          <div className="item ">
            <div className="img img3"></div>
            <div className="text-content">
              <h3 className="victimName">Dartha Roberts</h3>
              <p className="deathDate">Dec, 25, 2024</p>
              <p className="description">
                Dartha Nell Roberts joined her Lord and Savior on December 25,
                2024. A fifth generation Texan, born September 3....
              </p>
            </div>
            <button className="readMore">Read More</button>
          </div>
          {/**-----------------------**/}
          <div className="item ">
            <div className="img img4"></div>
            <div className="text-content">
              <h3 className="victimName">Tex Riepe</h3>
              <p className="deathDate">Dec, 24, 2024</p>
              <p className="description">
                Tex Riepe, 67, of Maypearl, TX, passed away on December 24,
                2024. He was born on December 30, 1956, in Poplar Bluff...
              </p>
            </div>
            <button className="readMore">Read More</button>
          </div>
          {/**-----------------------**/}
        </div>
        <button className="right-Arrow"></button>
      </div>
      <button className="CTA">See More</button>
    </div>
  );
}
