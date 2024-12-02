import React, { useState } from "react";
import image1 from "../assets/doctor.jpg";
import image2 from "../assets/doctor1.jpg";
import image3 from "../assets/heroImage.jpg";
import image4 from "../assets/doctor3.jpg";
import image5 from "../assets/doctor4.jpg";
import image6 from "../assets/doctor5.jpg";
import image7 from "../assets/doctor6.jpg";
import image8 from "../assets/doctor7.jpg";
import image10 from "../assets/doctor9.jpg";

const tenSpecialties = [
  { name: "Anas Bayaqour", description: "Providing comprehensive dental care", image: image1, location: "Azrou, Kachla", diploma: "DDS, Harvard", disponible: "Lundi et Vendredi : 9:00-12:00" },
  { name: "Zakaria Ferouhi", description: "Specialized in vision and eye health", image: image2, location: "Azrou, Kharzouza", diploma: "MD, Oxford", disponible: "Mardi : 9:00-15:00" },
  { name: "Baali Abdelali", description: "Expert in nutrition and diet planning", image: image3, location: "Azrou, Ait El-Haj", diploma: "Nutrition MSc, Paris", disponible: "Mercredi : 10:00-14:00" },
  { name: "Malak Benani", description: "Focused on pediatrics and child health", image: image4, location: "Azrou, Michlefen", diploma: "MD, Cambridge", disponible: "Jeudi : 11:00-16:00" },
  { name: "mehdi azou", description: "Expert in dermatology and skin health", image: image5, location: "Fès", diploma: "MD, Stanford", disponible: "Lundi et Vendredi : 9:00-12:00" },
  { name: "aya el khamlichi", description: "Specialist in orthopedics and joint health", image: image6, location: "Agadir", diploma: "Orthopedic Surgery MSc, Zurich", disponible: "Samedi : 10:00-18:00" },
  { name: "Youssef Khachiai", description: "General medical practitioner", image: image7, location: "Kénitra", diploma: "MBBS, Cairo University", disponible: "Tous les jours : 9:00-17:00" },
  { name: "Oumaima Taki", description: "Focused on gynecology and women's health", image: image8, location: "Meknès", diploma: "MD, Johns Hopkins", disponible: "Jeudi : 8:00-13:00" },
  { name: "Hassan Khachiai", description: "Pulmonologist specializing in respiratory care", image: image10, location: "Tétouan", diploma: "Pulmonology PhD, Melbourne", disponible: "Vendredi : 8:00-14:00" },
];

const TenCardsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleShowDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseDetails = () => {
    setSelectedDoctor(null);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center text-primary mb-4">Doctors Present</h2>
        <p className="text-center text-muted mb-5">
          Here are 9 specialties available for you:
        </p>

        <div className="row">
          {tenSpecialties.map((specialty, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow text-center">
                <img
                  src={specialty.image}
                  alt={specialty.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">{specialty.name}</h5>
                  <p>{specialty.description}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShowDetails(specialty)}
                  >
                    Rendez-vous
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDoctor && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseDetails}>
              &times;
            </button>
            <h1 className="doctor-name"><strong>{selectedDoctor.name}</strong></h1>
            <p className="doctor-location"><strong><i>Location :</i></strong> {selectedDoctor.location}</p>
            <p className="doctor-diploma"><strong><i>Diploma :</i></strong> {selectedDoctor.diploma}</p>
            <p className="doctor-disponible"><strong><i>Disponibility :</i></strong> {selectedDoctor.disponible}</p>
            <hr />
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="img-fluid rounded mb-3"
            />
            <div className="form-container">
              <hr />
              <h2 id="hello">Hello, I am always at your service.</h2>
              <hr />
              <label htmlFor="full-name">Full Name :</label>
              <input 
                type="text" 
                id="full-name" 
                placeholder="Enter full name" 
                className="input-field"
              />
              <label htmlFor="phone-number">Phone Number :</label>
              <input 
                type="tel" 
                id="phone-number" 
                placeholder="06-40-48-38-28" 
                className="input-field"
              />
              <button className="btn-follow mt-4"><strong>Check</strong></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TenCardsPage;
