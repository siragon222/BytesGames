import React, { useState } from 'react';
import './PreguntasFrecuentePlus.css';

const PreguntasFrecuentePlus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué es PlayStation Plus?',
      answer: 'PlayStation Plus es un servicio de suscripción que mejora tu experiencia de juego en PlayStation, ofreciendo una variedad de beneficios como juegos mensuales, multijugador online, descuentos exclusivos y acceso a catálogos de juegos.',
    },
    {
      question: '¿Cuáles son los diferentes niveles de suscripción de PlayStation Plus?',
      answer: 'Actualmente, PlayStation Plus ofrece tres niveles de suscripción: Essential, Extra y Premium/Deluxe, cada uno con diferentes beneficios y catálogos de juegos.',
    },
    {
      question: '¿Qué juegos se incluyen con mi suscripción a PlayStation Plus?',
      answer: 'Los juegos incluidos varían según el nivel de suscripción y se actualizan regularmente. Los suscriptores de Essential obtienen juegos mensuales, mientras que Extra y Premium/Deluxe acceden a catálogos más extensos.',
    },
    {
      question: '¿Puedo jugar online sin PlayStation Plus?',
      answer: 'Para la mayoría de los juegos multijugador online en consolas PlayStation, se requiere una suscripción activa a PlayStation Plus.',
    },
    {
      question: '¿Cómo puedo gestionar o cancelar mi suscripción?',
      answer: 'Puedes gestionar o cancelar tu suscripción a PlayStation Plus directamente desde la configuración de tu cuenta en tu consola PlayStation o a través del sitio web de PlayStation.',
    },
    {
      question: '¿Qué sucede con mis juegos si cancelo mi suscripción?',
      answer: 'Si cancelas tu suscripción, perderás el acceso a los juegos que hayas descargado a través de los catálogos de juegos de PlayStation Plus (Extra y Premium/Deluxe). Sin embargo, los juegos mensuales de Essential que hayas reclamado permanecerán accesibles mientras tengas una suscripción activa.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-plus-container">
      <h1>Preguntas Frecuentes sobre PlayStation Plus</h1>
      <div className="faq-plus-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-plus-item">
            <div className="faq-plus-question" onClick={() => handleToggle(index)}>
              <span className="question-plus-text">{faq.question}</span>
              <span className={`arrow-plus ${activeIndex === index ? 'up' : 'down'}`}></span>
            </div>
            {activeIndex === index && (
              <div className="faq-plus-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentePlus; 