import React from "react";

//Components:
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Obituaries from "./Obituaries";
import Gallery from "./Gallery";
import FuneralPlanning from "./FuneralPlanning";
import GriefGuidance from "./Grief-Guidance";
import Locations from "./Locations";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";

//HOMEPAGE:
export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <Hero />
      <About />
      <Obituaries />
      <Gallery />
      <FuneralPlanning />
      <GriefGuidance />
      <Locations />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
