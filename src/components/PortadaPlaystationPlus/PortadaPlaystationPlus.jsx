import React from 'react';
import './PortadaPlaystationPlus.css';
import playstationPlusHero from '../../assets/playstation-plus.svg'; // Using playstation-plus.svg as the main image

const PortadaPlaystationPlus = () => {
  return (
    <div className="portada-plus-container">
      <img src={playstationPlusHero} alt="PlayStation Plus" className="portada-plus-image" />
      <h1 className="portada-plus-title">PlayStation Plus</h1>
      <p className="portada-plus-description">Tu destino final para la diversión gamer</p>
    </div>
  );
};

export default PortadaPlaystationPlus; 