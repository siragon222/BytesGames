import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, description, buttonText, backgroundImage, backgroundPositionMobile, svgImage, svgWidth, svgHeight, overlayColor, titleColor, descriptionColor }) => {
  return (
    <section 
      className="hero-section"
      style={{
        '--bg-image': `url(${backgroundImage})`,
        '--bg-position-mobile': backgroundPositionMobile || 'center center', // Default to center if not provided
        '--overlay-color': overlayColor || 'rgba(0, 0, 0, 1)', // Default to black if not provided
      }}
    >
      <div className="hero-text-content">
        {svgImage && <img src={svgImage} alt="Hero SVG" className="hero-svg" style={{ width: svgWidth, height: svgHeight }} />}
        <h1 className="hero-title" style={{ color: titleColor }}>{title}</h1>
        <p className="hero-description" style={{ color: descriptionColor }}>{description}</p>
      </div>
      <button className="hero-button">
        {buttonText}
      </button>
    </section>
  );
};

export default HeroSection;