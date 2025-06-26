import React, { useState, useEffect } from 'react';
import './PreguntasFrecuentes.css';
import { useLocation } from 'react-router-dom';
import PlayStationPlusLogo from '../../assets/playstation-plus-logo.svg';

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const faqIndex = faqs.findIndex(faq => faq.id === id);
      if (faqIndex !== -1) {
        setActiveIndex(faqIndex);
        // Scroll to the element
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Small delay to ensure element is rendered
      }
    }
  }, [location.hash]);

  const faqs = [
    {
      id: 'cuenta-principal',
      question: "¿Qué significa \"CUENTA PRINCIPAL\"?",
      answer: (
        <>
          Una Cuenta Principal en una PS4 o PS5 es aquella que permite acceder y jugar a los juegos descargados desde cualquier otra cuenta en la misma consola, sin ninguna restricción; permitiendo poder ganar trofeos con tu usuario.
          <br /><br />
          Además, el juego asociado a esta cuenta es elegible para ser cambiado por otro del catálogo.
        </>
      ),
    },
    {
      id: 'cuenta-secundaria',
      question: "¿Qué significa \"CUENTA SECUNDARIA\"?",
      answer: (
        <>
          Una Cuenta Secundaria en una PS4 o PS5 es aquella en la que se debe jugar el juego directamente desde la cuenta proporcionada.
          <br /><br />
          Esta opción es ideal para aquellos que buscan solo disfrutar sus juegos favoritos sin exceder en gastos; el juego asociado a esta cuenta también es elegible para ser cambiado por otro del catálogo.
        </>
      ),
    },
    {
      id: 'alquiler',
      question: "¿Qué significa \"ALQUILER\"?",
      answer: (
        <>
          El alquiler de una cuenta en una PS4 o PS5 permite disfrutar de un juego específico durante un mes completo.
          <br /><br />
          Esta opción es ideal para aquellos que desean probar un juego antes de comprometerse a comprarlo o simplemente disfrutar de una experiencia temporal sin incurrir en el costo total de compra.
          <br /><br />
          Sin embargo, ten en cuenta que los juegos alquilados no son elegibles para intercambio.
        </>
      ),
    },
    {
      id: 'descargar-ps3',
      question: "¿Cómo descargar un juego de PS3?",
      answer: (
        <>
          1) Antes que nada vamos a verificar que no hayan errores por actualizaciones pendientes o algún mantenimiento. Favor entrar en la Store de su usuario.
          <br />
          2) Una vez verificado que no hay problemas, nos salimos de la store y procedemos a crear un usuario. Este usuario debe llamarse como el nombre del juego para que no se pierda o se modifique.
        </>
      ),
    },
    {
      id: 'playstation-plus',
      question: "¡Qué es PlayStation Plus?",
      answer: (
        <>
          PlayStation Plus es un servicio de suscripción de pago de Sony Interactive Entertainment que te da acceso a juegos mensuales gratuitos, multijugador online, descuentos exclusivos en la PlayStation Store, y almacenamiento en la nube para tus partidas guardadas.
        </>
      ),
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Preguntas Frecuentes</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} id={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <span className="question-text">{faq.question}</span>
              <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`}></span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentes; 