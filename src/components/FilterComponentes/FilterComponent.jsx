import React, { useState, useContext, useEffect } from 'react';
import './FilterComponent.css';
import { CurrencyContext } from '../../context/CurrencyContext';

const FilterComponent = ({ onFilterChange }) => {
  const [consoles, setConsoles] = useState([]);
  const [genres, setGenres] = useState([]);
  const [sortBy, setSortBy] = useState([]);
  const { selectedCurrency } = useContext(CurrencyContext);

  const initialMaxPrice = 200 * selectedCurrency.factor;
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [collapsedSections, setCollapsedSections] = useState({});
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const newMaxPrice = 200 * selectedCurrency.factor;
    setPriceRange(prev => ({
      min: prev.min === '' ? '' : prev.min,
      max: newMaxPrice,
    }));
    onFilterChange({
      consoles,
      genres,
      sortBy,
      priceRange: {
        min: (priceRange.min === '' ? 0 : parseFloat(priceRange.min)),
        max: newMaxPrice,
      },
    });
  }, [selectedCurrency]);

  const handleConsolesChange = (e) => {
    const value = e.target.value;
    setConsoles(prev => {
      const newConsoles = prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value];
      onFilterChange({ consoles: newConsoles, genres, sortBy, priceRange });
      return newConsoles;
    });
  };

  const handleGenresChange = (e) => {
    const value = e.target.value;
    setGenres(prev => {
      const newGenres = prev.includes(value) ? prev.filter(g => g !== value) : [...prev, value];
      onFilterChange({ consoles, genres: newGenres, sortBy, priceRange });
      return newGenres;
    });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(prev => {
      const newSortBy = prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value];
      onFilterChange({ consoles, genres, sortBy: newSortBy, priceRange });
      return newSortBy;
    });
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prev => {
      const newPriceRange = { ...prev, [name]: value };

      const minVal = name === 'min' ? (value === '' ? 0 : parseFloat(value)) : (prev.min === '' ? 0 : parseFloat(prev.min));
      const maxVal = name === 'max' ? (value === '' ? (200 * selectedCurrency.factor) : parseFloat(value)) : (prev.max === '' ? (200 * selectedCurrency.factor) : parseFloat(prev.max));

      onFilterChange({ consoles, genres, sortBy, priceRange: { min: minVal, max: maxVal } });
      return newPriceRange;
    });
  };

  const resetFilters = () => {
    setConsoles([]);
    setGenres([]);
    setSortBy([]);
    setPriceRange({ min: '', max: '' });
    onFilterChange({ consoles: [], genres: [], sortBy: [], priceRange: { min: 0, max: 200 * selectedCurrency.factor } });
  };

  const toggleSection = (sectionName) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const toggleFilterVisibility = () => {
    setShowFilter(prev => !prev);
  };

  return (
    <div className="filter-wrapper">
      <button className="filter-toggle-button" onClick={toggleFilterVisibility}>
        <span className="filter-button-icon">&#9776;</span>
        Filtro
      </button>
      <div className={`filter-component ${showFilter ? '' : 'collapsed'}`}>
        <div className="filter-group">
          <div className="filter-section">
            <h3 onClick={() => toggleSection('consoles')}>Consolas</h3>
            <div className={`filter-content ${collapsedSections.consoles ? 'collapsed' : ''}`}>
              {['PS3', 'PS4', 'PS5', 'Xbox', '360', 'ONE', 'SERIES X', 'PC'].map(console => (
                <label key={console}>
                  <input
                    type="checkbox"
                    value={console}
                    checked={consoles.includes(console)}
                    onChange={handleConsolesChange}
                  />
                  {console}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3 onClick={() => toggleSection('genres')}>Género</h3>
            <div className={`filter-content genres ${collapsedSections.genres ? 'collapsed' : ''}`}>
              {[
                'Acción', 'Aventura', 'Arcades', 'Carreras', 'Deportes', 'Estrategia',
                'Fantasía', 'Horror', 'Lucha', 'Plataformas', 'Shooter', 'Simulación',
                'Wargame', 'RPG', 'MMO', 'Cooperativo', 'VR', 'Indies'
              ].map(genre => (
                <label key={genre}>
                  <input
                    type="checkbox"
                    value={genre}
                    checked={genres.includes(genre)}
                    onChange={handleGenresChange}
                  />
                  {genre}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3 onClick={() => toggleSection('sortBy')}>Ordenar por</h3>
            <div className={`filter-content ${collapsedSections.sortBy ? 'collapsed' : ''}`}>              
              <label>
                <input
                  type="checkbox"
                  value="stock"
                  checked={sortBy.includes('stock')}
                  onChange={handleSortChange}
                />
                Juegos en Stock
              </label>
              <label>
                <input
                  type="checkbox"
                  value="nuevo"
                  checked={sortBy.includes('nuevo')}
                  onChange={handleSortChange}
                />
                Juegos Nuevos
              </label>
              <label>
                <input
                  type="checkbox"
                  value="listadaDlc"
                  checked={sortBy.includes('listadaDlc')}
                  onChange={handleSortChange}
                />
                Juegos con DLC
              </label>
              <label>
                <input
                  type="checkbox"
                  value="asc"
                  checked={sortBy.includes('asc')}
                  onChange={handleSortChange}
                />
                Menor a Mayor
              </label>
              <label>
                <input
                  type="checkbox"
                  value="desc"
                  checked={sortBy.includes('desc')}
                  onChange={handleSortChange}
                />
                Mayor a Menor
              </label>
              <label>
                <input
                  type="checkbox"
                  value="pegiMenores"
                  checked={sortBy.includes('pegiMenores')}
                  onChange={handleSortChange}
                />
                PEGI Para Menores
              </label>
              <label>
                <input
                  type="checkbox"
                  value="pegiAdultos"
                  checked={sortBy.includes('pegiAdultos')}
                  onChange={handleSortChange}
                />
                PEGI Para Adultos
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h3>Rango de Precio</h3>
            <input
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceRangeChange}
              min={0 * selectedCurrency.factor}
              max={200 * selectedCurrency.factor}
              placeholder="DESDE"
            />
            <input
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceRangeChange}
              min={0 * selectedCurrency.factor}
              max={200 * selectedCurrency.factor}
              placeholder="HASTA"
            />
          </div>

          <button onClick={resetFilters} className="apply-filters-button">Restablecer Filtros</button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent; 