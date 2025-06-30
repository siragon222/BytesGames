import React from 'react';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';

// Exportar la lista de DLCs como una constante
export const dlcGames = [
  {
    id: 1000000,
    image: 'https://i.ibb.co/PZdQDrH6/Battlefield-4-Premium-Edition-cover.webp',
    title: 'Battlefield 4 Premium Edition',
    Lenguaje: "",
    platforms: 'PS4, PS5',
    Oculto: 'no',
    type: 'dlc',
    PlystationPlus: 'no',
    discount: '',
    discountDate: '',
    // Data para Selecciona tu edición para el compoente @SeleccionaComponente
    editions: {
    Ocultar: 'no',
    PlayStation: {
    },
    PS3: {
      Premium: { price: 1.5, description: 'Incluye el juego base + contenido adicional + DLCs para PS3.', discount: 'yes' },
    },
    PS4: {
      Premium: { price: 6.5, description: 'Incluye el juego base + contenido adicional + DLCs para PS4.', discount: 'yes' },        
    },
    PS5: {
      Premium: { price: 7.5, description: 'Incluye el juego base + contenido adicional + DLCs para PS5.', discount: 'yes' },
    }
    },
    descripcionContenido: 'Domina la guerra total con Battlefield 4 Premium Edition. Esta edición completa incluye el juego base de Battlefield 4 y los cinco packs de expansión digital con toneladas de contenido nuevo, incluyendo 20 mapas, nuevos modos de juego y un arsenal de armas y vehículos. Experimenta la destrucción dinámica y el caos de la guerra multijugador a una escala inigualable.',
    descripcionContenidoDlc:['Battlefield 4', 'Los cinco packs de expansión', 'Opciones exclusivas de personalización', 'Posición prioritaria en las colas de los servidores', '12 Battlepacks adicionales'],
    // Data para Selecciona tu licencia del compoente @SeleccionaComponente
    licensePrices: {
    Ocultar: 'si',
    PlayStation: {}
    },
    // Data para Seleccionar las imagenes para el componente @GaleriaFotos
    fotos: [
    'https://i.ibb.co/x8Dq04Lh/portada-Battlefield-4-Premium-Edition.webp',
    'https://i.ibb.co/nKN1vrY/Battlefield-4-Premium-Edition-1-4-11zon.webp',
    'https://i.ibb.co/b5TTgdC9/Battlefield-4-Premium-Edition-2-3-11zon.webp',
    'https://i.ibb.co/sJX1YX7w/Battlefield-4-Premium-Edition-3-2-11zon.webp',
    'https://i.ibb.co/5WjNWjrr/Battlefield-4-Premium-Edition-4-1-11zon.webp',
    
    ],
    // Data para Seleccionar la portada para el componente @Portada Componente
    portadaUrl: 'https://i.ibb.co/xtV2bbZt/portada-Battlefield-4-Premium-Edition-5.webp',
    genre: 'Shooter - Acción - Cooperativo',
    pegiRating: 'PEGI 18',
    developer: 'DICE',
    publisher: 'Electronic Arts',
    releaseDate: '29 de octubre de 2013'
    },
    {
      id: 1000001,
      image: 'https://i.ibb.co/ksMLrKMZ/Dragon-Ball-Xenoverse-Time-Travel-Edition-cover.webp',
      title: 'Dragon Ball Xenoverse Time Travel Edition',
      Lenguaje: "",
      platforms: 'PS4, PS5',
      Oculto: 'no',
      type: 'dlc',
      PlystationPlus: 'no',
      discount: '',
      discountDate: '',
      // Data para Selecciona tu edición para el compoente @SeleccionaComponente
      editions: {
      Ocultar: 'no',
      PlayStation: {
      },
      PS4: {
        Premium: { price: 6.5, description: 'Incluye el juego base + contenido adicional + DLCs para PS4.', discount: 'yes' },        
      },
      PS5: {
        Premium: { price: 7.5, description: 'Incluye el juego base + contenido adicional + DLCs para PS5.', discount: 'yes' },
      }
      },
      descripcionContenido: 'Sumérgete en la experiencia definitiva de Dragon Ball Xenoverse con esta edición digital completa. No solo obtendrás el juego base para crear tu propio guerrero y unirte a la Patrulla del Tiempo, sino que también desbloquearás todo el contenido del Season Pass. Este pase expande tu aventura con nuevos personajes jugables (incluyendo a los de GT), misiones adicionales de la Patrulla del Tiempo, más maestros para entrenar, así como trajes, habilidades y accesorios exclusivos para personalizar a tu avatar. Es el paquete esencial para todo fan que quiera explorar hasta el último rincón de la historia de Dragon Ball y poner a prueba su poder con el plantel de luchadores más amplio.',
      descripcionContenidoDlc:['Dragon Ball Xenoverse', 'Dragon Ball Xenoverse GT PACK 1', 'Dragon Ball Xenoverse GT PACK 2', 'Resurrection F Pack', 'Movie Costume Pack'],
      // Data para Selecciona tu licencia del compoente @SeleccionaComponente
      licensePrices: {
      Ocultar: 'si',
      PlayStation: {}
      },
      // Data para Seleccionar las imagenes para el componente @GaleriaFotos
      fotos: [
        "https://i.ibb.co/Df4BZDT8/Dragon-Ball-Xenoverse-Time-Travel-Edition-portada.webp",
        "https://i.ibb.co/63cc4FP/Dragon-Ball-Xenoverse-3-3-11zon-3-11zon.webp",
        "https://i.ibb.co/NccfkNf/Dragon-Ball-Xenoverse-5-5-11zon-5-11zon.webp",
        "https://i.ibb.co/YB99GwPL/Dragon-Ball-Xenoverse-1-1-11zon-1-11zon.webp",
        "https://i.ibb.co/bgxTbmJ6/Dragon-Ball-Xenoverse-2-2-11zon-2-11zon.webp"
      
      ],
      // Data para Seleccionar la portada para el componente @Portada Componente
      portadaUrl: 'https://i.ibb.co/Df4BZDT8/Dragon-Ball-Xenoverse-Time-Travel-Edition-portada.webp',
      genre: 'Lucha, Acción, RPG, MMO',
      pegiRating: 'PEGI 12',
      developer: 'Dimps',
      publisher: 'Bandai Namco Entertainment',
      releaseDate: '5 de febrero de 2015'
      },
]; 

const DLCdatabase = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/VerDetallesDLC?id=${id}`);
  };

  return (
    <div>
      {dlcGames.map(dlc => (
        <Card
          key={dlc.id}
          id={dlc.id}
          image={dlc.image}
          title={dlc.title}
          platforms={dlc.platforms}
          price={dlc.price}
          discount={dlc.discount}
          nuevo={dlc.nuevo}
          PlystationPlus={dlc.PlystationPlus}
          genre={dlc.genre}
          stock={dlc.stock}
          onButtonClick={() => handleClick(dlc.id)}
        />
      ))}
    </div>
  );
};

export default DLCdatabase; 