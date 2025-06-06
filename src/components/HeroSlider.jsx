import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import heroImage1 from '../assets/hero-image-1.jpg';
import heroImage2 from '../assets/hero-image-2.jpg';
import heroImage3 from '../assets/hero-image-3.jpg';
import heroImage4 from '../assets/hero-image-4.jpg';

const slides = [
  {
    id: 1,
    title: 'Tu destino final para la diversión gamer',
    description: 'Explora nuestro catálogo de videojuegos y encuentra las mejores ofertas.',
    buttonText: 'Explorar Catálogo',
    backgroundImage: heroImage1,
  },
  {
    id: 2,
    title: 'Nuevos lanzamientos exclusivos',
    description: 'Descubre los juegos más recientes y reserva tu copia hoy mismo.',
    buttonText: 'Ver Lanzamientos',
    backgroundImage: heroImage2,
  },
  {
    id: 3,
    title: 'Ofertas especiales',
    description: 'Aprovecha descuentos increíbles en tus juegos favoritos.',
    buttonText: 'Ver Ofertas',
    backgroundImage: heroImage3,
  },
  {
    id: 4,
    title: 'Comunidad gamer',
    description: 'Únete a nuestra comunidad y comparte tu pasión por los videojuegos.',
    buttonText: 'Unirse a la Comunidad',
    backgroundImage: heroImage4,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '600px' }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: currentSlide === index ? (fade ? 1 : 0) : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <HeroSection
            title={slide.title}
            description={slide.description}
            buttonText={slide.buttonText}
            backgroundImage={slide.backgroundImage}
          />
        </div>
      ))}

      {/* Puntos de navegación */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '6px',
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? '#fff' : 'rgba(255, 81, 81, 0.91)',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              padding: '0',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;