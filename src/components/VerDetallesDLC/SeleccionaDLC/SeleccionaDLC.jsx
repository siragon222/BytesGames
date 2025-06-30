import React, { useState, useContext } from 'react';
import './SeleccionaDLC.css'; // Updated import for DLC-specific CSS
import PlayStationIcon from '../../../assets/playstation.svg';
import XboxIcon from '../../../assets/xbox.svg';
import PcIcon from '../../../assets/pc.svg';
import PlayStationPlusIcon from '../../../assets/playstation-plus-logo2.svg';
import MandoFailSearch from '../../../assets/mando_fail_seach.svg';
import { CurrencyContext } from '../../../context/CurrencyContext';
import Countdown from '../../Countdown';
import { useNavigate } from 'react-router-dom';

const SeleccionaDLC = ({ game }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedPlayStationConsole, setSelectedPlayStationConsole] = useState(null);
  const [selectedXboxConsole, setSelectedXboxConsole] = useState(null);
  const [selectedPcLauncher, setSelectedPcLauncher] = useState(null);
  const [selectedEdition, setSelectedEdition] = useState('');
  const [selectedLicense, setSelectedLicense] = useState('');
  const { selectedCurrency } = useContext(CurrencyContext);
  const [hasOfferEnded, setHasOfferEnded] = useState(false);

  const dlcDiscount = game.discount ? parseFloat(game.discount.replace("%", "")) / 100 : 0;
  const dlcDiscountDate = game.discountDate;

  const calculatePrice = (originalPrice, itemDiscountAllowed) => {
    if (hasOfferEnded) {
      return { original: originalPrice, discounted: originalPrice, hasDiscount: false };
    }

    if (dlcDiscount > 0 && itemDiscountAllowed === 'yes' && new Date() < new Date(dlcDiscountDate)) {
      const discounted = originalPrice * (1 - dlcDiscount);
      return { original: originalPrice, discounted: discounted, hasDiscount: true };
    }
    
    return { original: originalPrice, discounted: originalPrice, hasDiscount: false };
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setSelectedEdition('');
    setSelectedLicense('');
    if (platform !== 'PlayStation') {
      setSelectedPlayStationConsole(null);
    }
    if (platform !== 'Xbox') {
      setSelectedXboxConsole(null);
    }
    if (platform !== 'PC') {
      setSelectedPcLauncher(null);
    }
  };

  const handlePlayStationConsoleSelect = (consoleType) => {
    setSelectedPlayStationConsole(consoleType);
    setSelectedEdition('');
    setSelectedLicense('');
  };

  const handleXboxConsoleSelect = (consoleType) => {
    setSelectedXboxConsole(consoleType);
    setSelectedEdition('');
    setSelectedLicense('');
  };

  const handlePcLauncherSelect = (launcher) => {
    setSelectedPcLauncher(launcher);
    setSelectedEdition('');
    setSelectedLicense('');
  };

  const handleEditionChange = (event) => {
    setSelectedEdition(event.target.value);
  };

  const handleLicenseSelect = (license) => {
    setSelectedLicense(license);
  };

  const currentPlatformKey = selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher || (selectedPlatform === 'PC' && game.editions.PC ? 'PC' : selectedPlatform);
  
  const editionPrices = (selectedPlatform === 'PC' && selectedPcLauncher)
  ? (game.editions.PC && game.editions.PC[selectedPcLauncher])
  : game.editions[currentPlatformKey];

  const licensePricesData = (selectedPlatform === 'PC' && selectedPcLauncher)
  ? (game.licensePrices.PC && game.licensePrices.PC[selectedPcLauncher])
  : game.licensePrices[currentPlatformKey];

  const platformLicenses = currentPlatformKey ? Object.keys(licensePricesData || {}) : [];
  
  const getEditionDescription = () => {
    if (currentPlatformKey && selectedEdition) {
      const edition = editionPrices[selectedEdition];
      const prices = calculatePrice(edition.price, edition.discount);
      return `${edition.description} ${selectedCurrency.symbol}${prices.hasDiscount ? `<span style="text-decoration: line-through; margin-right: 10px; font-weight: medium; color: #888;">${(prices.original * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span> ` : ''}${selectedCurrency.symbol}${(prices.discounted * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }
    return '';
  };

  const navigate = useNavigate();

  return (
    <div className="selecciona-componente">
      <h1 className="game-title">{game ? game.title : 'Cargando...'}</h1>

      {game && game.PlystationPlus === 'si' && ( // Apply conditional rendering for PlayStation Plus button
        <button
          className="playstation-plus-button"
          onClick={() => {
            navigate('/PreguntasFrecuentes#playstation-plus');
          }}
        >
          <img src={PlayStationPlusIcon} alt="PlayStation Plus" />
        </button>
      )}

      <hr className="divider" />

      {game && game.releaseDate && game.releaseDate.trim() !== '' && ( // Conditional rendering for Countdown
        <div className="offer-countdown-section">
          <Countdown 
            discountDate={dlcDiscountDate}
            onOfferEnd={() => setHasOfferEnded(true)}
          />
        </div>
      )}

      {game && game.stock === 'no' ? (
        <div className="out-of-stock-container">
          <img src={MandoFailSearch} alt="Producto Agotado" className="out-of-stock-image" />
          <p className="out-of-stock-message">¡Atención! Este DLC está agotado. Revisa más tarde o contacta con SOPORTE para RESERVACIONES.</p>
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
            {game.editions.PC && ( // Added PC platform button
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
          {game && ['Xbox 360', 'Xbox One', 'Xbox Series X'].filter(consoleType => game.editions[consoleType]).map((consoleType) => (
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

      {(selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher) && game.editions.Ocultar !== 'si' && ( // Conditional rendering for edition section and Ocultar
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

      {(selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher) && game.licensePrices.Ocultar !== 'si' && (
        <div className="license-section">
          <h3 className="section-title">Selecciona tu licencia</h3>
          <div className="license-buttons">
            {platformLicenses.map((license) => {
              const licenseDetail = licensePricesData[license];
              
              if (!licenseDetail) return null;

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
                    <p 
                      className="license-description-in-button"
                      dangerouslySetInnerHTML={{ __html: licenseDetail.description }}
                    ></p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {(selectedLicense || selectedEdition) && (
        <button className="hace-compra-button" onClick={handleWhatsAppClick}>
          <img src="/src/assets/buy.svg" alt="Buy" className="button-icon" />
          Hacer Compra
        </button>
      )}

      <div className="game-details">
        <p><span className="detail-title">Puntuación:</span> <span className="detail-info">{game.pegiRating || 'N/A'}</span></p>
        <p><span className="detail-title">Desarrollador:</span> <span className="detail-info">{game.developer || 'N/A'}</span></p>
        <p><span className="detail-title">Distribuidor:</span> <span className="detail-info">{game.publisher || 'N/A'}</span></p>
        <p><span className="detail-title">Fecha de lanzamiento:</span> <span className="detail-info">{game.releaseDate || 'N/A'}</span></p>
        <p><span className="detail-title">Género:</span> <span className="detail-info">{game.genre || 'N/A'}</span></p>
      </div>
    </div>
  );
};

export default SeleccionaDLC; 