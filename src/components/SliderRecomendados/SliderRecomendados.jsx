import React, { useEffect, useRef } from 'react';
import Card from '../Card'; // Import the Card component
import './SliderRecomendados.css'; // Import the CSS file
import Swiper from 'swiper'; // Import Swiper
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { games } from '../../WebLinks/DataBaseGames/GameDatabase'; // Import the games list

const SliderRecomendados = ({ selectedGame }) => {
  const [filteredGames, setFilteredGames] = React.useState([]);

  useEffect(() => {
    if (!selectedGame || !selectedGame.genre) {
      setFilteredGames([]);
      return;
    }

    const selectedGameGenres = selectedGame.genre.split(', ').map(g => g.trim().toLowerCase());

    const similarGames = games.filter(game => {
      if (game.id === selectedGame.id) return false; // Exclude the selected game itself
      if (!game.genre) return false;

      const gameGenres = game.genre.split(', ').map(g => g.trim().toLowerCase());
      // Check for at least one common genre
      return selectedGameGenres.some(genre => gameGenres.includes(genre));
    });

    // Randomly select up to 6 games from the similar games list
    const shuffledGames = similarGames.sort(() => 0.5 - Math.random());
    setFilteredGames(shuffledGames.slice(0, 6));
    console.log("Filtered Games for SliderRecomendados:", shuffledGames.slice(0, 6));

  }, [selectedGame]);

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
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });

    // Guarda la instancia de Swiper en la referencia
    swiperRef.current = swiper;

    // Limpia la instancia de Swiper al desmontar el componente
    return () => swiper.destroy();
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
                  playstationPlus={game.PlystationPlus}
                  stock={game.stock}
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
  );
};

export default SliderRecomendados; 