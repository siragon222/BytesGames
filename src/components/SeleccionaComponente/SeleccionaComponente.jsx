import React, { useState, useContext } from 'react';
import './SeleccionaComponente.css'; // Importar el archivo CSS para estilos
import PlayStationIcon from '../../assets/playstation.svg';
import XboxIcon from '../../assets/xbox.svg';
import PcIcon from '../../assets/pc.svg';
import PlayStationPlusIcon from '../../assets/playstation-plus-logo2.svg';
import MandoFailSearch from '../../assets/mando_fail_seach.svg'; // Import the new SVG
import { CurrencyContext } from '../../context/CurrencyContext';
import Countdown from '../Countdown'; // Import the new Countdown component

const SeleccionaComponente = ({ game, onConsoleSelect }) => { // Recibir game como prop y add onConsoleSelect prop
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedPlayStationConsole, setSelectedPlayStationConsole] = useState(null); // New state for specific PlayStation consoles
  const [selectedXboxConsole, setSelectedXboxConsole] = useState(null); // New state for specific Xbox consoles
  const [selectedPcLauncher, setSelectedPcLauncher] = useState(null); // New state for specific PC launchers
  const [selectedEdition, setSelectedEdition] = useState('');
  const [selectedLicense, setSelectedLicense] = useState('');
  const { selectedCurrency } = useContext(CurrencyContext);

  // Add new state for tracking offer end
  const [hasOfferEnded, setHasOfferEnded] = useState(false);

  // Get discount and discountDate from game prop
  const gameDiscount = game.discount ? parseFloat(game.discount.replace("%", "")) / 100 : 0;
  const gameDiscountDate = game.discountDate;

  // Helper function to calculate discounted price
  const calculatePrice = (originalPrice, itemDiscountAllowed) => {
    if (hasOfferEnded) {
      // If the offer has ended, no discount applies, show original price
      return { original: originalPrice, discounted: originalPrice, hasDiscount: false };
    }

    // If the offer has not ended, apply discount if conditions are met
    if (gameDiscount > 0 && itemDiscountAllowed === 'yes' && new Date() < new Date(gameDiscountDate)) {
      const discounted = originalPrice * (1 - gameDiscount);
      return { original: originalPrice, discounted: discounted, hasDiscount: true };
    }
    
    // No discount applies
    return { original: originalPrice, discounted: originalPrice, hasDiscount: false };
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setSelectedEdition(''); // Resetear la edición seleccionada al cambiar de plataforma
    setSelectedLicense(''); // Resetear la licencia seleccionada al cambiar de plataforma
    setSelectedPlayStationConsole(null); // Unconditionally reset PS console selection
    setSelectedXboxConsole(null); // Unconditionally reset Xbox console selection
    setSelectedPcLauncher(null); // Unconditionally reset PC launcher selection
  };

  const handlePlayStationConsoleSelect = (consoleType) => {
    setSelectedPlayStationConsole(consoleType);
    setSelectedEdition('');
    setSelectedLicense('');
    onConsoleSelect(consoleType); // Notify parent of console selection
  };

  const handleXboxConsoleSelect = (consoleType) => {
    setSelectedXboxConsole(consoleType);
    setSelectedEdition('');
    setSelectedLicense('');
    onConsoleSelect(consoleType); // Notify parent of console selection
  };

  const handlePcLauncherSelect = (launcher) => {
    setSelectedPcLauncher(launcher);
    setSelectedEdition('');
    setSelectedLicense('');
    onConsoleSelect(launcher); // Notify parent of launcher selection
  };

  const handleEditionChange = (event) => {
    setSelectedEdition(event.target.value);
  };

  const handleLicenseSelect = (license) => {
    setSelectedLicense(license);
  };

  // Precios y descripciones de ediciones por plataforma (usar los datos del juego)
  const currentPlatformKey = selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher;

  const editionPrices = (selectedPlatform === 'PC' && selectedPcLauncher)
    ? (game.editions.PC && game.editions.PC[selectedPcLauncher])
    : game.editions[currentPlatformKey];

  // Licencias disponibles por plataforma (usar los datos del juego)
  const licensePricesData = (selectedPlatform === 'PC' && selectedPcLauncher)
    ? (game.licensePrices.PC && game.licensePrices.PC[selectedPcLauncher])
    : game.licensePrices[currentPlatformKey];

  const platformLicenses = currentPlatformKey ? Object.keys(licensePricesData || {}) : [];

  const getEditionDescription = () => {
    if (currentPlatformKey && selectedEdition) {
      const edition = editionPrices[selectedEdition];
      const prices = calculatePrice(edition.price, edition.discount);
      return `${edition.description} Precio: ${selectedCurrency.symbol}${prices.hasDiscount ? `<span style="text-decoration: line-through; margin-right: 10px; font-weight: medium; color: #888;">${(prices.original * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span> ` : ''}${selectedCurrency.symbol}${(prices.discounted * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }
    return '';
  };

  return (
    <div className="selecciona-componente">
      <h1 className="game-title">{game ? game.title : 'Cargando...'}</h1> {/* Usar el título del juego */}

      {game && game.PlystationPlus === 'si' && (
        <button
          className="playstation-plus-button"
          onClick={() => alert('¡Este juego incluye beneficios de PlayStation Plus!')}
        >
          <img src={PlayStationPlusIcon} alt="PlayStation Plus" />
        </button>
      )}

      <hr className="divider" />

      {game && game.releaseDate && game.releaseDate.trim() !== '' && (
        <div className="offer-countdown-section">
          <Countdown 
            releaseDate={game.releaseDate}
            onOfferEnd={() => setHasOfferEnded(true)} // Callback to set hasOfferEnded to true
          />
        </div>
      )}

      {game && game.stock === 'no' ? (
        <div className="out-of-stock-container">
          <img src={MandoFailSearch} alt="Producto Agotado" className="out-of-stock-image" />
          <p className="out-of-stock-message">¡Atención! Este producto está agotado. Revisa más tarde o contacta con SOPORTE para RESERVACIONES.</p>
        </div>
      ) : (
        <>
          <h2 className="section-title">Selecciona tu Plataforma</h2>
          <div className="platform-buttons">
            {game.editions.PlayStation && (
              <button 
                className={`platform-button ${selectedPlatform === 'PlayStation' ? 'active' : ''}`}
                onClick={() => handlePlatformSelect('PlayStation')}
              >
                <img src={PlayStationIcon} alt="PlayStation" />
                <span>PlayStation</span>
              </button>
            )}
            {game.editions.Xbox && (
              <button 
                className={`platform-button ${selectedPlatform === 'Xbox' ? 'active' : ''}`}
                onClick={() => handlePlatformSelect('Xbox')}
              >
                <img src={XboxIcon} alt="Xbox" />
                <span>Xbox</span>
              </button>
            )}
            {game.editions.PC && (
              <button 
                className={`platform-button ${selectedPlatform === 'PC' ? 'active' : ''}`}
                onClick={() => handlePlatformSelect('PC')}
              >
                <img src={PcIcon} alt="PC" />
                <span>PC</span>
              </button>
            )}
          </div>
        </>
      )}

      {selectedPlatform === 'PlayStation' && (
        <div className="playstation-console-buttons">
          <h3 className="section-title">Selecciona tu Consola PlayStation</h3>
          {game && ['PS3', 'PS4', 'PS5'].filter(consoleType => game.editions[consoleType]).map((consoleType) => (
            <button
              key={consoleType}
              className={`platform-button ${selectedPlayStationConsole === consoleType ? 'active' : ''}`}
              onClick={() => handlePlayStationConsoleSelect(consoleType)}
            >
              <span>{consoleType}</span>
            </button>
          ))}
        </div>
      )}

      {selectedPlatform === 'Xbox' && (
        <div className="xbox-console-buttons">
          <h3 className="section-title">Selecciona tu Consola Xbox</h3>
          {game && ['Xbox 360', 'xbox One', 'xbox Series X'].filter(consoleType => game.editions[consoleType]).map((consoleType) => (
            <button
              key={consoleType}
              className={`platform-button ${selectedXboxConsole === consoleType ? 'active' : ''}`}
              onClick={() => handleXboxConsoleSelect(consoleType)}
            >
              <span>{consoleType.replace('Xbox ', '')}</span>
            </button>
          ))}
        </div>
      )}

      {selectedPlatform === 'PC' && (
        <div className="pc-launcher-buttons">
          <h3 className="section-title">Selecciona tu Launcher de PC</h3>
          {game && ['Steam', 'Origin', 'Epic Games'].filter(launcher => game.editions.PC && game.editions.PC[launcher]).map((launcher) => (
            <button
              key={launcher}
              className={`platform-button ${selectedPcLauncher === launcher ? 'active' : ''}`}
              onClick={() => handlePcLauncherSelect(launcher)}
            >
              <span>{launcher}</span>
            </button>
          ))}
        </div>
      )}

      {(selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher) && (
        <div className="license-section">
          <h3 className="section-title">Selecciona tu licencia</h3>
          <div className="license-buttons">
            {platformLicenses.map((license) => {
              const isSecondary = license === 'Secundaria';
              const licenseDetail = licensePricesData[license];
              
              if (!licenseDetail) return null; // Handle cases where licenseDetail might be undefined

              const prices = calculatePrice(licenseDetail.price, licenseDetail.discount);
              return (
                <button 
                  key={license}
                  className={`license-button ${selectedLicense === license ? 'active' : ''}`}
                  onClick={() => handleLicenseSelect(license)}
                >
                  <div className="license-text">{license}</div>
                  <span className="price-text">
                    {prices.hasDiscount && 
                      <span style={{ textDecoration: 'line-through', marginRight: '10px', fontWeight: 'medium', color: '#888' }}>
                        {selectedCurrency.symbol}{(prices.original * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </span>
                    }
                    {selectedCurrency.symbol}{(prices.discounted * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </span>
                  {selectedLicense === license && (
                    <p className="license-description-in-button">{licenseDetail.description}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {(selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher) && (
        <div className="edition-section">
          <h3 className="section-title">Selecciona tu edición</h3>
          <div className="license-buttons">
            {Object.entries(editionPrices || {}).map(([edition, details]) => {
              const prices = calculatePrice(details.price, details.discount);
              return (
                <button 
                  key={edition}
                  className={`license-button ${selectedEdition === edition ? 'active' : ''}`}
                  onClick={() => handleEditionChange({ target: { value: edition } })}
                >
                  <div className="edition-text">{edition}</div>
                  <span className="price-text">
                    {prices.hasDiscount && 
                      <span style={{ textDecoration: 'line-through', marginRight: '10px', fontWeight: 'medium', color: '#888' }}>
                        {selectedCurrency.symbol}{(prices.original * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </span>
                    }
                    {selectedCurrency.symbol}{(prices.discounted * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </span>
                  {selectedEdition === edition && (
                    <p className="edition-description-in-button">{details.description}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="game-details">
        <h3 className="section-title">Detalles del juego</h3>
        <p><span className="detail-title">Puntuación:</span> <span className="detail-info">{game.pegiRating || 'N/A'}</span></p>
        <p><span className="detail-title">Desarrollador:</span> <span className="detail-info">{game.developer || 'N/A'}</span></p>
        <p><span className="detail-title">Distribuidor:</span> <span className="detail-info">{game.publisher || 'N/A'}</span></p>
        <p><span className="detail-title">Fecha de lanzamiento:</span> <span className="detail-info">{game.releaseDate || 'N/A'}</span></p>
        <p><span className="detail-title">Género:</span> <span className="detail-info">{game.genre || 'N/A'}</span></p>
      </div>
    </div>
  );
};

export default SeleccionaComponente;