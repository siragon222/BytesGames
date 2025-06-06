import React, { useState } from 'react';

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="categorias">
      <h2>Categorías de Juegos</h2>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Ver Categorías
      </button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <div className="category-item">
          <h3>Acción</h3>
          <button>Explorar Acción</button>
        </div>
        <div className="category-item">
          <h3>Aventura</h3>
          <button>Explorar Aventura</button>
        </div>
        <div className="category-item">
          <h3>RPG</h3>
          <button>Explorar RPG</button>
        </div>
        <div className="category-item">
          <h3>Deportes</h3>
          <button>Explorar Deportes</button>
        </div>
      </div>
    </section>
  );
};

export default Categories; 