import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.svg';
import LogoMobil from '../assets/logoMobil.svg';
import SearchBar from './SearchBar';
import Divisas from './Divisas/Divisas';
import './Header2.css';
import { Link } from 'react-router-dom';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header2">
      <div className="header2-container">
        <div className="logo-container">
          <Link to="/">
            <img src={isMobile ? LogoMobil : Logo} alt="Logo" className={isMobile ? "logo-mobil" : ""} />
          </Link>
        </div>
        <nav ref={menuRef}>
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
            <li>
              <Link to="/ResultSearch" onClick={closeMenu}>Juegos</Link>
            </li>
            <li><Link to="/preguntasfrecuentes" onClick={closeMenu}>Ayuda</Link></li>
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