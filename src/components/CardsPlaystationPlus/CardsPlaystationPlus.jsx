import React from 'react';
import './CardsPlaystationPlus.css';

const CardsPlaystationPlus = () => {
  const memberships = [
    {
      id: 1,
      title: 'Membresía Premium',
      description: 'Disfruta de 150-200 juegos. (Esta membresía ofrece más juegos que la Deluxe, que incluye 100-150 juegos).',
    },
    {
      id: 2,
      title: 'Membresía Deluxe',
      description: 'Obtén los 400 juegos de la membresía Deluxe.',
    },
    {
      id: 3,
      title: 'Membresía Esencial',
      description: 'Indispensable para jugar en línea. Incluye 30 juegos ya añadidos, más la categoría Extra con 100-200 juegos.',
    },
  ];

  return (
    <div className="memberships-container">
      {memberships.map((membership) => (
        <div key={membership.id} className="membership-card">
          <div className="membership-card-info">
            <h3 className="membership-card-name">{membership.title}</h3>
            <div className="card-divider"></div> {/* Divider element */}
            <p className="membership-card-description">{membership.description}</p>
            <button className="membership-card-button">Ver más detalles</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsPlaystationPlus; 