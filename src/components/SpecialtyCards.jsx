import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/dantist.jpg";
import image2 from "../assets/Optometrist.jpg";
import image3 from "../assets/Dietitian.jpg";
import image4 from "../assets/Chiropractor.jpg";
import image5 from "../assets/Cardiologie.jpg";
import image6 from "../assets/doctor.jpg";

const specialties = [
  { name: "Dentist", image: image1 },
  { name: "Optometrist", image: image2 },
  { name: "Dietitian", image: image3 },
  { name: "Chiropractor", image: image4 },
  { name: "Cardiologist", image: image5 },
  { name: "General Doctor", image: image6 },
];

const SpecialtyCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const itemsPerPage = 3; 

  const prevSet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? specialties.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const nextSet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= specialties.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handleNavigate = () => {
    navigate("/ten-cards");
  };

  return (
    <section id="specialty" className="py-5 bg-white">
      <hr />
      <div className="container">
        <h2 className="text-center text-primary mb-4">Find Care by Specialty</h2>
        <p className="text-center text-muted mb-5">
          Access a wide range of health specialties
        </p>
        

        <div className="text-center mb-4">
          <button onClick={prevSet} className="btn btn-outline-primary mx-2">
            ← Previous
          </button>
          <button onClick={nextSet} className="btn btn-outline-primary mx-2">
            Next →
          </button>
          
        </div>

        <div className="row">
          {specialties.slice(currentIndex, currentIndex + itemsPerPage).map((specialty, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow text-center">
                <img src={specialty.image} alt={specialty.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{specialty.name}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={handleNavigate}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>
    </section>
    
  );
};

export default SpecialtyCards;
