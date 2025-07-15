import React from 'react';
import PortadaPlaystationPlus from './PortadaPlaystationPlus/PortadaPlaystationPlus';
import CardVentajasPlus from './CardVentajasPlus/CardVentajasPlus';
import CardsPlaystationPlus from './CardsPlaystationPlus/CardsPlaystationPlus';
import PreguntasFrecuentePlus from './PreguntasFrecuentePlus/PreguntasFrecuentePlus';
import './MembresiasPlaystationPlus.css';

const MembresiasPlaystationPlus = () => {
  return (
    <div className="membresias-playstation-plus-container">
      <PortadaPlaystationPlus />
      <h2 className="section-title">Grandes ventajas para cualquier jugador</h2>
      <CardVentajasPlus />
      <h2 className="section-title">Membresías Playstation Plus</h2>
      <CardsPlaystationPlus />
      <PreguntasFrecuentePlus />
    </div>
  );
};

export default MembresiasPlaystationPlus; 