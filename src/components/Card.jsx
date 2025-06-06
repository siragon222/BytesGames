import React, { useState } from 'react';
import './Card.css'; // Importar el archivo CSS

const Card = ({ image, title, platforms, price, onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`game-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        <p>
          <span>{platforms.replace("Plataformas: ", "")}</span>
          <span>{price.replace("Precio: ", "")}</span>
        </p>
      </div>
      <button 
        className="card-button"
        onClick={onButtonClick}
      >
        VER DETALLES
      </button>
    </div>
  );
};

export default Card; 