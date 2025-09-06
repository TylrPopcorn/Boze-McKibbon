import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="Home">
      <div className="content container-fluid">
        <a className="navbar-brand" href="#Home">
          <div className="logo-img"></div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#Hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Planning">
                Planning
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Obituaries">
                Obituaries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Guidance">
                Guidance
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <a href="#CTA" class="btn contact-btn">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
