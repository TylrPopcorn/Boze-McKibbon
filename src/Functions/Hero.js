import React from "react";

//HERO SECTION:
export default function Hero() {
  return (
    <div className="Hero-Section" id="Hero">
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="hero-header">
          <div className="content">
            <h1 className="headr">
              Honoring Lives with <br></br> Compassion, Respect, and Dignity{" "}
            </h1>
            <p className="sub-header">
              We are dedicated to celebrating the spirit of those we serve,
              embracing traditional values, diversity, and innovation.
            </p>
            <div className="CTA">
              <a href="#About" className="learnMore">
                Learn More
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.eubankflorist.com/"
                className="Order"
              >
                💐 Order Flowers
              </a>
            </div>
          </div>
        </div>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <div
              class="d-block w-100 carousel_IMG carousel_IMG1"
              alt="Slide 1"
            ></div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div
              class="d-block w-100 carousel_IMG carousel_IMG2"
              alt="Slide 2"
            ></div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div
              class="d-block w-100 carousel_IMG carousel_IMG3"
              alt="Slide 3"
            ></div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <div
              class="d-block w-100 carousel_IMG carousel_IMG4"
              alt="Slide 4"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
