import React, { useState } from 'react';
import './GenreCarousel.css';

const GenreCarousel = ({ onGenreSelect }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genres = [
    "Acción",
    "Aventura",
    "Shooter en primera persona (FPS)",
    "Shooter en tercera persona",
    "Plataformas",
    "Puzzle",
    "Estrategia en tiempo real (RTS)",
    "Estrategia por turnos (TBS)",
    "Rol (RPG)",
    "MMO (Juegos multijugador masivos en línea)",
    "Simulación",
    "De carreras",
    "Terror",
    "Música y ritmo",
    "Deportes",
    "Fighting (Lucha)",
    "Horror",
    "Stealth (Sigilo)",
    "Sandbox / Mundo abierto",
    "Visual novel / Novela visual",
    "Shooter táctico",
    "Juegos de mesa / Cartas"
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre);
  };

  return (
    <div className="genre-carousel">
      {/* Versión para PC */}
      <div className="genre-list">
        {genres.map((genre, index) => (
          <div key={index} className="genre-item" onClick={() => handleGenreClick(genre)}>
            {genre}
          </div>
        ))}
      </div>

      {/* Versión para móvil */}
      <div className="mobile-genre-menu">
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 'Cerrar géneros' : 'Ver géneros'}
        </button>
        {isMobileMenuOpen && (
          <div className="mobile-genre-list">
            {genres.map((genre, index) => (
              <div key={index} className="mobile-genre-item" onClick={() => handleGenreClick(genre)}>
                {genre}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenreCarousel; 