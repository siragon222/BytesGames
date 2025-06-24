import React from 'react';
import Card from '../../components/Card';

// Exportar la lista de juegos como una constante
export const games = [
  {
    id: 1,
    image: 'https://i.ibb.co/cSWh5KnS/assassins-creed-valhalla-cover.webp',
    title: 'Assassin\'s Creed Valhalla',
    platforms: 'PS4, PS5',
    price: '$50',
    stock: 'si',
    nuevo: 'no',
    Oculto: 'no',
    type: 'game', // Added type property
    PlystationPlus: 'si',
    discount: '20%',
    discountDate: '2025-12-31',
    ListadaDlcPs3: '1000000, 1000002', // Added ListadaDlc property
    ListadaDlcPs4: '1000000', // Added ListadaDlc property
    ListadaDlcPs5: '1000000, 1000002', // Added ListadaDlc property
    ListadaDlcXbox360: '1000000, 1000002', // Added ListadaDlc property
    ListadaDlcXboxOne: '1000000, 1000002', // Added ListadaDlc property
    ListadaDlcXboxSeriesX: '1000000, 1000002', // Added ListadaDlc property
    JuegosdeRegaloPs3: '1,2,3',
    JuegosdeRegaloPs4: '1,2,3',
    JuegosdeRegaloPs5: '1,2,3',
    JuegosdeRegaloXbox360: '1,2,3',
    JuegosdeRegaloXboxOne: '1,2,3',
    JuegosdeRegaloXboxSeriesX: '1,2,3',
    // Data para Detalles del juego @SeleccionaComponente
    genre: 'Action, RPG, Deportes',
    pegiRating: 'PEGI 18',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    descripcionContenido: 'Tiene lugar en el siglo IX (comenzando  en 873 d.C.) llevándote por Europa mientras mueves tu clan desde una Noruega gravemente superpoblada y devastada por la guerra a Inglaterra, tierra verde de paz, prosperidad y campos fértiles para cultivar. Reino Unido puede tener la reputación de ser un lugar frío y lluvioso, pero en comparación con la desolación casi ártica, no es un sustituto tan malo. Es un juego de aventuras y acción de mundo abierto.',
    releaseDate: '',
    // Data para Selecciona tu edición para el compoente @SeleccionaComponente
    editions: {
      PlayStation: { },
      PS3: {
        Común: { price: 25.00, description: 'Incluye el juego base para PS4.', discount: 'yes' },
        Estándar: { price: 55.00, description: 'Incluye el juego base + contenido adicional para PS4.', discount: 'yes' },
        Premium: { price: 95.00, description: 'Incluye el juego base + contenido adicional + DLCs para PS4.', discount: 'yes' },
      },
      PS4: {
        Común: { price: 30.00, description: 'Incluye el juego base para PS5.', discount: 'yes' },
        Estándar: { price: 60.00, description: 'Incluye el juego base + contenido adicional para PS5.', discount: 'yes' },
        Premium: { price: 100.00, description: 'Incluye el juego base + contenido adicional + DLCs para PS5.', discount: 'yes' },
      },
      PS5: {
        Común: { price: 30.00, description: 'Incluye el juego base para PS5.', discount: 'yes' },
        Estándar: { price: 60.00, description: 'Incluye el juego base + contenido adicional para PS5.', discount: 'yes' },
        Premium: { price: 100.00, description: 'Incluye el juego base + contenido adicional + DLCs para PS5.', discount: 'yes' },
      },
    },
    // Data para Selecciona tu licencia del compoente @SeleccionaComponente
    licensePrices: {
      PlayStation: { },
      PS3: {
        Principal: { price: 50.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
        Alquiler: { price: 108.00, description: 'Licencia principal para una cuenta.', discount: 'yes' },
      },
      PS4: {
        Principal: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
        Secundaria: { price: 20.00, description: '⚠️ Esta licencia, al ser adquirida para PS4, no será compatible ni podrá usarse en PS5.', discount: 'yes' },
        Alquiler: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'yes' },
      },
      PS5: {
        Principal: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'yes' },
        Secundaria: { price: 20.00, description: '⚠️ Esta licencia, al ser adquirida para PS5, no será compatible ni podrá usarse en PS4.', discount: 'yes' },
        Alquiler: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'yes' },
      },
    },
    fotos: [
      'https://i.ibb.co/60Pf5FSS/Assassin-s-Creed-Valhalla-1-1-11zon.webp',
      'https://i.ibb.co/cHHGhNq/Assassin-s-Creed-Valhalla-5-1-11zon.webp',
      'https://i.ibb.co/84tNbvf4/Assassin-s-Creed-Valhalla-4-2-11zon.webp',
      'https://i.ibb.co/cHHGhNq/Assassin-s-Creed-Valhalla-5-1-11zon.webp',
      'https://i.ibb.co/xKvsmZDk/Assassin-s-Creed-Valhalla-2-4-11zon.webp',
    ],
    portadaUrl: 'https://i.ibb.co/kgxm4jV5/portada-Assassin-s-Creed-Valhalla-5-11zon.webp',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/cSWh5KnS/assassins-creed-valhalla-cover.webp',
    title: 'Assassin\'s Creed Valhalla',
    platforms: 'PS4, PS5',
    price: '$50',
    stock: 'si',
    nuevo: 'no',
    Oculto: 'no',
    type: 'game', // Added type property
    PlystationPlus: 'si',
    discount: '20%',
    discountDate: '2025-12-31',
    ListadaDlcPs3: '1000000, 1000002', // Added ListadaDlc property
    ListadaDlcPs4: '1000000', // Added ListadaDlc property
    ListadaDlcPs5: '1000000, 1000002', // Added ListadaDlc property
    ListadaDlcXbox360: '1000000, 1000002', // Added ListadaDlc property
    ListadaDlcXboxOne: '1000000, 1000002', // Added ListadaDlc property
    ListadaDlcXboxSeriesX: '1000000, 1000002', // Added ListadaDlc property
    JuegosdeRegaloPs3: '1,2,3',
    JuegosdeRegaloPs4: '1,2,3',
    JuegosdeRegaloPs5: '1,2,3',
    JuegosdeRegaloXbox360: '1,2,3',
    JuegosdeRegaloXboxOne: '1,2,3',
    JuegosdeRegaloXboxSeriesX: '1,2,3',
    // Data para Detalles del juego @SeleccionaComponente
    genre: 'Action, RPG, Deportes',
    pegiRating: 'PEGI 18',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    descripcionContenido: 'Tiene lugar en el siglo IX (comenzando  en 873 d.C.) llevándote por Europa mientras mueves tu clan desde una Noruega gravemente superpoblada y devastada por la guerra a Inglaterra, tierra verde de paz, prosperidad y campos fértiles para cultivar. Reino Unido puede tener la reputación de ser un lugar frío y lluvioso, pero en comparación con la desolación casi ártica, no es un sustituto tan malo. Es un juego de aventuras y acción de mundo abierto.',
    releaseDate: '',
    // Data para Selecciona tu edición para el compoente @SeleccionaComponente
    editions: {
      PlayStation: { },
      PS3: {
        Común: { price: 25.00, description: 'Incluye el juego base para PS4.', discount: 'yes' },
        Estándar: { price: 55.00, description: 'Incluye el juego base + contenido adicional para PS4.', discount: 'yes' },
        Premium: { price: 95.00, description: 'Incluye el juego base + contenido adicional + DLCs para PS4.', discount: 'yes' },
      },
      PS4: {
        Común: { price: 30.00, description: 'Incluye el juego base para PS5.', discount: 'yes' },
        Estándar: { price: 60.00, description: 'Incluye el juego base + contenido adicional para PS5.', discount: 'yes' },
        Premium: { price: 100.00, description: 'Incluye el juego base + contenido adicional + DLCs para PS5.', discount: 'yes' },
      },
      PS5: {
        Común: { price: 30.00, description: 'Incluye el juego base para PS5.', discount: 'yes' },
        Estándar: { price: 60.00, description: 'Incluye el juego base + contenido adicional para PS5.', discount: 'yes' },
        Premium: { price: 100.00, description: 'Incluye el juego base + contenido adicional + DLCs para PS5.', discount: 'yes' },
      },
    },
    // Data para Selecciona tu licencia del compoente @SeleccionaComponente
    licensePrices: {
      PlayStation: { },
      PS3: {
        Principal: { price: 50.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
        Alquiler: { price: 108.00, description: 'Licencia principal para una cuenta.', discount: 'yes' },
      },
      PS4: {
        Principal: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
        Secundaria: { price: 20.00, description: '⚠️ Esta licencia, al ser adquirida para PS4, no será compatible ni podrá usarse en PS5.', discount: 'yes' },
        Alquiler: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'yes' },
      },
      PS5: {
        Principal: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'yes' },
        Secundaria: { price: 20.00, description: '⚠️ Esta licencia, al ser adquirida para PS5, no será compatible ni podrá usarse en PS4.', discount: 'yes' },
        Alquiler: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'yes' },
      },
    },
    fotos: [
      'https://i.ibb.co/60Pf5FSS/Assassin-s-Creed-Valhalla-1-1-11zon.webp',
      'https://i.ibb.co/cHHGhNq/Assassin-s-Creed-Valhalla-5-1-11zon.webp',
      'https://i.ibb.co/84tNbvf4/Assassin-s-Creed-Valhalla-4-2-11zon.webp',
      'https://i.ibb.co/cHHGhNq/Assassin-s-Creed-Valhalla-5-1-11zon.webp',
      'https://i.ibb.co/xKvsmZDk/Assassin-s-Creed-Valhalla-2-4-11zon.webp',
    ],
    portadaUrl: 'https://i.ibb.co/kgxm4jV5/portada-Assassin-s-Creed-Valhalla-5-11zon.webp',
  },
 
 
  // Agrega más juegos según sea necesario
];

const GameDatabase = () => {
  const handleClick = (id) => {
    console.log(`Ver detalles del juego con ID: ${id}`);
  };

  return (
    <div>
      {games.map(game => (
        <Card
          key={game.id}
          id={game.id}
          image={game.image}
          title={game.title}
          platforms={game.platforms}
          price={game.price}
          discount={game.discount}
          nuevo={game.nuevo}
          PlystationPlus={game.PlystationPlus}
          genre={game.genre}
          stock={game.stock}
          onButtonClick={() => handleClick(game.id)}
        />
      ))}
    </div>
  );
};

export default GameDatabase;