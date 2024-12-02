import React from "react";
import SearchBar from "../components/SearchBar";
import SpecialtyCards from "../components/SpecialtyCards";
import FeedbackSection from "../components/FeedbackSection";
import MapPreview from "../components/MapPreview";
import heroImage from "../assets/heroImage.jpg";
import AboutUs from "../components/AboutUs";

const HomePage = () => (
  <div>
    <div
      className="hero-image"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      <SearchBar />
    </div>
    <SpecialtyCards />
    <FeedbackSection />
    <MapPreview />
    <AboutUs/>
  </div>
);

export default HomePage;
