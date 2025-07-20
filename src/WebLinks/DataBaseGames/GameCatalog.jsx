import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import './GameCatalog.css';
import logo from '../../assets/mando_fail_seach.svg'; // Importar el logo

const GameCatalog = ({ games }) => {
  console.log('Juegos recibidos:', games); // Verificar los juegos recibidos
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(15); // Juegos por pantalla en PC
  const [currentGames, setCurrentGames] = useState([]);

  // Reiniciar la página a 1 cuando cambia la lista de juegos o los juegos por página
  useEffect(() => {
    setCurrentPage(1);
  }, [games, gamesPerPage]);

  // Calcular los juegos a mostrar cuando cambia la página o la lista de juegos
  useEffect(() => {
    // Sort games by releaseDate in descending order (most recent first)
    const sortedGames = [...games].sort((a, b) => {
      const parseDate = (dateString) => {
        const parts = dateString.replace(' de ', ' ').replace(' de ', ' ').split(' ');
        const monthNames = {
          enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
          julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
        };
        const day = parseInt(parts[0], 10);
        const month = monthNames[parts[1].toLowerCase()];
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
      };
      return parseDate(b.releaseDate) - parseDate(a.releaseDate);
    });

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    setCurrentGames(sortedGames.slice(indexOfFirstGame, indexOfLastGame));
  }, [currentPage, games, gamesPerPage]);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(games.length / gamesPerPage);

  // Calculate the range of pages to display
  const getVisiblePageNumbers = () => {
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      // Less than maxPagesToShow total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // More than maxPagesToShow total pages so calculate start and end pages
      const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // Current page near the start
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // Current page near the end
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        // Current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    return Array.from({ length: (endPage + 1) - startPage }, (_, i) => startPage + i);
  };

  const visiblePageNumbers = getVisiblePageNumbers();

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  // Ajustar el número de juegos por pantalla según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setGamesPerPage(8); // Menos juegos en móvil
      } else {
        setGamesPerPage(15); // Cambiado de 16 a 20
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar al inicio para establecer el valor inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="game-catalog">
      {games.length === 0 ? (
        <div className="no-games-message">
          <img src={logo} alt="Logo" className="no-games-logo" />
          <p className="no-games-text">Este juego no está disponible aún, sigue buscando. ¡Nuevas aventuras te esperan!</p>
        </div>
      ) : (
        <>
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
                discount={game.discount}
                nuevo={game.nuevo}
                PlystationPlus={game.PlystationPlus}
                stock={game.stock}
                language={game.Lenguaje} /* Pass the language prop */
                onButtonClick={() => console.log(`Ver detalles del juego con ID: ${game.id}`)}
              />
            ))}
          </div>
          <div className="pagination">
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            {visiblePageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                className={currentPage === pageNumber ? 'active' : ''}
              >
                {pageNumber}
              </button>
            ))}
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GameCatalog; 