import React, { useContext, useState } from 'react';
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
  const [selectedConsole, setSelectedConsole] = useState(null);

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

  const handleConsoleChange = (console) => {
    setSelectedConsole(console);
  };

  if (!selectedGame) {
    return <div>No se ha seleccionado ningún DLC.</div>;
  }

  if (selectedGame.type !== 'dlc') {
    return <div>El elemento seleccionado no es un DLC válido.</div>;
  }

  const fotos = selectedGame.fotos;

  const portadaUrl = selectedGame.portadaUrl;

  return (
    <div className="contenedor-principal">
      <PortadaComponente imagenUrl={portadaUrl} />
      <div className="contenedor-sobrepuesto">
        <div className="contenedor-izquierda">
          <GaleriaFotosDLC fotos={fotos} />
          <DescripcionDLC descripcion={selectedGame.descripcionContenido} />
        </div>
        <div className="contenedor-derecha">
          <SeleccionaDLC game={selectedGame} onConsoleSelect={handleConsoleChange} />
        </div>
      </div>
    </div>
  );
};

export default VerDetallesDLC; 