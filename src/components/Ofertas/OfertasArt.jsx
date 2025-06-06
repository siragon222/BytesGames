import React from 'react';
import descuentoArt from '../../assets/DescuentoArt.webp'; // Importa la imagen
import './OfertasArt.css'; // Importa el archivo CSS

const OfertasArt = () => {
  return (
    <div className="oferta-art-container" style={{ height: '500px', overflow: 'hidden' }}>
      <img src={descuentoArt} alt="Descuento Art" />
    </div>
  );
};

export default OfertasArt;
