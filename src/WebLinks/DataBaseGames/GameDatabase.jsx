import React from 'react';
import Card from '../../components/Card';

// Exportar la lista de juegos como una constante
export const games = [
  {
    id: 1,
    image: 'https://i.ibb.co/cSWh5KnS/assassins-creed-valhalla-cover.webp',
    title: 'Assassin\'s Creed Valhalla',
    Lenguaje: "",
    platforms: 'PS4, PS5',
    price: '$16',
    stock: 'si',
    nuevo: 'no',
    Oculto: 'no',
    type: 'game', // Added type property
    PlystationPlus: 'si',
    discount: '',
    discountDate: '',
    ListadaDlcPs4: '', // Added ListadaDlc property
    ListadaDlcPs5: '', // Added ListadaDlc property
    JuegosdeRegaloPs4: '2',
    JuegosdeRegaloPs5: '2',
    // Data para Detalles del juego @SeleccionaComponente
    genre: 'Action, RPG',
    pegiRating: 'PEGI 18',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    descripcionContenido: 'Tiene lugar en el siglo IX (comenzando  en 873 d.C.) llevándote por Europa mientras mueves tu clan desde una Noruega gravemente superpoblada y devastada por la guerra a Inglaterra, tierra verde de paz, prosperidad y campos fértiles para cultivar. Reino Unido puede tener la reputación de ser un lugar frío y lluvioso, pero en comparación con la desolación casi ártica, no es un sustituto tan malo. Es un juego de aventuras y acción de mundo abierto.',
    releaseDate: '10 de noviembre de 2020',
    // Data para Selecciona tu edición para el compoente @SeleccionaComponente
    editions: {
      Ocultar: 'si', // si se desaparece el titulo: selecciona tu edicion
      PlayStation: { },
      PS4: { },
      PS5: { },
    },
    // Data para Selecciona tu licencia del compoente @SeleccionaComponente
    licensePrices: {
      PlayStation: { },
      PS4: {
        Principal: { price: 16, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 7.50, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Alquiler: { price: 5, description: 'Licencia Alquiler es...<a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
      PS5: {
        Principal: { price: 18, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 7.50, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
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
    image: "https://i.ibb.co/1YdWHbnM/Yarny-cover.webp",
    title: "Unravel",
    Lenguaje: "",
    platforms: "PS4, PS5",
    price: "$16",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: " 1",
    JuegosdeRegaloPs5: "1",
    genre: "Puzzle, Plataformas",
    pegiRating: "PEGI 3",
    developer: "Coldwood Interactive",
    publisher: "Electronic Arts",
    descripcionContenido: "Unravel es un entrañable juego de plataformas y puzles en el que encarnas a Yarny, una pequeña criatura hecha de hilo rojo. Recorre los exuberantes paisajes escandinavos y los peligrosos entornos rurales, usando tu propio cuerpo de hilo para balancearte, escalar y resolver ingeniosos puzles. Una aventura sobre el amor, la esperanza y los lazos que nos unen.",
    releaseDate: "9 de febrero de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS4: {
        Principal: { price: 16, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 7.50, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Alquiler: { price: 5, description: 'Licencia Alquiler es...<a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
      PS5: {
        Principal: { price: 18, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 7.50, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
    },
    fotos: [
      "https://i.ibb.co/DHSRpp6T/Yarny5.webp",
      "https://i.ibb.co/w22MzWX/Yarny-4.webp",
      "https://i.ibb.co/LdyWs0hh/Yarny-3.webp",
      "https://i.ibb.co/r2G99whq/Yarny-2.webp",
      "https://i.ibb.co/MDd8790V/Yarny-1.webp"
    ],
    portadaUrl: "https://i.ibb.co/PZP54JPM/portada-Yarny.webp"
  },
  {
    id: 3,
    image: "https://i.ibb.co/VpQ1sb6p/Astro-Bot-Rescue-Mission-cover.webp",
    title: "Astro Bot Rescue Mission",
    Lenguaje: "",
    platforms: "PS4, PS5",
    price: "$9.50",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Plataformas, Realidad Virtual",
    pegiRating: "PEGI 3",
    developer: "Japan Studio",
    publisher: "Sony Interactive Entertainment",
    descripcionContenido: "Astro Bot Rescue Mission es una aventura de plataformas exclusiva de realidad virtual para PlayStation VR. Embárcate en un viaje con el Capitán Astro para rescatar a su tripulación perdida en una serie de mundos vibrantes y llenos de creatividad. Usa el DualShock 4 de formas ingeniosas para interactuar con el entorno y superar desafíos, mientras disfrutas de una inmersión total que solo la VR puede ofrecer.",
    releaseDate: "3 de octubre de 2018",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {},
      PS5: {}
    },
    "licensePrices": {
      PlayStation: {},
      PS4: {
        Principal: { price: 9.50, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 6.50, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Alquiler: { price: 4.00, description: 'Licencia Alquiler es...<a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
      PS5: {
        Principal: { price: 13, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 6.50, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
    },
    fotos: [
      "https://i.ibb.co/Sw6WWT9b/Astro-Bot-Rescue-Mission-2-4-11zon.webp",
      "https://i.ibb.co/QvZ90Y69/Astro-Bot-Rescue-Mission-3-5-11zon.webp",
      "https://i.ibb.co/GQJcfn1C/Astro-Bot-Rescue-Mission-5-1-11zon.webp",
      "https://i.ibb.co/7NLZb4zp/Astro-Bot-Rescue-Mission-4-6-11zon.webp",
      "https://i.ibb.co/k6Hb6pFX/Astro-Bot-Rescue-Mission-1-3-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/N6VWh0MW/Astro-Bot-Rescue-Mission-portada-2-11zon.webp"
  },
  {
    id: 4,
    image: "https://i.ibb.co/2pKfqbF/Batman-Arkham-Collection-cover.webp",
    title: "Batman Arkham Collection",
    Lenguaje: "",
    platforms: "PS4, PS5",
    price: "$19",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Acción, Aventura",
    pegiRating: "PEGI 16",
    developer: "Rocksteady Studios",
    publisher: "Warner Bros. Interactive Entertainment",
    descripcionContenido: "Batman: Arkham Collection te trae las versiones definitivas de los aclamados juegos de la trilogía de Arkham de Rocksteady, incluyendo todo el contenido post-lanzamiento. Sumérgete en el universo de Gotham City como Batman y enfréntate a los villanos más icónicos, explorando un mundo abierto detallado, combatiendo con el sistema FreeFlow y utilizando los gadgets del Caballero Oscuro para resolver misterios.",
    releaseDate: "27 de noviembre de 2018",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    "licensePrices": {
      PlayStation: {},
      PS3: {
        Principal: { price: 1, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
      PS4: {
        Principal: { price: 19, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 10, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Alquiler: { price: 3.50, description: 'Licencia Alquiler es...<a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
      PS5: {
        Principal: { price: 25, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 10, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
    },
    fotos: [
      "https://i.ibb.co/N2vK7Sy8/Batman-Arkham-Collection-5.webp",
      "https://i.ibb.co/S1BT3N1/Batman-Arkham-Collection-4.webp",
      "https://i.ibb.co/Fk98phjR/Batman-Arkham-Collection-3.webp",
      "https://i.ibb.co/391DYs7k/Batman-Arkham-Collection-2.webp",
      "https://i.ibb.co/DPRFwNmZ/Batman-Arkham-Collection-1.webp"
    ],
    portadaUrl: "https://i.ibb.co/zHtmb6Nh/portada-Batman-Arkham-Collection.webp"
  },
  {
    id: 5,
    image: "https://i.ibb.co/v65K6XwF/Battlefield-4-cover.webp",
    title: "Battlefield 4",
    Lenguaje: "",
    platforms: "PS4, PS5",
    price: "$5",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "",
    discountDate: "",
    ListadaDlcPs3: "1000000",
    ListadaDlcPs4: "1000000",
    ListadaDlcPs5: "1000000",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Shooter, Acción, Cooperativo",
    pegiRating: "PEGI 18",
    developer: "DICE",
    publisher: "Electronic Arts",
    descripcionContenido: "Experimenta la guerra total con Battlefield 4. Sumérgete en un caótico campo de batalla multijugador con hasta 64 jugadores, donde los entornos dinámicos de Levolution cambian el mapa en tiempo real. Pilota vehículos, lidera a tu escuadrón y vive una intensa campaña para un jugador que te llevará por todo el mundo.",
    releaseDate: "29 de octubre de 2013",
    editions: {
      Ocultar: "no",
      PlayStation: {},
      PS3: {
        Estándar: { price: 1, description: 'Incluye el juego base para PS3.', discount: 'yes' },
        Premium: { price: 1.5, description: 'Incluye el juego base + contenido adicional + DLCs para PS3.', discount: 'yes' },
      },
      PS4: {
        Premium: { price: 6.5, description: 'Incluye el juego base + contenido adicional + DLCs para PS4.', discount: 'yes' },        
      },
      PS5: {
        Premium: { price: 7.5, description: 'Incluye el juego base + contenido adicional + DLCs para PS5.', discount: 'yes' },
      }
    },
    "licensePrices": {
      PlayStation: {},
      PS3: {
        Principal: { price: 1, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
      PS4: {
        Principal: { price: 5, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 2.5, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Alquiler: { price: 1.5, description: 'Licencia Alquiler es...<a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
      PS5: {
        Principal: { price: 6, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
        Secundaria: { price: 2.5, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
      },
    },
    fotos: [
      "https://i.ibb.co/LDfjDqw4/Battlefield-4-3.webp",
      "https://i.ibb.co/WNGXCGyn/Battlefield-4-5.webp",
      "https://i.ibb.co/RGW4QK93/Battlefield-4-4.webp",
      "https://i.ibb.co/5xkPs7X4/Battlefield-4-2.webp",
      "https://i.ibb.co/HfKhhnSt/Battlefield-4-1.webp"
    ],
    portadaUrl: "https://i.ibb.co/JjYcymTR/portada-Battlefield-4.webp"
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