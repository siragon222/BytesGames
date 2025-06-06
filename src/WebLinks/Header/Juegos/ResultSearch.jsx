import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GameCatalog from '../../DataBaseGames/GameCatalog';
import { games } from '../../DataBaseGames/GameDatabase';
import FiltroComponente from '../../../components/FilterComponentes/FiltroComponente';
import Dropdown from '../../../components/FilterComponentes/Dropdown';

const ResultSearch = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  // Obtener el término de búsqueda de la URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const term = queryParams.get('q') || '';
    setSearchTerm(term);
  }, [location.search]);

  // Filtrar los juegos basados en el término de búsqueda y el género seleccionado
  const filteredGames = games.filter(game => {
    const matchesSearchTerm = 
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.platforms.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenre = selectedGenre ? game.genre === selectedGenre : true;

    return matchesSearchTerm && matchesGenre;
  });

  return (
    <>
      <main>
        <FiltroComponente />
        <GameCatalog games={filteredGames} />
        <Dropdown id="dropdown5" />   
        <section id="ResultSearch">
        </section>
      </main>
    </>
  );
};

export default ResultSearch;