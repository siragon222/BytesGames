import React, { useEffect, useRef } from 'react';
import Card from '../Card'; // Import the Card component
import './OfertasSlider.css'; // Import the CSS file
import './OfertasGames.css'; // Import the OfertasGames CSS file
import Swiper from 'swiper'; // Import Swiper
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { games } from '../../WebLinks/DataBaseGames/GameDatabase'; // Import the games list

const OfertasSlider = () => {
  // Define las IDs de las cards que deseas mostrar (puedes cambiarlas según tu elección)
  const selectedIds = [1, 3, 5, 7, 9, 11]; // Ejemplo de IDs seleccionadas

  // Filtra la lista de juegos basándote en las IDs seleccionadas
  const filteredGames = games.filter(game => selectedIds.includes(game.id));

  // Referencias para los botones y Swiper
  const swiperRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  // Inicializa Swiper
  useEffect(() => {
    const swiper = new Swiper(".ofertas-slide-content", {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      speed: 1000,
      effect: 'slide',
      pagination: {
        el: ".ofertas-swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".ofertas-swiper-button-next",
        prevEl: ".ofertas-swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
      },
    });

    // Guarda la instancia de Swiper en la referencia
    swiperRef.current = swiper;

    // Configura un intervalo para cambiar los slides automáticamente
    const autoplayInterval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 2000); // Cambia el slide cada 1 segundo

    // Limpia el intervalo y la instancia de Swiper al desmontar el componente
    return () => {
      clearInterval(autoplayInterval);
      swiper.destroy();
    };
  }, [filteredGames]); // Reinicializa Swiper cuando cambia la lista de juegos filtrados

  // Manejadores para los botones
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="ofertas-slider-background">
      <h2 className="slider-title">Últimas Ofertas</h2>
      <div className="slide-container ofertas-slide-container swiper">
        <div className="ofertas-slide-content">
          <div className="card-wrapper swiper-wrapper">
            {filteredGames.map((game) => (
              <div key={game.id} className="card swiper-slide">
                <Card
                  image={game.image}
                  title={game.title}
                  platforms={`Plataformas: ${game.platforms}`}
                  price={`Precio: ${game.price}`}
                  onButtonClick={() => console.log(`View details for ${game.title}`)}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="ofertas-swiper-button-next swiper-navBtn"
          onClick={handleNext}
          ref={nextButtonRef}
        ></div>
        <div
          className="ofertas-swiper-button-prev swiper-navBtn"
          onClick={handlePrev}
          ref={prevButtonRef}
        ></div>
        <div className="ofertas-swiper-pagination"></div>
      </div>
    </div>
  );
};

export default OfertasSlider;
