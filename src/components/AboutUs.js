import React from 'react';
import image from '../assets/freepik.jpeg';  

const AboutUs = () => (
  <section id="about" className="bg-white py-5">
    <div className="container">
      <div className="row align-items-center">

        <div className="col-md-6">
          <img src={image} alt="Medical Clinics" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2 className="text-primary mb-4">À propos de nous</h2>
          <p className="text-muted">
Notre plateforme permet aux habitants d'Azrou de trouver facilement des cliniques médicales par spécialité. Elle affiche les temps d'attente en temps réel et permet de prendre rendez-vous directement en ligne. Les utilisateurs peuvent comparer les disponibilités des cliniques pour choisir la meilleure option. Toutes les informations sont localisées spécifiquement pour la ville d'Azrou. Le site facilite l'accès aux soins de santé en rendant la prise de rendez-vous simple et rapide. Les détails sur les services, horaires et coordonnées des cliniques sont constamment mis à jour. Nous collaborons étroitement avec les cliniques locales pour vous offrir les meilleures informations.
          </p>
          <button className="btn btn-primary ms-8">Contact Us</button>
        </div>
      </div>
      
    </div>
  </section>
);

export default AboutUs;
