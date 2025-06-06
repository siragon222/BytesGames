import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, description, buttonText, backgroundImage }) => {
  return (
    <section 
      className="hero-section"
      style={{ '--bg-image': `url(${backgroundImage})` }}
    >
      <h1 className="hero-title">{title}</h1>
      <p className="hero-description">{description}</p>
      <button className="hero-button">
        {buttonText}
      </button>
    </section>
  );
};

export default HeroSection;