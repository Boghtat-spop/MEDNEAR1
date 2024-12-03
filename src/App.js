import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TenCardsPage from "./components/TenCardsPage";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar"; // Assuming you have SearchBar component
import SpecialtyCards from "./components/SpecialtyCards"; // Assuming you have SpecialtyCards component
import FeedbackSection from "./components/FeedbackSection"; // Assuming you have FeedbackSection component
import MapPreview from "./components/MapPreview"; // Assuming you have MapPreview component
import AboutUs from "./components/AboutUs"; // Assuming you have AboutUs component
import myVideo from './myVideo.mp4'; 

import "./styles/cards.css";
import "./styles/main.css";

function App() {
  const location = useLocation();
  
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {/* Render Header only if not on the login page */}
      {!isLoginPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ten-cards" element={<TenCardsPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      {/* Render Footer only if not on the login page */}
      {!isLoginPage && <Footer />}
    </div>
  );
}

const Home = () => {
  return (
    <div>  
      <div className="mehdi">
        <video width="100%" autoPlay muted loop>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Make sure SearchBar is available in your project */}
        <SearchBar />
      </div>
      
      {/* Make sure SpecialtyCards, FeedbackSection, MapPreview, and AboutUs are available */}
      <SpecialtyCards />
      <FeedbackSection />
      <MapPreview />
      <AboutUs />
    </div>
  );
}

export default App;
