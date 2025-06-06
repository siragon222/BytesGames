import React, { useState } from 'react';
import GenreCarousel from '../../../components/Carrusel_Generos/GenreCarousel';
import GameCatalog from '../../DataBaseGames/GameCatalog';
import { games } from '../../DataBaseGames/GameDatabase';
import SearchBar from '../../../components/SearchBar';
import SearchResults from '../../../components/SearchResults';

const JuegosPs3 = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar los juegos que pertenecen a la categoría PS3
  const ps3Games = games.filter(game => game.platforms.includes('PS3'));

  // Filtrar los juegos por género si se ha seleccionado uno
  const filteredByGenre = selectedGenre 
    ? ps3Games.filter(game => game.genre === selectedGenre) 
    : ps3Games;

  // Filtrar los juegos por la búsqueda
  const filteredGames = searchQuery 
    ? filteredByGenre.filter(game => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : filteredByGenre;

  console.log('searchQuery:', searchQuery);
  console.log('filteredGames:', filteredGames);

  return (
    <>
      <main>
        <GenreCarousel onGenreSelect={setSelectedGenre} />
        <SearchBar onSearch={setSearchQuery} />
        {searchQuery ? (
          <SearchResults filteredGames={filteredGames} />
        ) : (
          <GameCatalog games={filteredGames} />
        )}
        <section id="JuegosPs3">
          <h2>Detalles del Juego</h2>
          <p>Aquí puedes mostrar más información sobre el juego seleccionado.</p>
        </section>
      </main>
    </>
  );
};

export default JuegosPs3;