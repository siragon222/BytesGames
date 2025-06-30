import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Importar íconos de lupa y X
import { useNavigate, useLocation } from 'react-router-dom'; // Importar useNavigate y useLocation para la redirección y detección de ruta
import './SearchBar.css'; // Importamos el archivo CSS para los estilos

const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState(''); // Estado para el texto de búsqueda
  const navigate = useNavigate(); // Hook para la navegación
  const location = useLocation(); // Hook para obtener la ruta actual
  const inputRef = useRef<HTMLInputElement>(null); // Crear una referencia para el input

  const handleClick = () => {
    if (isExpanded) {
      setSearchText(''); // Clear search text when closing
    }
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text); // Actualizar el estado del texto de búsqueda
    if (text) {
      navigate(`/ResultSearch?q=${encodeURIComponent(text)}`); // Redirigir con el término de búsqueda
    } else {
      navigate('/ResultSearch'); // Redirigir a /ResultSearch sin término de búsqueda
    }
  };

  // Efecto para restablecer la barra de búsqueda cuando la ruta no es /ResultSearch
  useEffect(() => {
    if (location.pathname !== '/ResultSearch') {
      setIsExpanded(false);
      setSearchText('');
    }
  }, [location.pathname]);

  // Efecto para enfocar el input cuando se expande
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  return (
    <div className={`search-container ${isExpanded ? 'is-expanded' : ''}`}>
      <input
        type="text"
        placeholder="Buscar..."
        className={`search-input ${isExpanded ? 'expanded' : ''}`}
        onChange={handleInputChange} // Manejar el cambio en el input
        value={searchText} // Controlar el valor del input
        ref={inputRef} // Asignar la referencia al input
      />
      <button className="search-button" onClick={handleClick}>
        {isExpanded ? <FaTimes aria-label="close" /> : <FaSearch aria-label="search" />}
      </button>
    </div>
  );
};

export default SearchBar; 