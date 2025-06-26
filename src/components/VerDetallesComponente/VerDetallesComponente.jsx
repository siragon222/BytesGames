import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const gameName = searchParams.get('q');
  const { selectedGame, setSelectedGame } = useContext(GameContext);
  const [selectedConsole, setSelectedConsole] = useState(null);

  React.useEffect(() => {
    if (gameName) {
      const formattedGameName = gameName.replace(/-/g, ' ');
      const game = games.find(g => g.title.toLowerCase() === formattedGameName.toLowerCase());
      const dlc = dlcGames.find(d => d.title.toLowerCase() === formattedGameName.toLowerCase());

      if (game) {
        setSelectedGame(game);
      } else if (dlc) {
        setSelectedGame(dlc);
      }
    }
  }, [gameName, setSelectedGame]);

  const handleConsoleChange = (console) => {
    setSelectedConsole(console);
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
                      content={[dlc.descripcionContenido]}
                      price={dlc.price}
                    />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
        <div className="contenedor-derecha">
          <SeleccionaComponente game={selectedGame} onConsoleSelect={handleConsoleChange} />
        </div>
      </div>
      <SliderRecomendados selectedGame={selectedGame} />
    </div>
  );
};

export default VerDetallesComponente;