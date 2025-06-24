import React, { useState, useRef } from 'react';
import './GaleriaFotos.css'; // Asegúrate de crear este archivo para los estilos

const GaleriaFotos = ({ fotos, youtubeVideoId, videoThumbnailIndex = 0 }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [isShowingVideo, setIsShowingVideo] = useState(false);
  const fullscreenImageRef = useRef(null);
  

  const handleThumbnailClick = (index) => {
    if (youtubeVideoId && index === videoThumbnailIndex) {
      setIsShowingVideo(true);
      setIsFullScreen(false);
    } else {
      setCurrentIndex(index);
      setIsFullScreen(true);
      setIsShowingVideo(false);
    }
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setIsShowingVideo(false);
  };

  const handleNext = () => {
    if (isFullScreen) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fotos.length);
    }
  };

  const handlePrev = () => {
    if (isFullScreen) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + fotos.length) % fotos.length);
    }
  };

  const handleFullScreen = () => {
    if (fullscreenImageRef.current && isFullScreen) {
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
      <div className="vista-previa" id="video-player-container">
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

      {(isFullScreen || isShowingVideo) && (
        <div className="fullscreen-overlay">
          <button className="close-btn" onClick={handleCloseFullScreen}>
            X
          </button>
          {isFullScreen && (
            <>
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
                🚀
              </button>
            </>
          )}
          {isShowingVideo && youtubeVideoId && (
            <div className="video-responsive">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube video"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GaleriaFotos; 