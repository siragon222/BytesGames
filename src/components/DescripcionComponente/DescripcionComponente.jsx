import React from 'react';
import './DescripcionComponente.css'; // Asegúrate de crear este archivo para los estilos

const DescripcionComponente = ({ descripcion }) => {
  return (
    <div className="descripcion-container">
      <h2 className="descripcion-titulo">Descripción</h2>
      <p className="descripcion-contenido">
        {descripcion}
      </p>
    </div>
  );
};

export default DescripcionComponente; 