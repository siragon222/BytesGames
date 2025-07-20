import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Regalos_Card.css';
import RibbonImage from '../../assets/Moñoregalo.webp';

const Regalos_Card = ({ id, image, title, isHorizontal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const encodedTitle = encodeURIComponent(title.replace(/ /g, '-'));
    navigate(`/ver-detalles?q=${encodedTitle}`);
  };

  return (
    <div className={`regalos-card ${isHorizontal ? 'regalos-card--horizontal' : ''}`} onClick={handleClick}>
      <div className="regalos-card-image-container">
        <div className="regalos-card-gift-label">REGALO</div>
        <img src={image} alt={title} className="regalos-card-image" />
      </div>
      <img src={RibbonImage} alt="Gift Ribbon" className="regalos-card-corner-ribbon" />
      <div className="regalos-card-info">
        <h3 className="regalos-card-title">{title}</h3>
        <button className="regalos-card-button" onClick={handleClick}>
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default Regalos_Card;
