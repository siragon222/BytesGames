import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import heroImage1 from '../assets/hero-image-1.jpg';
import heroImage2 from '../assets/hero-image-2.jpg';
import heroImage3 from '../assets/hero-image-3.jpg';
import heroImage4 from '../assets/hero-image-4.jpg';
import playstationPlusLogo from '../assets/playstation-plus.svg'; // Import the SVG

const slides = [
  {
    id: 1,
    title: 'Legacy of Kain 1 & 2',
    description: 'Forja tu propio camino en el gótico y devastado mundo de Nosgoth. En Blood Omen, asume el papel de Kain, un noble asesinado y resucitado como vampiro.',
    buttonText: 'OBTENLO YA",
    backgroundImage: heroImage1,
    backgroundPositionMobile: '80% -50%', // Example: adjust as needed, using previous mobile position
    svgWidth: '350px', // Define width for the SVG
    svgHeight: 'auto', // Define height for the SVG
    overlayColor: 'rgba(4, 30, 27, 0.9)', // Slightly transparent black overlay
    titleColor: '#ffffff', // White color for title
    descriptionColor: '#ffffff', // White color for description
  },
    {
    id: 2,
    title: 'Únete Ahora',
    description: 'Explora nuevas experiencias con los tres planes de PlayStation Plus, que ofrecen acceso a pruebas de juegos y a una amplia selección de juegos y clásicos.',
    buttonText: 'Explorar Catálogo',
    backgroundImage: heroImage2,
    backgroundPositionMobile: '80% -10%', // Example: adjust as needed, using previous mobile position
    svgImage: playstationPlusLogo, // Pass the SVG to this slide
    svgWidth: '350px', // Define width for the SVG
    svgHeight: 'auto', // Define height for the SVG
    overlayColor: 'rgba(197, 196, 204, 0.7)', // Slightly transparent black overlay
    titleColor: '#000000', // Black color for title
    descriptionColor: '#333333', // Dark grey for description
  },

  
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

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
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '90vh' }}>
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
            backgroundPositionMobile={slide.backgroundPositionMobile} // Pass the new prop
            svgImage={slide.svgImage} // Pass the SVG to HeroSection
            svgWidth={slide.svgWidth} // Pass svgWidth to HeroSection
            svgHeight={slide.svgHeight} // Pass svgHeight to HeroSection
            overlayColor={slide.overlayColor} // Pass overlayColor to HeroSection
            titleColor={slide.titleColor} // Pass titleColor to HeroSection
            descriptionColor={slide.descriptionColor} // Pass descriptionColor to HeroSection
            onButtonClick={slide.id === 2 ? () => navigate('/playstation-plus') : undefined} // Pass navigation function only for slide 2
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