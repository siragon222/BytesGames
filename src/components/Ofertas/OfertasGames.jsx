import React from 'react';
import './OfertasGames.css';
import OfertasArt from './OfertasArt';
import OfertasSlider from './OfertasSlider';

const OfertasGames = () => {
  return (
    <div className="fondo-solido">
      <div className="contenido" style={{ marginTop: '0', paddingTop: '0' }}>
        <OfertasArt />
        <OfertasSlider />
      </div>
    </div>
  );
};

export default OfertasGames;