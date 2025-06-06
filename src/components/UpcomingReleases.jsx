import React from 'react';

const UpcomingReleases = () => {
  return (
    <section id="lanzamientos">
      <h2>Próximos Lanzamientos</h2>
      <div className="release-cards">
        {/* Ejemplo de lanzamiento */}
        <div className="release-card">
          <img src="ruta/a/imagen.jpg" alt="Próximo Lanzamiento" />
          <h3>Título del Juego</h3>
          <p>Fecha de Lanzamiento: 15/10/2023</p>
          <button>Pre-ordenar</button>
        </div>
        {/* Repetir para otros lanzamientos */}
      </div>
      <button>Ver todos los próximos lanzamientos</button>
    </section>
  );
};

export default UpcomingReleases; 