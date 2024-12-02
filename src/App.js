import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SpecialtyCards from "./components/SpecialtyCards";
import FeedbackSection from "./components/FeedbackSection";
import MapPreview from "./components/MapPreview";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import TenCardsPage from "./components/TenCardsPage";
import "./styles/cards.css";
import "./styles/main.css";
import myVideo from './myVideo.mp4'; 

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/ten-cards" element={<TenCardsPage />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div>  
      <Header />
      
      <div className="mehdi">
       
        <video width="100%" autoPlay muted loop>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
       
        <SearchBar />
      </div>
      <SpecialtyCards />
      <FeedbackSection />
      <MapPreview />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
