import React from 'react';
import './VentanaMantenimiento.css';
import playstationPlusLogo from '../../assets/playstation-plus.svg'; // Import the SVG

const VentanaMantenimiento = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <img src={playstationPlusLogo} alt="PlayStation Plus Logo" className="maintenance-logo" />
        <h1>¡Página en Mantenimiento!</h1>
        <p>Estamos trabajando para mejorar tu experiencia.</p>
        <p>Próximamente esta página estará disponible al público.</p>
      </div>
    </div>
  );
};

export default VentanaMantenimiento; 