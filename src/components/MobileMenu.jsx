import React, { useState } from 'react';
import './Header.css'; // Importar el archivo CSS para el header
import DropdownMenu from './DropdownMenu';
import './DropdownMenu.css';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el submenú desplegable

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {/* Ícono de hamburguesa personalizado */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={`mobile-nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#destacados" onClick={closeMenu}>Destacados</a></li>
          <li 
            className="dropdown" 
            onClick={toggleDropdown}
          >
            <a href="#categorias" onClick={closeMenu}>
              Juegos <span className="dropdown-icon">▼</span>
            </a>
            {isDropdownOpen && (
              <div className="dropdown-menu-container">
                <DropdownMenu />
              </div>
            )}
          </li>
          <li><a href="#ofertas" onClick={closeMenu}>Ofertas</a></li>
          <li><a href="#lanzamientos" onClick={closeMenu}>Próximos Lanzamientos</a></li>
          <li><a href="#opiniones" onClick={closeMenu}>Opiniones</a></li>
          <li><a href="#ayuda" onClick={closeMenu}>Ayuda</a></li>
          <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;