import React from "react";

export default function CTA() {
  return (
    <div className="CTA" id="CTA">
      <div className="img">
        <div className="text-content">
          <h1 className="header">
            Compassionate Support<br></br>
            <span className="colored">Every Step</span> of the Way
          </h1>
          <div className="buttons">
            <button className="learnMore">Contact Us</button>
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
    </div>
  );
}
