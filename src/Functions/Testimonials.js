import React from "react";

export default function Testimonials() {
  return (
    <div className="Testimonials" id="Testimonials">
      <div className="header-section">
        <h1 className="header">Testimonials</h1>
        <p className="sub-header">See What Others Are Saying</p>
      </div>
      <div className="content">
        <button className="left-Arrow"></button>
        <div className="text-content">
          <p className="testimonial">
            "I was very pleased from beginning to end. Overall I was quite
            pleased with the services. I have been acquainted before with BMM,
            and quite frankly, we came back because we were pleased and happy
            with the services."
          </p>
          <p className="author">-The family of Joyce Walthers</p>
        </div>
        <button className="right-Arrow"></button>
      </div>
      <div class="indicators">
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
    </div>
  );
}
