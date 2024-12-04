import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [currentWord, setCurrentWord] = useState("dentist");
  const specialties = ["dentist", "optometrist", "dietitian", "chiropractor", "medical clinic", "health clinic"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => specialties[(specialties.indexOf(prev) + 1) % specialties.length]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="search-bar text-center py-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          {/* <input 
            className="form-control mb-3 me-3"
            type="text"
            placeholder="Recherchez une clinique..."
          />
          <button 
            className="btn btn-primary" 
            style={{ transform: 'translateY(-7px)' }} 
          >
            Rechercher
          </button> */}
        </div>

        <div className="mt-2">
  <h1 className="display-6 text-white text-center mb-1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
    Trouvez le meilleur <span className="text-warning">{currentWord}</span> près de moi.
  </h1>
  <button id="m_" className="btn btn-lg btn-primary shadow-lg mt-3 px-4 py-2 rounded-pill text-uppercase">
    Prenez rendez-vous maintenant
  </button>
</div>

      </div>
    </div>
  );
};

export default SearchBar;