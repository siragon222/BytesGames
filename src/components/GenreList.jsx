import React, { useState } from 'react';
import './GenreList.css'; // Importa el CSS para la animación

const GenreList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const genres = [
    "Acción", "Aventura", "Comedia", "Drama", "Fantasía", 
    "Horror", "Ciencia Ficción", "Thriller", "Misterio", "Romance"
  ];

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="genre-list">
      <div className="genre-title-container" onClick={toggleList}>
        <h2 className="genre-title">GÉNERO {isOpen ? '▲' : '▼'}</h2>
      </div>
      {isOpen && (
        <div className="generos-container">
          {genres.map((genre, index) => (
            <div key={index} className="genero">
              {genre}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenreList; 