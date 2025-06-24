import React, { useState, useContext } from 'react';
import './SeleccionaDLC.css'; // Updated import for DLC-specific CSS
import PlayStationIcon from '../../../assets/playstation.svg';
import XboxIcon from '../../../assets/xbox.svg';
import PcIcon from '../../../assets/pc.svg';
import { CurrencyContext } from '../../../context/CurrencyContext';

const SeleccionaDLC = ({ game }) => { // Recibir game como prop
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedPlayStationConsole, setSelectedPlayStationConsole] = useState(null);
  const [selectedXboxConsole, setSelectedXboxConsole] = useState(null);
  const [selectedPcLauncher, setSelectedPcLauncher] = useState(null);
  const [selectedEdition, setSelectedEdition] = useState('');
  const [selectedLicense, setSelectedLicense] = useState('');
  const { selectedCurrency } = useContext(CurrencyContext);

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

  const currentPlatform = selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher || (selectedPlatform === 'PC' && game.editions.PC ? 'PC' : selectedPlatform);
  const editionPrices = game.editions;

  const platformLicenses = currentPlatform ? Object.keys(game.licensePrices[currentPlatform] || {}) : [];

  const licensePrices = game.licensePrices;

  const getEditionDescription = () => {
    if (currentPlatform && selectedEdition) {
      return `${editionPrices[currentPlatform][selectedEdition].description} Precio: ${selectedCurrency.symbol} ${(editionPrices[currentPlatform][selectedEdition].price * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }
    return '';
  };

  return (
    <div className="selecciona-componente">
      <h1 className="game-title">{game ? game.title : 'Cargando...'}</h1>
      <hr className="divider" />
      {/* Removed PlayStation Plus button as DLCs don't seem to have this property */}
      {game && game.stock === 'no' ? (
        <div className="out-of-stock-container">
          {/* Removed MandoFailSearch image as it's not relevant for DLCs */}
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
          {game && ['Steam', 'Origin', 'Epic Games'].filter(launcher => game.editions[launcher]).map((launcher) => (
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

      {(selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher || (selectedPlatform === 'PC' && game.editions.PC)) && (
        <div className="edition-section">
          <h3 className="section-title">Selecciona tu edición</h3>
          <select 
            className="edition-select"
            onChange={handleEditionChange} 
            value={selectedEdition}
          >
            <option value="">Selecciona una edición</option>
            {Object.entries(editionPrices[currentPlatform] || {}).map(([edition, details]) => (
              <option key={edition} value={edition}>
                {edition} - <span className="price-text">{selectedCurrency.symbol} {(details.price * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </option>
            ))}
          </select>
          {selectedEdition && (
            <p className="edition-description">
              {editionPrices[currentPlatform][selectedEdition].description} Precio: <span className="price-text">{selectedCurrency.symbol} {(editionPrices[currentPlatform][selectedEdition].price * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </p>
          )}
        </div>
      )}

      {(selectedPlayStationConsole || selectedXboxConsole || selectedPcLauncher || (selectedPlatform === 'PC' && game.editions.PC)) && (
        <div className="license-section">
          <h3 className="section-title">Selecciona tu licencia</h3>
          <div className="license-buttons">
            {platformLicenses.map((license) => (
              <button 
                key={license}
                className={`license-button ${selectedLicense === license ? 'active' : ''}`}
                onClick={() => handleLicenseSelect(license)}
              >
                {license} – <span className="price-text">{selectedCurrency.symbol} {(licensePrices[currentPlatform][license].price * selectedCurrency.factor).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </button>
            ))}
          </div>
          {selectedLicense && <p className="license-description">Licencia seleccionada: {selectedLicense} - {licensePrices[currentPlatform][selectedLicense].description}</p>}
        </div>
      )}

      <div className="game-details">
        <h3 className="section-title">Detalles del DLC</h3>
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