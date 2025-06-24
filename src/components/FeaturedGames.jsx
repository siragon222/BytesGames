import React, { useRef, useState, useEffect } from 'react';
import Card from './Card'; // Importar el componente Card
import imagen1 from '../assets/imagen1.jpg'; // Importar la imagen desde assets
import './FeaturedGames.css'; // Importar el archivo CSS para el carrusel
import { games } from '../../WebLinks/DataBaseGames/GameDatabase'; // Import the games list

const FeaturedGames = () => {
  const sliderRef = useRef(null); // Referencia al contenedor del carrusel
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice actual
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar si es móvil
  const totalCards = 6; // Número total de tarjetas
  const cardsToShow = 3; // Número de tarjetas visibles a la vez
  const [scrollPosition, setScrollPosition] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0); // Estado para almacenar la posición inicial del toque
  const [touchEndX, setTouchEndX] = useState(0); // Estado para almacenar la posición final del toque

  const featuredGameIds = [1, 2, 3, 4, 5, 6, 7]; // Example IDs for featured games
  const featuredGamesData = games.filter(game => featuredGameIds.includes(game.id));

  // Función para detectar si el dispositivo es móvil
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Efecto para detectar cambios en el tamaño de la ventana
  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleClick = () => {
    console.log("Botón VER DETALLES clickeado"); // Acción al hacer clic
  };

  const handleScroll = (direction) => {
    const carousel = sliderRef.current;
    const cardWidth = carousel.querySelector('.carousel-card').offsetWidth;
    const gap = parseFloat(window.getComputedStyle(carousel).gap.replace('px', ''));
    const scrollAmount = (cardWidth + gap) * cardsToShow;

    let newScrollPosition;

    if (direction === 'prev') {
      newScrollPosition = Math.max(carousel.scrollLeft - scrollAmount, 0);
    } else if (direction === 'next') {
      newScrollPosition = Math.min(carousel.scrollLeft + scrollAmount, carousel.scrollWidth - carousel.clientWidth);
    }

    carousel.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  };

  // Manejar el inicio del toque
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Manejar el movimiento del toque
  const handleTouchMove = (e) => {
    const carousel = sliderRef.current;
    const currentX = e.touches[0].clientX;
    const distance = (touchStartX - currentX) * 8; // Aumentar la velocidad del desplazamiento

    // Usar requestAnimationFrame para un desplazamiento suave
    const scroll = () => {
      carousel.scrollLeft += distance;
      setTouchStartX(currentX); // Actualizar la posición inicial para el siguiente movimiento
    };
    requestAnimationFrame(scroll);
  };

  // Manejar el final del toque
  const handleTouchEnd = () => {
    // No es necesario hacer nada aquí, el desplazamiento ya se maneja en handleTouchMove
  };

  return (
    <section 
      id="destacados" 
      style={{ 
        backgroundColor: '#ffffff', // Fondo blanco
        padding: '2rem 0', // Mantén el padding para el espaciado
        color: '#1a1a1a' // Cambia el color del texto para que sea legible
      }}
    >
      <h2 style={{ 
        color: '#000000', 
        textAlign: 'left', // Alineación a la izquierda por defecto
        marginLeft: '1rem', // Margen izquierdo para separar del borde
        paddingLeft: '11rem', // Añadir padding izquierdo
        '@media (max-width: 768px)': {
          textAlign: 'center', // Centrado en móvil
          marginLeft: '0', // Eliminar margen izquierdo en móvil
          paddingLeft: '0' // Eliminar padding izquierdo en móvil
        }
      }}>Juegos Destacados</h2>
      <div className="carousel-container">
        {!isMobile && (
          <button className="carousel-button prev" onClick={() => handleScroll('prev')}>&#10094;</button> // Botón para retroceder
        )}
        <div 
          className="carousel-cards" 
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="card-wrapper swiper-wrapper">
            {featuredGamesData.map((game) => (
              <div key={game.id} className="card swiper-slide">
                <Card
                  id={game.id}
                  image={game.image}
                  title={game.title}
                  platforms={game.platforms}
                  price={game.price}
                  discount={game.discount}
                  nuevo={game.nuevo}
                  PlystationPlus={game.PlystationPlus}
                  onButtonClick={() => console.log(`View details for ${game.title}`)}
                />
              </div>
            ))}
          </div>
        </div>
        {!isMobile && (
          <button className="carousel-button next" onClick={() => handleScroll('next')}>&#10095;</button> // Botón para avanzar
        )}
      </div>
    </section>
  );
};

export default FeaturedGames;  