import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResponsiveButton = ({ text, to }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: isClicked ? '#ff6347' : isHovered ? '#87ceeb' : '#f0f0f0',
    color: isClicked ? '#ffffff' : isHovered ? '#ffffff' : '#000000',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const handleClick = () => {
    navigate(to); // Redirige a la ruta especificada
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ResponsiveButton;