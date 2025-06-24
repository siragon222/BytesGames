import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import GaleriaFotosDLC from './GaleriaFotosDLC/GaleriaFotosDLC';
import PortadaComponente from '../PortadaComponente/PortadaComponente';
import DescripcionDLC from './DescripcionDLC/DescripcionDLC';
import SeleccionaDLC from './SeleccionaDLC/SeleccionaDLC';
import { GameContext } from '../../context/GameContext';
import { dlcGames } from '../../WebLinks/DataBaseGames/DLCdatabase';
import './VerDetallesDLC.css';

const VerDetallesDLC = () => {
  const [searchParams] = useSearchParams();
  const dlcId = parseInt(searchParams.get('id'));
  const { selectedGame, setSelectedGame } = useContext(GameContext);

  React.useEffect(() => {
    if (dlcId) {
      const dlc = dlcGames.find(d => d.id === dlcId);
      if (dlc) {
        setSelectedGame(dlc);
      } else {
        setSelectedGame(null);
      }
    }
  }, [dlcId, setSelectedGame]);

  if (!selectedGame) {
    return <div>No se ha seleccionado ningún DLC.</div>;
  }

  if (selectedGame.type !== 'dlc') {
    return <div>El elemento seleccionado no es un DLC válido.</div>;
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
          <GaleriaFotosDLC fotos={fotos} />
          <DescripcionDLC descripcion={selectedGame.descripcionContenido} />
        </div>
        <div className="contenedor-derecha">
          <SeleccionaDLC game={selectedGame} />
        </div>
      </div>
    </div>
  );
};

export default VerDetallesDLC; 