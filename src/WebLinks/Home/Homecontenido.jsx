import React from 'react';
import './Homecontenido.css';
import HeroSlider from '../../components/HeroSlider';
import Separator from '../../components/Separator';
import Offers from '../../components/Offers';
import UpcomingReleases from '../../components/UpcomingReleases';
import Testimonials from '../../components/Testimonials';
import { FaQ } from 'react-icons/fa6';
import AboutUs from '../../components/AboutUs';
import MetricCard from '../../components/MetricCard';
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
        <Offers />
        <UpcomingReleases />
        <Testimonials />
        <FaQ />
        <AboutUs />
      </main>
    </>
  );
};

export default Homecontenido; 

<div className="metric-card-overlay">
<MetricCard />
</div>