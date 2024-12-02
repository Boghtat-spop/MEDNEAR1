import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
>>>>>>> cccd60c8a63c4487039c9742b9c3192da019b3f5
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD
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
=======
import HomePage from "./Page/HomePage";
import Login from "./Page/Login";
import "./styles/main.css";

const App = () => {
    
    const location = useLocation();
    
    
    const isLoginPage = location.pathname === "/login";

    return (
        <div>
            
            {!isLoginPage && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            
            {!isLoginPage && <Footer />}
        </div>
    );
>>>>>>> cccd60c8a63c4487039c9742b9c3192da019b3f5
};

export default App;
