import React from 'react';
import './Homecontenido.css';
import HeroSlider from '../../components/HeroSlider';
import Separator from '../../components/Separator';
import SliderLogos from '../../components/SliderLogos/SliderLogos';
import OfertasGames from '../../components/Ofertas/OfertasGames';
import SliderNoticias from '../../components/SliderNoticias/SliderNoticias';

const Homecontenido = () => {
  return (
    <>
      <main>
        <HeroSlider />
        <Separator />
        <SliderNoticias />
        <SliderLogos />
        <OfertasGames />
      </main>
    </>
  );
};

export default Homecontenido; 