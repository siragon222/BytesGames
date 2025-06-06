import React from 'react';
import GameCatalog from '../WebLinks/DataBaseGames/GameCatalog';

const SearchResults = ({ filteredGames }) => {
  console.log('filteredGames en SearchResults:', filteredGames);
  return (
    <div>
      <h2>Resultados de la búsqueda</h2>
      <GameCatalog games={filteredGames} />
      <section id="SearchResults">
        <h2>Detalles del Juego</h2>
        <p>Aquí puedes mostrar más información sobre el juego seleccionado.</p>
      </section>
    </div>
  );
};

export default SearchResults;
