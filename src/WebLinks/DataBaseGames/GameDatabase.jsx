import React from 'react';
import Card from '../../components/Card';

// Exportar la lista de juegos como una constante
export const games = [
  {
    id: 1,
    image: "https://i.ibb.co/cSWh5KnS/assassins-creed-valhalla-cover.webp",
    title: "Assassin\'s Creed Valhalla",
    Lenguaje: "",
    platforms: "PS4, PS5",
    price: "$16",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "si",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "2",
    JuegosdeRegaloPs5: "2",
    genre: 'Action, RPG',
    pegiRating: "PEGI 18",
    developer: "Ubisoft Montreal",
    publisher: "Ubisoft",
    descripcionContenido: 'Tiene lugar en el siglo IX (comenzando  en 873 d.C.) llevándote por Europa mientras mueves tu clan desde una Noruega gravemente sobrepoblada y devastada por la guerra a Inglaterra, tierra verde de paz, prosperidad y campos fértiles para cultivar. Reino Unido puede tener la reputación de ser un lugar frío y lluvioso, pero en comparación con la desolación casi ártica, no es un sustituto tan malo. Es un juego de aventuras y acción de mundo abierto.',
    releaseDate: "10 de noviembre de 2020",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS4: {
        Principal: { price: 16, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'yes' },
        Secundaria: { price: 7.50, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'yes' },
        Alquiler: { price: 5, description: 'Licencia Alquiler es...<a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'yes' },
      },
      PS5: {
        Principal: { price: 18, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'yes' },
        Secundaria: { price: 7.50, description: 'Licencia Secundaria es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'yes' },
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
        Principal: { price: 9.50, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'yes' },
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
    platforms: "PS3, PS4, PS5",
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
    platforms: "PS3, PS4, PS5",
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
        Valor: { price: 1, description: 'Licencia principal es... <a href="/PreguntasFrecuentes" style="text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;">VER MÁS DETALLES.</a>', discount: 'no' },
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
  {
    id: 6,
    image: "",
    title: "Black Myth: Wukong",
    Lenguaje: "Español",
    platforms: "PS5",
    price: "$52",
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
    genre: "Acción, RPG, Fantasía",
    pegiRating: "PEGI 16",
    developer: "Game Science",
    publisher: "Game Science",
    descripcionContenido: "Adéntrate en la mitología china con Black Myth: Wukong. Este RPG de acción se basa en la clásica novela \"Viaje al Oeste\". Encarna al \"Destinado\" (Sun Wukong) y enfréntate a poderosos enemigos y desafíos en un viaje para descubrir la verdad oculta bajo un velo de gloria.",
    releaseDate: "20 de agosto de 2024",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {
        Principal: {
          price: 52,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 8,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 30,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 19,
    image: "",
    title: "Dragon Ball FighterZ",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$21",
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
    genre: "Lucha, Acción, Arcades",
    pegiRating: "PEGI 12",
    developer: "Arc System Works",
    publisher: "Bandai Namco Entertainment",
    descripcionContenido: "Vive la experiencia de las espectaculares luchas de Dragon Ball como nunca antes. Dragon Ball FighterZ maximiza los gráficos de estilo anime de alta gama y ofrece un juego de lucha fácil de aprender pero difícil de dominar, con combates 3vs3 y un modo historia original.",
    releaseDate: "26 de enero de 2018",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 20,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 21,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 20,
    image: "",
    title: "Dragon Ball Xenoverse",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$18",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "Todos los DLCs",
    ListadaDlcPs5: "Todos los DLCs",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Lucha, Acción, RPG, MMO",
    pegiRating: "PEGI 12",
    developer: "Dimps",
    publisher: "Bandai Namco Entertainment",
    descripcionContenido: "Crea tu propio guerrero y viaja en el tiempo para proteger los momentos icónicos de la historia de Dragon Ball. Únete a Trunks y a la Patrulla del Tiempo para corregir la historia en este RPG de acción y lucha con elementos MMO en la ciudad de Toki Toki.",
    releaseDate: "5 de febrero de 2015",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 16,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 18,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 21,
    image: "",
    title: "Dragon Ball Xenoverse 2",
    Lenguaje: "Español",
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
    JuegosdeRegaloPs4: "FIFA 17, Battlefield 4, Tom Clancys Ghost Recons Widlands",
    JuegosdeRegaloPs5: "FIFA 17, Battlefield 4, Tom Clancys Ghost Recons Widlands",
    genre: "Lucha, Acción, RPG, MMO",
    pegiRating: "PEGI 12",
    developer: "Dimps",
    publisher: "Bandai Namco Entertainment",
    descripcionContenido: "La secuela de Dragon Ball Xenoverse llega con gráficos mejorados, un nuevo centro de operaciones 7 veces más grande y más opciones de personalización. Conviértete en un Patrullero del Tiempo para proteger el pasado y el futuro del universo Dragon Ball.",
    releaseDate: "25 de octubre de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 17,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 8,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 19,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 8,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 22,
    image: "",
    title: "Dragon Ball: Sparking! Zero",
    Lenguaje: "Español",
    platforms: "PS5",
    price: "$55",
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
    genre: "Lucha, Acción",
    pegiRating: "PEGI 12",
    developer: "Spike Chunsoft",
    publisher: "Bandai Namco Entertainment",
    descripcionContenido: "¡La legendaria saga Budokai Tenkaichi regresa! Dragon Ball: Sparking! Zero lleva la jugabilidad a un nuevo nivel con un increíble número de personajes jugables, cada uno con sus habilidades, transformaciones y técnicas características. Desata el poder destructor de los guerreros más fuertes.",
    releaseDate: "11 de octubre de 2024",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {
        Principal: {
          price: 55,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 7,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 30,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 27,
    image: "",
    title: "FIFA 17",
    Lenguaje: "Español",
    platforms: "PS3, PS4, PS5",
    price: "$5",
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
    genre: "Deportes, Simulación",
    pegiRating: "PEGI 3",
    developer: "EA Vancouver, EA Romania",
    publisher: "EA Sports",
    descripcionContenido: "Con la potencia del motor Frostbite, FIFA 17 transforma la forma en que juegas. Introduce el modo historia \"El Camino\", donde vivirás tu propia historia dentro y fuera del campo como la nueva promesa de la Premier League, Alex Hunter.",
    releaseDate: "27 de septiembre de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {
        Principal: {
          price: 1,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS4: {
        Principal: {
          price: 5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 2.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 2.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 28,
    image: "",
    title: "FIFA 18",
    Lenguaje: "Español",
    platforms: "PS3, PS4, PS5",
    price: "$6",
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
    genre: "Deportes, Simulación",
    pegiRating: "PEGI 3",
    developer: "EA Vancouver, EA Romania",
    publisher: "EA Sports",
    descripcionContenido: "Impulsado por Frostbite y con Cristiano Ronaldo, FIFA 18 desdibuja la línea entre el mundo virtual y el real. Disfruta de la continuación de \"El Camino: El regreso de Hunter\" y de la Tecnología de Movimiento Real del Jugador para una respuesta sin precedentes.",
    releaseDate: "29 de septiembre de 2017",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {
        Principal: {
          price: 1.1,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS4: {
        Principal: {
          price: 6,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1.3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 6,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 29,
    image: "",
    title: "FIFA 20",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$7",
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
    genre: "Deportes, Simulación, Arcades",
    pegiRating: "PEGI 3",
    developer: "EA Vancouver, EA Romania",
    publisher: "EA Sports",
    descripcionContenido: "FIFA 20 da vida a las dos caras del deporte rey: el prestigio de los estadios y una nueva experiencia de fútbol callejero en VOLTA Football. Disfruta de una inteligencia futbolística mejorada y un control más preciso de los momentos decisivos.",
    releaseDate: "24 de septiembre de 2019",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 7,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 7,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 30,
    image: "",
    title: "FIFA 21",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$8.5",
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
    genre: "Deportes, Simulación, Cooperativo",
    pegiRating: "PEGI 3",
    developer: "EA Vancouver, EA Romania",
    publisher: "EA Sports",
    descripcionContenido: "Gana en equipo en EA SPORTS FIFA 21. Con nuevas formas de jugar en la calle y en el estadio, disfruta de victorias aún mayores junto a tus amigos. Explora el sistema de regate ágil, las carreras creativas y las mejoras en los fundamentos del fútbol.",
    releaseDate: "6 de octubre de 2020",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 8.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 8.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 31,
    image: "",
    title: "FIFA 22",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$9.5",
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
    genre: "Deportes, Simulación",
    pegiRating: "PEGI 3",
    developer: "EA Vancouver, EA Romania",
    publisher: "EA Sports",
    descripcionContenido: "Con la tecnología HyperMotion en PlayStation 5, FIFA 22 ofrece una experiencia de juego aún más realista. Disfruta de una IA de porteros totalmente renovada, una nueva física del balón y nuevas tácticas ofensivas.",
    releaseDate: "26 de septiembre de 2021",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 9.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1.8,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 9.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 32,
    image: "",
    title: "FIFA 23",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$10",
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
    genre: "Deportes, Simulación",
    pegiRating: "PEGI 3",
    developer: "EA Vancouver, EA Romania",
    publisher: "EA Sports",
    descripcionContenido: "Disfruta del juego del mundo con FIFA 23, que por primera vez incluye clubes de fútbol femenino. La tecnología HyperMotion2 ofrece aún más realismo en el juego, junto con la Copa Mundial de la FIFA masculina y femenina.",
    releaseDate: "27 de septiembre de 2022",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 10,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1.8,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 10,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 35,
    image: "",
    title: "God of War",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$14.5",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "si",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Acción, Aventura, RPG, Fantasía",
    pegiRating: "PEGI 18",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    descripcionContenido: "Kratos vive ahora como un hombre fuera de la sombra de los dioses, en las tierras nórdicas. Junto a su hijo Atreus, debe luchar para sobrevivir en un mundo hostil y brutal mientras le enseña a su hijo a hacer lo mismo. Una nueva era para un icono.",
    releaseDate: "20 de abril de 2018",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 14,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 14.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 36,
    image: "",
    title: "God of War Ragnarök",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$35",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "si",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Acción, Aventura, RPG, Fantasía",
    pegiRating: "PEGI 18",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    descripcionContenido: "Kratos y Atreus se embarcan en un viaje mítico en busca de respuestas antes de que llegue el Ragnarök. Viaja a través de los Nueve Reinos mientras las fuerzas asgardianas se preparan para la guerra. Domina nuevas habilidades de combate y enfréntate a dioses y monstruos.",
    releaseDate: "9 de noviembre de 2022",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 30,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 17,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 35,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 17,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 60,
    image: "",
    title: "NBA 2K17",
    Lenguaje: "Español",
    platforms: "PS3",
    price: "$1",
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
    genre: "Deportes, Simulación",
    pegiRating: "PEGI 3",
    developer: "Visual Concepts",
    publisher: "2K Sports",
    descripcionContenido: "Tras el éxito de NBA 2K16, la saga NBA 2K sigue apostando por ser la simulación deportiva más auténtica. NBA 2K17 lleva el juego a nuevas cotas y continúa difuminando las líneas entre el videojuego y la realidad.",
    releaseDate: "20 de septiembre de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {
        Principal: {
          price: 1,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS4: {},
      PS5: {}
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 61,
    image: "",
    title: "NBA 2K18",
    Lenguaje: "Español",
    platforms: "PS3, PS4, PS5",
    price: "$8.5",
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
    genre: "Deportes, Simulación, Mundo Abierto",
    pegiRating: "PEGI 3",
    developer: "Visual Concepts",
    publisher: "2K Sports",
    descripcionContenido: "El referente anual en videojuegos de baloncesto regresa con un realismo sin igual. NBA 2K18 introduce \"El Barrio\", un entorno de mundo abierto que une los elementos más populares de MiCARRERA, Pro-Am y MiPARQUE en un único espacio social.",
    releaseDate: "15 de septiembre de 2017",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {
        Principal: {
          price: 1.1,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS4: {
        Principal: {
          price: 8.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1.3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 8.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 62,
    image: "",
    title: "NBA 2K20",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$9.5",
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
    genre: "Deportes, Simulación",
    pegiRating: "PEGI 3",
    developer: "Visual Concepts",
    publisher: "2K Sports",
    descripcionContenido: "NBA 2K20 redefine los límites de los videojuegos de deporte con gráficos, mecánicas y control del jugador mejorados, además de modos de juego innovadores y una personalización sin precedentes. Sumérgete en la cultura y la emoción del baloncesto.",
    releaseDate: "6 de septiembre de 2019",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 9.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1.6,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 9.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 71,
    image: "",
    title: "Resident Evil 0 HD Remaster",
    Lenguaje: "Español",
    platforms: "PS3, PS4, PS5",
    price: "$17",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "Resident Evil 1 Remake",
    JuegosdeRegaloPs5: "Resident Evil 1 Remake",
    genre: "Horror, Supervivencia, Aventura",
    pegiRating: "PEGI 18",
    developer: "Capcom",
    publisher: "Capcom",
    descripcionContenido: "Descubre la verdad que se oculta tras la catástrofe de la mansión. Controla a la agente de S.T.A.R.S. Rebecca Chambers y al ex-convicto Billy Coen, alternando entre ambos personajes para resolver puzles y sobrevivir a las pesadillas que les esperan.",
    releaseDate: "19 de enero de 2016",
    editions: {
      Ocultar: "no",
      PlayStation: {},
      PS3: {
        Estandar: 1,
        Premium: 2
      },
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {
        Principal: {
          price: 1.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS4: {
        Principal: {
          price: 15,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 8,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 17,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 8,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 72,
    image: "",
    title: "Resident Evil 2",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$25",
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
    genre: "Horror, Supervivencia, Acción",
    pegiRating: "PEGI 18",
    developer: "Capcom",
    publisher: "Capcom",
    descripcionContenido: "La obra maestra que definió el género regresa, reconstruida desde cero. Utilizando el RE Engine, Resident Evil 2 ofrece una nueva visión del clásico de survival horror con impresionantes gráficos, audio inmersivo y una nueva cámara sobre el hombro.",
    releaseDate: "25 de enero de 2019",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 20,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 25,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 73,
    image: "",
    title: "Resident Evil 3",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$25",
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
    genre: "Horror, Supervivencia, Acción",
    pegiRating: "PEGI 18",
    developer: "Capcom, M-Two",
    publisher: "Capcom",
    descripcionContenido: "Jill Valentine es una de las últimas personas que quedan en Raccoon City. Para detenerla, Umbrella libera su arma secreta definitiva: ¡Nemesis! Sobrevive a una tensa persecución en este remake que también incluye el juego multijugador Resident Evil Resistance.",
    releaseDate: "3 de abril de 2020",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 20,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 25,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 74,
    image: "",
    title: "Resident Evil 4",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$28.5",
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
    genre: "Horror, Supervivencia, Acción, Shooter",
    pegiRating: "PEGI 18",
    developer: "Capcom",
    publisher: "Capcom",
    descripcionContenido: "La supervivencia es solo el comienzo. Seis años después de la catástrofe en Raccoon City, Leon S. Kennedy es enviado a una aldea europea aislada para rescatar a la hija del presidente. Descubre un survival horror de nueva generación con jugabilidad modernizada.",
    releaseDate: "24 de marzo de 2023",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 27,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 14,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 28.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 14,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 75,
    image: "",
    title: "Resident Evil 7: Biohazard",
    Lenguaje: "Español",
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
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Horror, Supervivencia, Realidad Virtual",
    pegiRating: "PEGI 18",
    developer: "Capcom",
    publisher: "Capcom",
    descripcionContenido: "El miedo y el aislamiento se filtran por las paredes de una granja abandonada. Resident Evil 7 marca un nuevo comienzo para el survival horror con una perspectiva en primera persona. Impulsado por el RE Engine, el terror alcanza nuevas cotas de fotorrealismo.",
    releaseDate: "24 de enero de 2017",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 13,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 7,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 16,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 7,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 76,
    image: "",
    title: "Resident Evil Revelations 2",
    Lenguaje: "Español",
    platforms: "PS3, PS4, PS5",
    price: "$14",
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
    genre: "Horror, Supervivencia, Acción, Cooperativo",
    pegiRating: "PEGI 18",
    developer: "Capcom",
    publisher: "Capcom",
    descripcionContenido: "Claire Redfield regresa en esta historia de terror episódica. Tras ser secuestrada, Claire se encuentra en una isla remota. La historia sigue dos líneas temporales con Claire y Barry Burton como protagonistas, ofreciendo una mezcla de terror y acción cooperativa.",
    releaseDate: "24 de febrero de 2015",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {
        Principal: {
          price: 1,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS4: {
        Principal: {
          price: 13,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 7,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 14,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 7,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 77,
    image: "",
    title: "Resident Evil Village",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$28",
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
    genre: "Horror, Supervivencia, Acción, Fantasía",
    pegiRating: "PEGI 18",
    developer: "Capcom",
    publisher: "Capcom",
    descripcionContenido: "Ambientado años después de Resident Evil 7, la historia de Ethan Winters continúa. Ethan vive en paz con su familia, pero la tragedia vuelve a golpearlos. Ahora debe enfrentarse a los horrores de una misteriosa aldea para salvar a su hija secuestrada.",
    releaseDate: "7 de mayo de 2021",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 22,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 12,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 28,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 12,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 86,
    image: "",
    title: "UFC 2",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$8",
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
    genre: "Lucha, Deportes, Simulación",
    pegiRating: "PEGI 16",
    developer: "EA Canada",
    publisher: "EA Sports",
    descripcionContenido: "UFC 2 ofrece una experiencia de lucha increíblemente realista. Con un nuevo sistema de físicas de KO, animaciones realistas y un elenco de luchadores más grande que nunca, cada combate es más visceral. Domina el octágono en el modo Carrera y crea tu equipo en Ultimate Team.",
    releaseDate: "15 de marzo de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 8,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 8,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 92,
    image: "",
    title: "WWE 2K17",
    Lenguaje: "Español",
    platforms: "PS3, PS4, PS5",
    price: "$8.5",
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
    genre: "Lucha, Deportes, Simulación",
    pegiRating: "PEGI 16",
    developer: "Yuke's, Visual Concepts",
    publisher: "2K Sports",
    descripcionContenido: "¡Bienvenido a Suplex City! WWE 2K17 llega como el campeón reinante de los videojuegos de lucha. Con gráficos impresionantes, jugabilidad ultrarrealista y un roster masivo de Superestrellas y Leyendas de la WWE y NXT, vive la emoción del ring.",
    releaseDate: "11 de octubre de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {
        Principal: {
          price: 1,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS4: {
        Principal: {
          price: 7.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 2,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 8.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 93,
    image: "",
    title: "WWE 2K22",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$10",
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
    genre: "Lucha, Deportes, Simulación, Arcades",
    pegiRating: "PEGI 16",
    developer: "Visual Concepts",
    publisher: "2K Sports",
    descripcionContenido: "Con un motor de juego rediseñado y nuevos controles, WWE 2K22 \"Golpea Diferente\". Siente el poder de las Superestrellas, revive momentos clave de la carrera de Rey Mysterio en el 2K Showcase y construye tu propia facción en el nuevo modo Mi FACCIÓN.",
    releaseDate: "8 de marzo de 2022",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 10,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 10,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 94,
    image: "",
    title: "EA Sports FC 24",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$13.5",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "si",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Deportes, Simulación, Cooperativo",
    pegiRating: "PEGI 3",
    developer: "EA Vancouver, EA Romania",
    publisher: "EA Sports",
    descripcionContenido: "EA SPORTS FC 24 marca el comienzo de una nueva era. Con más de 19,000 futbolistas, 700 equipos y 30 ligas, la autenticidad es inigualable. HyperMotionV, PlayStyles optimizados por Opta y un motor Frostbite revolucionado ofrecen la experiencia más realista.",
    releaseDate: "29 de septiembre de 2023",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 13,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 2.3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 13.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
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