import React from 'react';

const Offers = () => {
  return (
    <section id="ofertas">
      <h2>Ofertas y Promociones</h2>
      <div className="offer-cards">
        {/* Ejemplo de oferta */}
        <div className="offer-card">
          <img src="ruta/a/imagen.jpg" alt="Oferta Especial" />
          <h3>Oferta Especial</h3>
          <p>Precio Original: $69.99</p>
          <p>Precio con Descuento: $49.99</p>
          <button>Comprar Ahora</button>
        </div>
        {/* Repetir para otras ofertas */}
      </div>
      <button>Ver todas las ofertas</button>
    </section>
  );
};

export default Offers; 