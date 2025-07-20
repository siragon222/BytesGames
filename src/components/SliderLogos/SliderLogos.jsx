import React from 'react';
import './SliderLogos.css'; // Importa el archivo CSS

// Importa las imágenes directamente
import GeforceNowLogo from './Imagenes_LogoSlider/Geforce-Now.svg';
import UbisoftLogo from './Imagenes_LogoSlider/Ubisoft-Logo.svg';
import ElectronicArtsLogo from './Imagenes_LogoSlider/Electronic-Arts.svg';
import PlaystationLogo from './Imagenes_LogoSlider/Playstation-Logo.svg';
import EpicGamesLogo from './Imagenes_LogoSlider/Epic-Games.svg';
import XboxLiveLogo from './Imagenes_LogoSlider/Xbox-Live-Logo.svg';
import SteamLogo from './Imagenes_LogoSlider/Steam-Logo.svg';

const SliderLogos = () => {
  const logos = [
    { src: GeforceNowLogo, alt: "Geforce Now" },
    { src: UbisoftLogo, alt: "Ubisoft" },
    { src: ElectronicArtsLogo, alt: "Electronic Arts" },
    { src: PlaystationLogo, alt: "Playstation" },
    { src: EpicGamesLogo, alt: "Epic Games" },
    { src: XboxLiveLogo, alt: "Xbox Live" },
    { src: SteamLogo, alt: "Steam" },
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