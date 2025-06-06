import React from 'react';
import './FiltroComponente.css'; // Importa el archivo CSS si lo necesitas
import Dropdown from './Dropdown'; // Importa el componente Dropdown
import Checkboxx from './Checkboxx'; // Importa el componente Checkboxx

const FiltroComponente = ({ children }) => {
  return (
    <div className="filtro-componente">
      <h2>Filtro Componente</h2>
      <div className="filtro-opciones">
        <Dropdown id="dropdown1" label="CONSOLAS" />
        <Dropdown id="dropdown2" label="GENERO" />
        <Dropdown id="dropdown3" label="ORDENAR POR:" />
        <Checkboxx />
        <Checkboxx />
        {children}
      </div>
    </div>
  );
};

export default FiltroComponente;