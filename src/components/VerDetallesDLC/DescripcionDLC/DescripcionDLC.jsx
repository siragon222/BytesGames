import React from 'react';
import './DescripcionDLC.css'; // Updated import for DLC-specific CSS

const DescripcionDLC = ({ descripcion }) => {
  return (
    <div className="descripcion-container">
      <h2 className="descripcion-titulo">Descripción del DLC</h2> {/* Updated title */}
      <p className="descripcion-contenido">
        {descripcion}
      </p>
    </div>
  );
};

export default DescripcionDLC; 