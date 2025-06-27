import React, { useState, useRef, useEffect } from 'react';
import './GaleriaFotosDLC.css'; // Updated import for DLC-specific CSS

const GaleriaFotosDLC = ({ fotos }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [showRotateMessage, setShowRotateMessage] = useState(false);
  const fullscreenImageRef = useRef(null);
  

  useEffect(() => {
    const checkOrientation = () => {
      if (window.matchMedia("(orientation: portrait)").matches && window.innerWidth < 768) {
        setShowRotateMessage(true);
      } else {
        setShowRotateMessage(false);
      }
    };

    // Initial check
    checkOrientation();

    // Listen for orientation changes
    window.addEventListener("orientationchange", checkOrientation);
    window.addEventListener("resize", checkOrientation); // Also check on resize for wider compatibility

    return () => {
      window.removeEventListener("orientationchange", checkOrientation);
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + fotos.length) % fotos.length);
  };

  const handleFullScreen = () => {
    if (fullscreenImageRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        fullscreenImageRef.current.requestFullscreen();
      }
    }
  };

  const handleThumbnailHover = (index) => {
    setHoverIndex(index);
  };

  return (
    <div className="galeria-container">
      <div className="vista-previa">
        <img
          src={fotos[hoverIndex]}
          alt={`Vista previa ${hoverIndex}`}
          className="vista-previa-imagen"
        />
      </div>
      <div className="galeria-miniatura">
        {fotos.slice(0, 5).map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt={`Miniatura ${index}`}
            onClick={() => handleThumbnailClick(index)}
            onMouseEnter={() => handleThumbnailHover(index)}
            className="miniatura"
          />
        ))}
      </div>

      {isFullScreen && (
        <div className="fullscreen-overlay">
          {showRotateMessage && (
            <div className="rotate-message">
              Por favor, gira tu teléfono para una mejor vista.
            </div>
          )}
          <button className="close-btn" onClick={handleCloseFullScreen}>
            X
          </button>
          <img
            ref={fullscreenImageRef}
            src={fotos[currentIndex]}
            alt={`Fullscreen ${currentIndex}`}
            className="fullscreen-image"
          />
          <button className="prev-btn" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="next-btn" onClick={handleNext}>
            &#10095;
          </button>
          <button className="fullscreen-btn" onClick={handleFullScreen}>
          &#x2922;
          </button>
        </div>
      )}
    </div>
  );
};

export default GaleriaFotosDLC; 