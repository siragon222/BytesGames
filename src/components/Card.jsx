import React, { useState, useContext } from 'react';
import './Card.css'; // Importar el archivo CSS
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../context/GameContext'; // Importar el contexto
import { CurrencyContext } from '../context/CurrencyContext'; // Import the CurrencyContext

// Importar los SVG de las plataformas
import PC from '../assets/ConsolaCards/PC_Clasi.svg';
import PS5 from '../assets/ConsolaCards/PS5_Clasi.svg';
import PS4 from '../assets/ConsolaCards/PS4_Clasi.svg';
import PS3 from '../assets/ConsolaCards/PS3_clasi.svg';
import XBOX from '../assets/ConsolaCards/XBOX_Clasif.svg';
import PlaystationPlusLogo from '../assets/playstation-plus-logo.svg';

// Mapeo de plataformas a SVG
const platformIcons = {
  'PC': PC,
  'PS5': PS5,
  'PS4': PS4,
  'PS3': PS3,
  'Xbox': XBOX,
};

const Card = ({ id, image, title, platforms, price, discount, nuevo, PlystationPlus, stock, onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Hook para la navegación
  const { setSelectedGame } = useContext(GameContext); // Obtener setSelectedGame del contexto
  const { selectedCurrency } = useContext(CurrencyContext); // Get selectedCurrency from context

  // Convertir la cadena de plataformas en un array
  const platformList = platforms.replace("Plataformas: ", "").split(', ');

  // Calcular el precio con descuento
  const originalPrice = parseFloat(price.replace("$", ""));
  const discountValue = discount ? parseFloat(discount.replace("%", "")) / 100 : 0;
  const discountedPrice = originalPrice * (1 - discountValue);

  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    const gameName = title.toLowerCase().replace(/\s+/g, '-'); // Convertir el título a un formato de URL
    navigate(`/ver-detalles?q=${gameName}`); // Navegar a la URL con el nombre del juego
  };

  return (
    <div 
      className={`game-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {nuevo === 'si' && <div className="new-label">Nuevo</div>}
      {discount && <div className="discount-label">{discount}</div>}
      <div className="image-container">
        <img src={image} alt={title} />
        {PlystationPlus === 'si' && (
          <div className="square-overlay">
            <img src={PlaystationPlusLogo} alt="Playstation Plus" className="plus-logo" />
          </div>
        )}
        {stock === 'no' && (
          <div className="middle-square-overlay">AGOTADO</div>
        )}
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        <p className="card-price-section">
          <span className="platform-icons">
            {platformList.map((platform, index) => (
              <img 
                key={index} 
                src={platformIcons[platform.trim()]} 
                alt={platform} 
                className="platform-icon"
              />
            ))}
          </span>
          <span className="price-text">
            {discountValue > 0 ? (
              <>
                <span className="original-price" style={{ textDecoration: 'line-through', marginRight: '10px', fontWeight: 'medium', color: '#888' }}>
                  {selectedCurrency.symbol}{(originalPrice * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </span>
                <span className="discounted-price">
                  {selectedCurrency.symbol}{(discountedPrice * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </span>
              </>
            ) : (
              <>
                {selectedCurrency.symbol}{(originalPrice * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </>
            )}
          </span>
        </p>
      </div>
      <button 
        className="card-button"
        onClick={handleButtonClick}
      >
        VER DETALLES
      </button>
    </div>
  );
};

export default Card; 