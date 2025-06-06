import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import './GameCatalog.css';

const GameCatalog = ({ games }) => {
  console.log('Juegos recibidos:', games); // Verificar los juegos recibidos
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(18); // Juegos por pantalla en PC
  const [currentGames, setCurrentGames] = useState([]);

  // Calcular los juegos a mostrar cuando cambia la página o la lista de juegos
  useEffect(() => {
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    setCurrentGames(games.slice(indexOfFirstGame, indexOfLastGame));
  }, [currentPage, games, gamesPerPage]);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Ajustar el número de juegos por pantalla según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setGamesPerPage(8); // Menos juegos en móvil
      } else {
        setGamesPerPage(18); // Cambiado de 16 a 20
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar al inicio para establecer el valor inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="game-catalog">
      <h2>Catálogo de Juegos ({games.length} títulos)</h2>
      <div className="game-grid">
        {currentGames.map((game) => (
          <Card
            key={game.id}
            id={game.id}
            image={game.image}
            title={game.title}
            platforms={game.platforms}
            price={game.price}
            genre={game.genre}
            onButtonClick={() => console.log(`Ver detalles del juego con ID: ${game.id}`)}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(games.length / gamesPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameCatalog; 