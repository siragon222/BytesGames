import React, { useState, useContext, useEffect, useRef } from 'react';
import './Divisas.css';
import { CurrencyContext } from '../../context/CurrencyContext';

// Inline SVG for flags
const VenezuelaFlagSVG = (
  <svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
    <rect width="9" height="2" fill="#FCB103" />
    <rect y="2" width="9" height="2" fill="#0033A0" />
    <rect y="4" width="9" height="2" fill="#CF0921" />
    {/* Simplified stars - you can replace with actual star path */}
    <circle cx="4.5" cy="3" r="0.5" fill="white" />
  </svg>
);

const ColombiaFlagSVG = (
  <svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
    <rect width="9" height="3" fill="#FCD116" />
    <rect y="3" width="9" height="1.5" fill="#003893" />
    <rect y="4.5" width="9" height="1.5" fill="#CE1126" />
  </svg>
);

const ChileFlagSVG = (
  <svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
    <rect width="9" height="3" fill="#FFF" />
    <rect y="3" width="9" height="3" fill="#DA291C" />
    <rect width="3" height="3" fill="#0032A0" />
    <circle cx="1.5" cy="1.5" r="0.5" fill="white" />
  </svg>
);

const UsaFlagSVG = (
  <svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
    <rect width="9" height="6" fill="#FFF" />
    <rect y="0" width="9" height="0.85" fill="#B22234" />
    <rect y="1.7" width="9" height="0.85" fill="#B22234" />
    <rect y="3.4" width="9" height="0.85" fill="#B22234" />
    <rect y="5.1" width="9" height="0.85" fill="#B22234" />
    <rect width="3.6" height="3.4" fill="#3C3B6E" />
    {/* Simplified stars - you can add more detailed stars here */}
    <circle cx="0.8" cy="0.8" r="0.1" fill="white" />
    <circle cx="1.3" cy="0.8" r="0.1" fill="white" />
    <circle cx="0.8" cy="1.2" r="0.1" fill="white" />
    <circle cx="1.3" cy="1.2" r="0.1" fill="white" />
  </svg>
);

const PeruFlagSVG = (
  <svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
    <rect width="9" height="6" fill="#D91023"/>
    <rect x="3" width="3" height="6" fill="#FFF"/>
    <rect x="6" width="3" height="6" fill="#D91023"/>
  </svg>
);

const Divisas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming 768px as mobile breakpoint
  const { selectedCurrency, updateCurrency } = useContext(CurrencyContext);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currencyOptions = [
    { name: 'Venezuela', code: 'BS', flag: VenezuelaFlagSVG, factor: 138 },
    { name: 'Colombia', code: 'COP', flag: ColombiaFlagSVG, factor: 4000 }, // Example factor
    { name: 'Chile', code: 'CLP', flag: ChileFlagSVG, factor: 4000 }, // Example factor
    { name: 'Peru', code: 'PEN', flag: PeruFlagSVG, factor: 3.8 }, // Example factor, ensure to update with actual
    { name: 'USA', code: 'USD', flag: UsaFlagSVG, factor: 1 }, // Base currency
  ];

  const currentCurrency = currencyOptions.find(opt => opt.code === selectedCurrency.code);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencySelect = (currency) => {
    updateCurrency(currency);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="divisas-container" ref={dropdownRef}>
      <button className="currency-button" onClick={toggleDropdown}>
        <span className="currency-flag">{currentCurrency.flag}</span>
        {selectedCurrency.symbol}
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className={isMobile ? "currency-modal" : "currency-dropdown"}>
          {currencyOptions.map((option) => (
            <li key={option.code} onClick={() => handleCurrencySelect(option)}>
              <span className="currency-flag">{option.flag}</span>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Divisas;