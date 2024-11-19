// src/components/Services.jsx
import React from 'react';
import haircutImage from '../assets/haircut.jpg';
import facialImage from '../assets/facial.jpg';
import manicureImage from '../assets/manicure.jpg';
import massageImage from '../assets/massage.jpg';

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service">
        <img src={haircutImage} alt="Haircut" className="service-img" />
        <h3>Haircuts</h3>
        <p>Trendy and stylish cuts for everyone.</p>
      </div>
      <div className="service">
        <img src={facialImage} alt="Facial Treatments" className="service-img" />
        <h3>Facial Treatments</h3>
        <p>Rejuvenate your skin with our treatments.</p>
      </div>
      <div className="service">
        <img src={manicureImage} alt="Manicures and Pedicures" className="service-img" />
        <h3>Manicures and Pedicures</h3>
        <p>Keep your hands and feet looking great.</p>
      </div>
      <div className="service">
        <img src={massageImage} alt="Massage Therapy" className="service-img" />
        <h3>Massage Therapy</h3>
        <p>Relax and unwind with our therapy sessions.</p>
      </div>
    </section>
  );
};

export default Services;
