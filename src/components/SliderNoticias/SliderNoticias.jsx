import React, { useEffect, useRef } from 'react';
import Card from '../Card'; // Import the Card component
import './SliderNoticias.css'; // Import the CSS file
import Swiper from 'swiper'; // Import Swiper
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { games } from '../../WebLinks/DataBaseGames/GameDatabase'; // Import the games list

// Helper function to parse Spanish date strings
const parseSpanishDate = (dateString) => {
  const months = {
    "enero": 0, "febrero": 1, "marzo": 2, "abril": 3, "mayo": 4, "junio": 5,
    "julio": 6, "agosto": 7, "septiembre": 8, "octubre": 9, "noviembre": 10, "diciembre": 11
  };
  const parts = dateString.replace(/de /g, '').split(' ');
  const day = parseInt(parts[0]);
  const month = months[parts[1].toLowerCase()];
  const year = parseInt(parts[2]);
  return new Date(year, month, day);
};

const SliderNoticias = () => {
  // Filtra y ordena la lista de juegos por fecha de lanzamiento (más reciente primero) y selecciona los 12 primeros
  const filteredGames = [...games]
    .sort((a, b) => {
      const dateA = parseSpanishDate(a.releaseDate);
      const dateB = parseSpanishDate(b.releaseDate);
      return dateB - dateA; // Sort in descending order (newest first)
    })
    .slice(0, 12);

  // Referencias para los botones y Swiper
  const swiperRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  // Inicializa Swiper
  useEffect(() => {
    const swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      speed: 1000,
      effect: 'slide',
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        520: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        950: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 4,
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
    }, 2000); // Cambia el slide cada 2 segundos

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
    <div className="slider-background">
      <h2 className="slider-title">
        <span className="ultimas-text">Últimas</span>
        
        <strong>Recomendaciones</strong>
      </h2>
      <div className="slide-container swiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            {filteredGames.map((game) => (
              <div key={game.id} className="card swiper-slide">
                <Card
                  image={game.image}
                  title={game.title}
                  platforms={`Plataformas: ${game.platforms}`}
                  price={game.price}
                  discount={game.discount}
                  nuevo={game.nuevo}
                  PlystationPlus={game.PlystationPlus}
                  stock={game.stock}
                  language={game.Lenguaje}
                  onButtonClick={() => console.log(`View details for ${game.title}`)}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="swiper-button-next swiper-navBtn"
          onClick={handleNext}
          ref={nextButtonRef}
        ></div>
        <div
          className="swiper-button-prev swiper-navBtn"
          onClick={handlePrev}
          ref={prevButtonRef}
        ></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SliderNoticias;
