import React from 'react';
import './SliderLogos.css'; // Importa el archivo CSS

const SliderLogos = () => {
  const logos = [
    { src: "/src/components/SliderLogos/Imagenes_LogoSlider/Nintendo-Switch.svg", alt: "Nintendo Switch" },
    { src: "/src/components/SliderLogos/Imagenes_LogoSlider/Geforce-Now.svg", alt: "Geforce Now" },
    { src: "/src/components/SliderLogos/Imagenes_LogoSlider/Ubisoft-Logo.svg", alt: "Ubisoft" },
    { src: "/src/components/SliderLogos/Imagenes_LogoSlider/Electronic-Arts.svg", alt: "Electronic Arts" },
    { src: "/src/components/SliderLogos/Imagenes_LogoSlider/Playstation-Logo.svg", alt: "Playstation" },
    { src: "/src/components/SliderLogos/Imagenes_LogoSlider/Epic-Games.svg", alt: "Epic Games" },
    { src: "/src/components/SliderLogos/Imagenes_LogoSlider/Xbox-Live-Logo.svg", alt: "Xbox Live" },
    { src: "/src/components/SliderLogos/Imagenes_LogoSlider/Steam-Logo.svg", alt: "Steam" },
  ];

  return (
    <div className="slider">
      <div className="move">
        {logos.map((logo, index) => (
          <div className="box" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
        {/* Repetir los logos para el efecto de slider infinito */}
        {logos.map((logo, index) => (
          <div className="box" key={`${index}-repeat`}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderLogos; 