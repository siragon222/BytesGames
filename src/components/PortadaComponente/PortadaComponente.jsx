import React from 'react';
import './PortadaComponente.css'; // Asegúrate de crear este archivo para los estilos

const PortadaComponente = ({ imagenUrl }) => {
  if (!imagenUrl) {
    return <div className="portada-container portada-loading"></div>; // Or a loading spinner
  }

  return (
    <div className="portada-container">
      <img src={imagenUrl} alt="Portada" className="portada-imagen" />
    </div>
  );
};

export default PortadaComponente; 