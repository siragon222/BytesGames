import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';
import Divisas from './Divisas/Divisas';
import './Header2.css';
import { Link } from 'react-router-dom';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header2">
      <div className="header2-container">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <nav>
          <div className="mobile-menu-icon" onClick={toggleMenu}>
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
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onClick={handleDropdownToggle}
            >
              <Link to="/categorias">Juegos</Link>
              {(isDropdownOpen || isMenuOpen) && <DropdownMenu />}
            </li>
            <li><Link to="/ofertas">Ofertas</Link></li>
            <li><Link to="/ayuda">Ayuda</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <SearchBar />
          <Divisas />
        </div>
      </div>
    </header>
  );
};

export default Header2; 