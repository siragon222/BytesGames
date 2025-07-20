import React, { useContext, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import GaleriaFotos from '../GaleriaFotos/GaleriaFotos';
import PortadaComponente from '../PortadaComponente/PortadaComponente';
import DescripcionComponente from '../DescripcionComponente/DescripcionComponente';
import SeleccionaComponente from '../SeleccionaComponente/SeleccionaComponente';
import { GameContext } from '../../context/GameContext';
import { games } from '../../WebLinks/DataBaseGames/GameDatabase';
import { dlcGames } from '../../WebLinks/DataBaseGames/DLCdatabase';
import DLC_Card from '../DLC_Card/DLC_Card';
import Regalos_Card from '../Regalos_Card/Regalos_Card';
import SliderRecomendados from '../SliderRecomendados/SliderRecomendados';
import './VerDetallesComponente.css';

const VerDetallesComponente = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const gameName = searchParams.get('q');
  const { selectedGame, setSelectedGame } = useContext(GameContext);
  const [selectedConsole, setSelectedConsole] = useState(null);
  const [selectedGiftGameForDisplay, setSelectedGiftGameForDisplay] = useState(null); // New state to hold the selected gift game for display
  const giftCardRef = React.useRef(null); // Create a ref for the gift card

  React.useEffect(() => {
    if (gameName) {
      const decodedGameName = decodeURIComponent(gameName);
      const normalizedDecodedGameName = decodedGameName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-');

      const game = games.find(g => g.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-') === normalizedDecodedGameName);
      const dlc = dlcGames.find(d => d.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-') === normalizedDecodedGameName);

      if (game) {
        setSelectedGame(game);
      } else if (dlc) {
        setSelectedGame(dlc);
      }
      setSelectedGiftGameForDisplay(null); // Reset selected gift game when gameName changes
    }
  }, [gameName, setSelectedGame]);

  // Scroll to the gift card when selectedGiftGameForDisplay changes and the ref is available
  React.useEffect(() => {
    if (selectedGiftGameForDisplay && giftCardRef.current) {
      giftCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedGiftGameForDisplay]);

  const handleConsoleChange = (console) => {
    setSelectedConsole(console);
    setSelectedGiftGameForDisplay(null); // Reset selected gift game display when console changes
  };

  const handleGiftGameSelect = (giftGame) => {
    setSelectedGiftGameForDisplay(giftGame); // Set the selected gift game object
    // Removed scroll logic from here
  };

  const getConsoleSpecificDLCs = () => {
    if (!selectedConsole || !selectedGame) return [];
    
    // Map the console names to their property names
    const consoleToPropertyMap = {
      'PS3': 'Ps3',
      'PS4': 'Ps4',
      'PS5': 'Ps5',
      'Xbox 360': 'Xbox360',
      'xbox One': 'XboxOne',
      'xbox Series X': 'XboxSeriesX'
    };
    
    const propertyName = consoleToPropertyMap[selectedConsole];
    if (!propertyName) return [];
    
    const dlcProperty = `ListadaDlc${propertyName}`;
    const dlcList = selectedGame[dlcProperty];
    
    if (!dlcList) return [];
    
    return dlcList.split(',').map(dlcId => {
      const dlc = dlcGames.find(d => d.id === parseInt(dlcId.trim()));
      return dlc;
    }).filter(Boolean);
  };

  const getConsoleSpecificGifts = () => {
    if (!selectedConsole || !selectedGame) return [];
    
    // Map the console names to their property names
    const consoleToPropertyMap = {
      'PS3': 'Ps3',
      'PS4': 'Ps4',
      'PS5': 'Ps5',
      'Xbox 360': 'Xbox360',
      'xbox One': 'XboxOne',
      'xbox Series X': 'XboxSeriesX'
    };
    
    const propertyName = consoleToPropertyMap[selectedConsole];
    if (!propertyName) return [];
    
    const giftProperty = `JuegosdeRegalo${propertyName}`;
    const giftList = selectedGame[giftProperty];
    
    if (!giftList) return [];
    
    return giftList.split(',').map(gameId => {
      const giftGame = games.find(g => g.id === parseInt(gameId.trim()));
      return giftGame;
    }).filter(Boolean);
  };

  const handleCardClick = (title) => {
    const formattedTitle = title.replace(/\s+/g, '-');
    navigate(`/detalles?q=${formattedTitle}`);
    window.location.reload();
  };

  if (!selectedGame) {
    return <div>No se ha seleccionado ningún juego.</div>;
  }

  const fotos = selectedGame.fotos || [
    'https://gaming-cdn.com/images/products/7152/screenshot/crash-bandicoot-4-it-s-about-time-xbox-one-xbox-series-x-s-juego-microsoft-store-europe-wallpaper-1.jpg?v=1737545938',
    'https://gaming-cdn.com/images/products/7152/screenshot/crash-bandicoot-4-it-s-about-time-xbox-one-xbox-series-x-s-juego-microsoft-store-europe-wallpaper-2.jpg?v=1737545938',
    'https://gaming-cdn.com/images/products/7152/screenshot/crash-bandicoot-4-it-s-about-time-xbox-one-xbox-series-x-s-juego-microsoft-store-europe-wallpaper-3.jpg?v=1737545938',
    'https://gaming-cdn.com/images/products/7152/screenshot/crash-bandicoot-4-it-s-about-time-xbox-one-xbox-series-x-s-juego-microsoft-store-europe-wallpaper-4.jpg?v=1737545938',
    'https://gaming-cdn.com/images/products/7152/screenshot/crash-bandicoot-4-it-s-about-time-xbox-one-xbox-series-x-s-juego-microsoft-store-europe-wallpaper-5.jpg?v=1737545938',
  ];

  const portadaUrl = selectedGame.portadaUrl || 'https://gaming-cdn.com/img/products/7173/pcover/1920x620/7173.jpg?v=1701338240';

  return (
    <div className="contenedor-principal">
      <PortadaComponente imagenUrl={portadaUrl} />
      <div className="contenedor-sobrepuesto">
        <div className="contenedor-izquierda">
          <GaleriaFotos fotos={fotos} />
          <DescripcionComponente descripcion={selectedGame.descripcionContenido} />
          
          {selectedGiftGameForDisplay && (
            <div ref={giftCardRef} className="selected-gift-card-wrapper"> {/* Attach ref here */}
              <Regalos_Card
                key={selectedGiftGameForDisplay.id}
                id={selectedGiftGameForDisplay.id}
                image={selectedGiftGameForDisplay.image}
                title={selectedGiftGameForDisplay.title}
                isHorizontal={true} // Assuming always horizontal when selected
                onButtonClick={() => handleCardClick(selectedGiftGameForDisplay.title)}
              />
            </div>
          )}

          {selectedGame.type === 'game' && (
            <div>
              {getConsoleSpecificGifts().length > 0 && (
                <div className="regalos-cards-container">
                  {getConsoleSpecificGifts().map((giftGame, index, array) => {
                    const totalGiftGames = array.length;
                    const isCardHorizontal = totalGiftGames <= 3;

                    return (
                      <Regalos_Card
                        key={giftGame.id}
                        id={giftGame.id}
                        image={giftGame.image}
                        title={giftGame.title}
                        isHorizontal={isCardHorizontal}
                        onButtonClick={() => handleCardClick(giftGame.title)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {selectedGame.type === 'game' && (
            <div>
              {getConsoleSpecificDLCs().length > 0 && (
                <>
                  <h3>DLCs disponibles:</h3>
                  {getConsoleSpecificDLCs().map(dlc => (
                    <DLC_Card
                      key={dlc.id}
                      id={dlc.id}
                      image={dlc.image}
                      name={dlc.title}
                      content={dlc.descripcionContenidoDlc}
                      price={dlc.price}
                      onButtonClick={() => handleCardClick(dlc.title)}
                    />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
        <div className="contenedor-derecha">
          <SeleccionaComponente
            game={selectedGame}
            onConsoleSelect={handleConsoleChange}
            onGiftGameSelect={handleGiftGameSelect} // Pass the new handler
          />
        </div>
      </div>
      <div className="recomendados-container">
        <div className="recomendados-wrapper">
          <SliderRecomendados selectedGame={selectedGame} />
          <h2>Juegos Similares</h2>
        </div>
      </div>
    </div>
  );
};

export default VerDetallesComponente;