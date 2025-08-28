import React from "react";

export default function Footer() {
  return (
    <footer className="Footer" id="Footer">
      <div className="content row">
        {/**-----------------------**/}
        <div className="item logo col">
          <div className="wrapper">
            <div className="logo"></div>
            <div className="socials">
              <a
                href="https://www.facebook.com/people/Boze-Mitchell-Mckibbin-Funeral-Home/100050990597184/"
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                href="https://www.yelp.com/biz/boze-mitchell-mckibbin-funeral-home-waxahachie-3"
                className="facebook"
                target="_blank"
                className="yelp"
              ></a>
              <div className="email"></div>
            </div>
            <p className="copyright">
              © 2025 Boze Mitchell Mckibbin. All rights reserved.
            </p>
          </div>
        </div>
        {/**-----------------------**/}
        <div className="item contact col">
          <h1 className="header">CONTACT</h1>
          <p className="email">bozemitchellfh@aol.com</p>
          <div className="subscribe">
            <p>OBITUARY NOTIFICATIONS</p>
            <div className="inputBox">
              <form class="email-form">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <button className="arrow"></button>
              </form>
            </div>
          </div>
        </div>
        {/**-----------------------**/}
        <div className="item company col">
          <h1 className="header">COMPANY</h1>
          <div className="buttons">
            <a href="#Home">Home</a>
            <a href="#Planning">Planning</a>
            <a href="#Obituaries">Obituaries</a>
            <a href="#Services">Services</a>
            <a href="#Guidance">Guidance</a>
          </div>
        </div>
        {/**-----------------------**/}
        <div className="item terms col">
          <h1 className="header">TERMS</h1>
          <div className="buttons">
            <button>Privacy Policy</button>
            <button>Terms of Use</button>
            <button>Sitemap</button>
          </div>
        </div>
        {/**-----------------------**/}
        <div className="item map col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.175821647101!2d-96.85458232326374!3d32.38764827382889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864eef2376fc7c3b%3A0xff6794ebc810de8!2s511%20W%20Main%20St%2C%20Waxahachie%2C%20TX%2075165!5e0!3m2!1sen!2sus!4v1748273427579!5m2!1sen!2sus"
            width="80%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            title="map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  );
}
