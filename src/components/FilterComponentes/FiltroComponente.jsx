import React from 'react';
import './FiltroComponente.css'; // Importa el archivo CSS si lo necesitas
import Dropdown from './Dropdown'; // Importa el componente Dropdown
import Checkboxx from './Checkboxx'; // Importa el componente Checkboxx

const FiltroComponente = ({ children }) => {
  return (
    <div className="filtro-componente">
      <h2>Filtro Componente</h2>
      <div className="filtro-opciones">
        <Dropdown id="dropdown1" label="CONSOLAS" items={['PS3', 'PS4', 'PS5', 'Xbox', '360', 'ONE', 'SERIES X']} />
        <Dropdown id="dropdown2" label="GENERO" items={['Acción', 'Aventura', 'RPG', 'Estrategia', 'Deportes']} />
        <Dropdown id="dropdown3" label="ORDENAR POR:" items={['Más Relevantes', 'Precio: Menor a Mayor', 'Precio: Mayor a Menor', 'Más Recientes']} />
        <Checkboxx />
        <Checkboxx />
        {children}
      </div>
    </div>
  );
};

export default FiltroComponente;