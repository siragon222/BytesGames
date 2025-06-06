import React from 'react';

const Testimonials = () => {
  return (
    <section id="opiniones">
      <h2>Opiniones de Clientes</h2>
      <div className="testimonial-cards">
        {/* Ejemplo de testimonio */}
        <div className="testimonial-card">
          <p>"¡Increíble selección de juegos y excelente servicio al cliente!"</p>
          <h3>Nombre del Cliente</h3>
        </div>
        {/* Repetir para otros testimonios */}
      </div>
      <button>Leer todas las reseñas</button>
    </section>
  );
};

export default Testimonials; 