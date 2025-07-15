import React from 'react';
import './CardVentajasPlus.css';
import gamesIcon from '../../assets/ImagenVentajasPlus1.webp'; 
import onlineIcon from '../../assets/ImagenVentajasPlus2.webp'; 
import discountIcon from '../../assets/ImagenVentajasPlus3.webp';

const CardVentajasPlus = () => {
  const ventajas = [
    {
      id: 1,
      image: gamesIcon,
      title: 'Accede a cientos de juegos increíbles',
      description: 'Disfruta de nuevos juegos cada mes, adéntrate en la inmensa biblioteca del Catálogo de juegos y juega a títulos selectos antes de comprarlos con las Pruebas de juego.',
    },
    {
      id: 2,
      image: onlineIcon,
      title: 'Juega online y únete a un mundo de juegos',
      description: 'Avisa a tus amigos y uníos a la diversión con el acceso a multijugador online, incluido con todas las suscripciones de PlayStation Plus.',
    },
    {
      id: 3,
      image: discountIcon,
      title: 'Consigue descuentos exclusivos, contenido dentro del juego y mucho más',
      description: 'Obtén descuentos especiales de PlayStation Store en juegos y complementos selectos, así como packs de contenido exclusivos de los títulos gratuitos más importantes.',
    },
  ];

  return (
    <div className="ventajas-plus-container">
      {ventajas.map((ventaja) => (
        <div key={ventaja.id} className="ventaja-card">
          <img src={ventaja.image} alt={ventaja.title} className="ventaja-card-image" />
          <div className="ventaja-card-content-wrapper">
            <h3 className="ventaja-card-title">{ventaja.title}</h3>
            <div className="card-divider"></div> {/* Divider element */}
            <p className="ventaja-card-description">{ventaja.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardVentajasPlus; 