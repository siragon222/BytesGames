import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DLC_Card.css';

const DLC_Card = ({ image, name, content, price, id }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/VerDetallesDLC?id=${id}`);
  };

  return (
    <div className="dlc-card">
      <div className="dlc-card-image-container">
        <img src={image} alt={name} className="dlc-card-image" />
      </div>
      <div className="dlc-card-info">
        <h3 className="dlc-card-name">{name}</h3>
        <ul className="dlc-card-content">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="dlc-card-price">{price}</p>
        <button className="dlc-card-button" onClick={handleViewDetails}>Ver detalles DLC</button>
      </div>
    </div>
  );
};

export default DLC_Card; 