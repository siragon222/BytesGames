import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Regalos_Card.css';

const Regalos_Card = ({ id, image, title, isHorizontal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ver-detalles?q=${title.replace(/ /g, '-')}`);
  };

  return (
    <div className={`regalos-card ${isHorizontal ? 'regalos-card--horizontal' : ''}`} onClick={handleClick}>
      <div className="regalos-card-image-container">
        <div className="regalos-card-gift-label">REGALO</div>
        <img src={image} alt={title} className="regalos-card-image" />
      </div>
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
