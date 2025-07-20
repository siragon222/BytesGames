import React from 'react';
import './HeroButton.css';

const HeroButton = ({ buttonText, onClick }) => {
  return (
    <button className="hero-button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default HeroButton; 