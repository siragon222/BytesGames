import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import GameCatalog from '../../DataBaseGames/GameCatalog';
import { games } from '../../DataBaseGames/GameDatabase';
import FilterComponent from '../../../components/FilterComponentes/FilterComponent';
import { CurrencyContext } from '../../../context/CurrencyContext';

const ResultSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedCurrency } = useContext(CurrencyContext); // Get selectedCurrency from context
  const [filters, setFilters] = useState({
    consoles: [],
    genres: [],
    sortBy: [],
    priceRange: { min: 0, max: 200 * selectedCurrency.factor }, // Initialize max with converted value
  });
  const location = useLocation();

  // Update filters.priceRange when selectedCurrency changes
  useEffect(() => {
    setFilters(prevFilters => ({
      ...prevFilters,
      priceRange: { min: 0, max: 200 * selectedCurrency.factor },
    }));
  }, [selectedCurrency]);

  // Obtener el término de búsqueda de la URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const term = queryParams.get('q') || '';
    setSearchTerm(term);
  }, [location.search]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filtrar los juegos basados en el término de búsqueda y los filtros aplicados
  const filteredGames = games.filter(game => {
    const matchesSearchTerm =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.platforms.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesConsole = filters.consoles.length === 0 || filters.consoles.some(console => game.platforms.includes(console));
    
    const gameGenres = game.genre.split(',').map(g => g.trim());
    const matchesGenre = filters.genres.length === 0 || filters.genres.some(filterGenre => gameGenres.includes(filterGenre));

    // Ensure game.price is a number before comparison. Remove '$' and parse.
    const gamePriceUSD = parseFloat(game.price.replace('$', ''));

    // Calculate effective price (considering discount)
    let effectiveGamePriceUSD = gamePriceUSD;
    if (game.discount && game.discount.length > 0 && game.discountDate) {
      const discountValue = parseFloat(game.discount.replace("%", "")) / 100;
      const discountEndDate = new Date(game.discountDate);
      const currentDate = new Date();

      if (currentDate < discountEndDate) {
        effectiveGamePriceUSD = gamePriceUSD * (1 - discountValue);
      }
    }

    const gamePriceConverted = effectiveGamePriceUSD * selectedCurrency.factor; // Convert effective game price to selected currency

    const matchesPrice = gamePriceConverted >= filters.priceRange.min && gamePriceConverted <= filters.priceRange.max;

    const matchesSortBy = filters.sortBy.length === 0 || filters.sortBy.every(sortOption => {
      if (sortOption === 'stock') {
        return game.stock === 'si';
      }
      if (sortOption === 'nuevo') {
        return game.nuevo === 'si';
      }
      if (sortOption === 'listadaDlc') {
        const hasDlcNumbers = (dlcString) => /\d/.test(dlcString);
        return hasDlcNumbers(game.ListadaDlcPs3) || hasDlcNumbers(game.ListadaDlcPs4) || hasDlcNumbers(game.ListadaDlcPs5);
      }
      if (sortOption === 'pegiMenores') {
        return ['PEGI 3', 'PEGI 7', 'PEGI 12'].includes(game.pegiRating);
      }
      if (sortOption === 'pegiAdultos') {
        return ['PEGI 16', 'PEGI 18'].includes(game.pegiRating);
      }
      return true;
    });

    return matchesSearchTerm && matchesConsole && matchesGenre && matchesPrice && matchesSortBy;
  });

  // Sorting logic based on price, if selected
  const sortedGames = [...filteredGames].sort((a, b) => {
    const getEffectivePrice = (gameObj) => {
      const priceUSD = parseFloat(gameObj.price.replace('$', ''));
      let effectivePriceUSD = priceUSD;
      if (gameObj.discount && gameObj.discount.length > 0 && gameObj.discountDate) {
        const discountValue = parseFloat(gameObj.discount.replace("%", "")) / 100;
        const discountEndDate = new Date(gameObj.discountDate);
        const currentDate = new Date();
        if (currentDate < discountEndDate) {
          effectivePriceUSD = priceUSD * (1 - discountValue);
        }
      }
      return effectivePriceUSD * selectedCurrency.factor;
    };

    const priceA = getEffectivePrice(a);
    const priceB = getEffectivePrice(b);

    if (filters.sortBy.includes('asc')) {
      return priceA - priceB;
    } else if (filters.sortBy.includes('desc')) {
      return priceB - priceA;
    }
    return 0;
  });

  return (
    <>
      <main>
        <FilterComponent onFilterChange={handleFilterChange} />
        <GameCatalog games={sortedGames} />
        <section id="ResultSearch">
        </section>
      </main>
    </>
  );
};

export default ResultSearch;