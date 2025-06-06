import React from 'react';

const FAQ = () => {
  return (
    <section id="ayuda">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {/* Ejemplo de pregunta */}
        <div className="faq-item">
          <h3>¿Qué métodos de pago aceptan?</h3>
          <p>Aceptamos tarjetas de crédito, PayPal y transferencias bancarias.</p>
        </div>
        {/* Repetir para otras preguntas */}
      </div>
      <button>Ver todas las FAQ</button>
    </section>
  );
};

export default FAQ; 