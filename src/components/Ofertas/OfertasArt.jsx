import React, { useEffect, useRef, useState } from 'react';
import descuentoArt from '../../assets/DescuentoArt.webp'; // Importa la imagen
import './OfertasArt.css'; // Importa el archivo CSS

const OfertasArt = () => {
  const sectionRef = useRef(null); // Ref for the section to observe
  const [isVisible, setIsVisible] = useState(false); // State to control animation, set to false initially for scroll trigger

  // Observa la visibilidad de la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si la sección es visible, actualiza el estado
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta el observador unae vez que la animación se ha activado
        }
      },
      {
        threshold: 0.1, // Porcentaje de la sección visible para activar
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Limpia el observador al desmontar el componente
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className={`oferta-art-container ${isVisible ? 'animate-visible' : ''}`} style={{ height: '500px', overflow: 'hidden' }} ref={sectionRef}>
      <img src={descuentoArt} alt="Descuento Art" />
    </div>
  );
};

export default OfertasArt;
