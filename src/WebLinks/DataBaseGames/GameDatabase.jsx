import React from 'react';
import Card from '../../components/Card';

// Exportar la lista de juegos como una constante
export const games = [
  {
    id: 1,
    image: "https://i.ibb.co/cSWh5KnS/assassins-creed-valhalla-cover.webp",
    title: "Assassin\'s Creed Valhalla",
    Lenguaje: "Ingles",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    Lenguaje: "Español",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    Lenguaje: "Español",
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
      PS3: {Ocultar: "si"},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    image: "https://i.ibb.co/zh0JCLLB/Black-Myth-Wukong-Cover.webp",
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
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/Fk9pVJK2/Black-Myth-Wukong-5.webp",
      "https://i.ibb.co/9kjNXcgD/Black-Myth-Wukong-4.webp",
      "https://i.ibb.co/x86Wsxvr/Black-Myth-Wukong-3.webp",
      "https://i.ibb.co/PzxhyYXh/Black-Myth-Wukong-2.webp",
      "https://i.ibb.co/8n5t2jFM/Black-Myth-Wukong-1.webp"
    ],
    portadaUrl: "https://i.ibb.co/SD6XbJGJ/Black-Myth-Wukong-Portada.webp"
  },
  {
    id: 7,
    image: "https://i.ibb.co/5WhkJRqP/dragon-ball-fighter-z-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/SXqsvGzj/Dragon-Ball-Fighter-Z-3-3-11zon-6-11zon.webp",
      "https://i.ibb.co/9HQHPs15/Dragon-Ball-Fighter-Z-5-5-11zon-2-11zon.webp",
      "https://i.ibb.co/Y4g7TpPy/Dragon-Ball-Fighter-Z-1-1-11zon-4-11zon.webp",
      "https://i.ibb.co/HDgqfjXp/Dragon-Ball-Fighter-Z-2-2-11zon-5-11zon.webp"

    ],
    portadaUrl: "https://i.ibb.co/Dg6mbVGq/Dragon-Ball-Fighter-Z-portada-6-11zon-3-11zon.webp"
  },
  {
    id: 8,
    image: "https://i.ibb.co/B2B7LmYN/dragon-ball-xenoverse-cover.webp",
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
    ListadaDlcPs4: "1000001",
    ListadaDlcPs5: "1000001",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/Z62sg2JZ/Dragon-Ball-Xenoverse-4-4-11zon-4-11zon.webp",
      "https://i.ibb.co/63cc4FP/Dragon-Ball-Xenoverse-3-3-11zon-3-11zon.webp",
      "https://i.ibb.co/NccfkNf/Dragon-Ball-Xenoverse-5-5-11zon-5-11zon.webp",
      "https://i.ibb.co/YB99GwPL/Dragon-Ball-Xenoverse-1-1-11zon-1-11zon.webp",
      "https://i.ibb.co/bgxTbmJ6/Dragon-Ball-Xenoverse-2-2-11zon-2-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/ynfWgxyn/Dragon-Ball-Xenoverse-portada-6-11zon-6-11zon.webp"
  },
  {
    id: 9,
    image: "https://i.ibb.co/SZjm6Gf/dragon-ball-xenoverse-2-cover.webp",
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
    JuegosdeRegaloPs4: "11, 5, Tom Clancys Ghost Recons Widlands",
    JuegosdeRegaloPs5: "11, 5, Tom Clancys Ghost Recons Widlands",
    genre: "Lucha, Acción, RPG, MMO",
    pegiRating: "PEGI 12",
    developer: "Dimps",
    publisher: "Bandai Namco Entertainment",
    descripcionContenido: "La secuela de Dragon Ball Xenoverse llega con gráficos mejorados, un nuevo centro de operaciones 7 veces más grande y más opciones de personalización. Conviértete en un Patrullero del Tiempo para proteger el pasado y el futuro del universo Dragon Ball.",
    releaseDate: "25 de octubre de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: { Ocultar: "si"},
      PS5: { Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
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
    fotos: [
      "https://i.ibb.co/XZdYxzqq/Dragon-Ball-Xenoverse-2-5-5-11zon-1-11zon.webp",
      "https://i.ibb.co/9kX17hwj/Dragon-Ball-Xenoverse-2-1-1-11zon-3-11zon.webp",
      "https://i.ibb.co/PZ5pvhXY/Dragon-Ball-Xenoverse-2-2-2-11zon-4-11zon.webp",
      "https://i.ibb.co/zTFnB9SZ/Dragon-Ball-Xenoverse-2-3-3-11zon-5-11zon.webp",
      "https://i.ibb.co/GvMCs3tt/Dragon-Ball-Xenoverse-2-4-4-11zon-6-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/zWskbDFt/Dragon-Ball-Xenoverse-2-portada-6-11zon-2-11zon.webp"
  },
  {
    id: 10,
    image: "https://i.ibb.co/CKdh554d/Dragon-Ball-Sparking-Zero-cover.webp",
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
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
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
    fotos: [
      "https://i.ibb.co/Pz6mtXPN/Dragon-Ball-Sparking-Zero-3.webp",
      "https://i.ibb.co/hxgn04pB/Dragon-Ball-Sparking-Zero-2.webp",
      "https://i.ibb.co/k2DJ2jVq/Dragon-Ball-Sparking-Zero-1.webp",
      "https://i.ibb.co/chxD6cCB/Dragon-Ball-Sparking-Zero-5.webp",
      "https://i.ibb.co/fYSv4023/Dragon-Ball-Sparking-Zero-4.webp"
    ],
    portadaUrl: "https://i.ibb.co/JR3bCMK4/Dragon-Ball-Sparking-Zero-portadaa.webp"
  },
  {
    id: 11,
    image: "https://i.ibb.co/ZzCn7hMz/FIFA-17-cover.webp",
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
      PS3: {Ocultar: "si"},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/1fg38QjP/FIFA-17-4-3-11zon-2-11zon.webp",
      "https://i.ibb.co/gMPYB6NZ/FIFA-17-2-4-11zon-3-11zon.webp",
      "https://i.ibb.co/d4sn6KDz/FIFA-17-5-5-11zon-4-11zon.webp",
      "https://i.ibb.co/7thCz8SN/FIFA-17-1-1-11zon-6-11zon.webp",
      "https://i.ibb.co/j9p5MBpX/FIFA-17-3-2-11zon-1-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/ycr4wfbY/portada-6-11zon-5-11zon.webp"
  },
  {
    id: 12,
    image: "https://i.ibb.co/hR1r6rK1/FIFA-18-cover.webp",
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
      PS3: {Ocultar: "si"},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/hJmtVhvm/FIFA-18-4-1-11zon-3-11zon.webp",
      "https://i.ibb.co/xS5bkqzv/FIFA-18-3-6-11zon-2-11zon.webp",
      "https://i.ibb.co/p6wp0NQw/FIFA-18-5-2-11zon-4-11zon.webp",
      "https://i.ibb.co/G31t2RZs/FIFA-18-1-4-11zon-6-11zon.webp",
      "https://i.ibb.co/NgJKMzD3/FIFA-18-2-5-11zon-1-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/1tkX6PXY/FIFA-18-PORTADA-3-11zon-5-11zon.webp"
  },
  {
    id: 13,
    image: "https://i.ibb.co/jxR7vB5/FIFA-20-cover.webp",
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
      PS4: {Ocultar: "si",},
      PS5: {Ocultar: "si",}
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
    fotos: [
      "https://i.ibb.co/DHtjjrWt/FIFA-20-1.webp",
      "https://i.ibb.co/Q7sqxcKX/FIFA-20-5.webp",
"https://i.ibb.co/qYQhJgcv/FIFA-20-4.webp",
"https://i.ibb.co/Psjc7ymg/FIFA-20-3.webp",
"https://i.ibb.co/0yW34Q0g/FIFA-20-2.webp"

    ],
    portadaUrl: "https://i.ibb.co/zW70n8X4/FIFA-20-portada.webp"
  },
  {
    id: 14,
    image: "https://i.ibb.co/LzjkbQdh/FIFA-21-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/yBdXYPtg/fifa-21-4.webp",
"https://i.ibb.co/yFR0RpPd/fifa-21-3.webp",
"https://i.ibb.co/dsMG3xzM/fifa-21-2.webp",
"https://i.ibb.co/RG7CXv1S/fifa-21-1.webp",
"https://i.ibb.co/dswP2R9K/fifa-21-5.webp"
    ],
    portadaUrl: "https://i.ibb.co/jPDRx7nX/fifa-21-portada.webp"
  },
  {
    id: 15,
    image: "https://i.ibb.co/TND3r9L/FIFA-22-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/ynjJYBG0/FIFA-22-1.webp",
"https://i.ibb.co/7N4Sk6Y2/FIFA-22-5.webp",
"https://i.ibb.co/WvwJd5dy/FIFA-22-4.webp",
"https://i.ibb.co/v6QBf4vk/FIFA-22-3.webp",
"https://i.ibb.co/0RQ83TT5/FIFA-22-2.webp"
    ],
    portadaUrl: "https://i.ibb.co/35y2hD7M/FIFA-22-portada.webp"
  },
  {
    id: 16,
    image: "https://i.ibb.co/Xx9Gs32z/FIFA-23-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/3mFRcSxL/fifa-23-1.webp",
      "https://i.ibb.co/B22jLmkr/fifa-23-4.webp",
      "https://i.ibb.co/XrszFKGr/fifa-23-5.webp",
      "https://i.ibb.co/d45Q1DgF/fifa-23-3.webp",
      "https://i.ibb.co/SDZS7cFJ/fifa-23-2.webp"

    ],
    portadaUrl: "https://i.ibb.co/5XGZ2pwG/fifa-23-portada.webp"
  },
  {
    id: 17,
    image: "https://i.ibb.co/KzDChQxS/god-of-war-4-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/QstTMKV/God-Of-War-4-2-2-11zon-2-11zon.webp",
      "https://i.ibb.co/vxQG6Ng6/God-Of-War-4-4-4-11zon-4-11zon.webp",
      "https://i.ibb.co/mVyCmf8T/God-Of-War-4-5-5-11zon-5-11zon.webp",
      "https://i.ibb.co/QvhWPgM4/God-Of-War-4-1-1-11zon-1-11zon.webp",
      "https://i.ibb.co/TxnRbwws/God-Of-War-4-3-3-11zon-3-11zon.webp"

    ],
    portadaUrl: "https://i.ibb.co/7JhMJSH2/God-Of-War-4-portada-6-11zon-6-11zon.webp"
  },
  {
    id: 18,
    image: "https://i.ibb.co/9kKhGs7D/god-of-war-ragnarok-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
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
    fotos: [
      "https://i.ibb.co/B2w74ZsH/God-Of-War-Ragnarok-4-4-11zon-4-11zon.webp",
      "https://i.ibb.co/ks6zjfDJ/God-Of-War-Ragnarok-2-2-11zon-2-11zon.webp",
      "https://i.ibb.co/ZpMWxW6s/God-Of-War-Ragnarok-5-5-11zon-5-11zon.webp",
      "https://i.ibb.co/9HTbD3hk/God-Of-War-Ragnarok-1-1-11zon-1-11zon.webp",
      "https://i.ibb.co/8SS8YYp/God-Of-War-Ragnarok-3-3-11zon-3-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/4nZbnzBf/God-Of-War-Ragnarok-portada-6-11zon-6-11zon.webp"
  },
  {
    id: 19,
    image: "https://i.ibb.co/cKwxR0t7/nba-2k17-1-11zon-1-11zon.webp",
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
      PS3: {Ocultar: "si"},
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
    },
    fotos: [
      "https://i.ibb.co/vxKD25QW/NBA-2-K17-4.webp",
"https://i.ibb.co/v6gkdJwF/NBA-2-K17-3.webp",
"https://i.ibb.co/8DC2Vj0W/NBA-2-K17-2.webp",
"https://i.ibb.co/GfmNGCPy/NBA-2-K17-1.webp",
"https://i.ibb.co/TDVXbrkr/NBA-2-K17-5.webp"
    ],
    portadaUrl: "https://i.ibb.co/ksScsbzR/NBA-2-K17-portada.webp"
  },
  {
    id: 20,
    image: "https://i.ibb.co/2X7vWWk/nba-2k-18-cover.webp",
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
    genre: "Deportes, Simulación",
    pegiRating: "PEGI 3",
    developer: "Visual Concepts",
    publisher: "2K Sports",
    descripcionContenido: "El referente anual en videojuegos de baloncesto regresa con un realismo sin igual. NBA 2K18 introduce \"El Barrio\", un entorno de mundo abierto que une los elementos más populares de MiCARRERA, Pro-Am y MiPARQUE en un único espacio social.",
    releaseDate: "15 de septiembre de 2017",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/67ZjgWL3/NBA-2-K18-5.webp",
"https://i.ibb.co/gbptySHX/NBA-2-K18-4.webp",
"https://i.ibb.co/d4bBqKgS/NBA-2-K18-3.webp",
"https://i.ibb.co/s9BN849b/NBA-2-K18-2.webp",
"https://i.ibb.co/B5v7QVMX/NBA-2-K18-1.webp"
    ],
    portadaUrl: "https://i.ibb.co/ZpyFtQvq/NBA-2-K18-portada.webp"
  },
  {
    id: 21,
    image: "https://i.ibb.co/tTMWDxcT/NBA-2-K20-4-11zon-4-11zon.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/8QxCjR3/nba-2k20-1.webp",
"https://i.ibb.co/20LbjxPT/nba-2k20-4.webp",
"https://i.ibb.co/LKfGFjG/nba-2k20-3.webp",
"https://i.ibb.co/8nrsVTk1/nba-2k20-2.webp",
"https://i.ibb.co/BKBpStwP/nba-2k20-5.webp"
    ],
    portadaUrl: "https://i.ibb.co/B2vq1jQX/nba-2k20-portada.webp"
  },
  {
    id: 22,
    image: "https://i.ibb.co/kzds66G/Resident-Evil-0-HD-Remaster-cover.webp",
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
    JuegosdeRegaloPs3: "23",
    JuegosdeRegaloPs4: "23",
    JuegosdeRegaloPs5: "23",
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
        Estándar: { price: 1, description: 'Incluye el juego base para PS3.', discount: 'no' },
        Premium: { price: 2, description: 'Incluye el juego base + contenido adicional', discount: 'no'},
        },
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/v9c45g5/Resident-Evil-0-HD-Remaster-5.webp",
"https://i.ibb.co/3mBZhvYX/Resident-Evil-0-HD-Remaster-4.webp",
"https://i.ibb.co/v4BbRQW2/Resident-Evil-0-HD-Remaster-3.webp",
"https://i.ibb.co/VYgCGDV8/Resident-Evil-0-HD-Remaster-2.webp",
"https://i.ibb.co/sdZdXRLt/Resident-Evil-0-HD-Remaster-1.webp"
    ],
    portadaUrl: "https://i.ibb.co/KzR6jk4X/Resident-Evil-0-HD-Remaster-portada.webp"
  },
  {
    id: 23,
    image: "https://i.ibb.co/F4DzCKRY/Resident-Evil-remaster-coverr.webp",
    title: "Resident Evil 1 HD Remaster",
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
    JuegosdeRegaloPs3: "22",
    JuegosdeRegaloPs4: "22",
    JuegosdeRegaloPs5: "22",
    genre: "Horror, Supervivencia, Aventura",
    pegiRating: "PEGI 18",
    developer: "Capcom",
    publisher: "Capcom",
    descripcionContenido: "Prepárate para revivir el horror original. En Resident Evil HD Remaster, te sumergirás en la espeluznante mansión Spencer para descubrir la verdad detrás de la desaparición del equipo Bravo. Controla a los icónicos agentes de S.T.A.R.S., Chris Redfield y Jill Valentine, mientras exploran los retorcidos pasillos, resuelven complejos puzles y luchan por sobrevivir a las terroríficas criaturas que acechan en cada esquina. Esta versión remasterizada ofrece gráficos mejorados, sonido envolvente y la misma atmósfera claustrofóbica que definió el género del survival horror.",
    releaseDate: "20 de enero de 2015",
    editions: {
      Ocultar: "no",
      PlayStation: {},
      PS3: { 
        Estándar: { price: 1, description: 'Incluye el juego base para PS3.', discount: 'no' },
        Premium: { price: 2, description: 'Incluye el juego base + contenido adicional', discount: 'no'},
        },
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
        "https://i.ibb.co/HDVBG1BQ/Resident-Evil-remaster-5.webp",
        "https://i.ibb.co/X1DJWyr/Resident-Evil-remaster-4.webp",
        "https://i.ibb.co/1G42jG7S/Resident-Evil-remaster-3.webp",
        "https://i.ibb.co/zj3QJNx/Resident-Evil-remaster-2.webp",
        "https://i.ibb.co/ycL3y79y/Resident-Evil-remaster-1.webp"
    ],
    portadaUrl: "https://i.ibb.co/kV47nmB6/Resident-Evil-remaster-portada.webp"
  },
  {
    id: 24,
    image: "https://i.ibb.co/Q3WTCMHV/Resident-Evil-2-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
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
    fotos: [
      "https://i.ibb.co/BMbXyjx/Resident-Evil-2-Remake-4-4-11zon.webp",
      "https://i.ibb.co/ks3xvZff/Resident-Evil-2-Remake-5-5-11zon.webp",
      "https://i.ibb.co/VcqKYwz5/Resident-Evil-2-Remake-1-1-11zon.webp",
      "https://i.ibb.co/mfwwXqM/Resident-Evil-2-Remake-2-2-11zon.webp",
      "https://i.ibb.co/tTcKsWqj/Resident-Evil-2-Remake-3-3-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/gZ2gZqcb/Resident-Evil-2-Remake-portada-6-11zon.webp"
  },
  {
    id: 25,
    image: "https://i.ibb.co/6R969r8N/Resident-Evil-3-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
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
    fotos: [
      "https://i.ibb.co/T9zhdW7/Resident-Evil-3-2-2-11zon.webp",
      "https://i.ibb.co/qLzsCy4h/Resident-Evil-3-3-3-11zon.webp",
      "https://i.ibb.co/cShsFfBg/Resident-Evil-3-4-4-11zon.webp",
      "https://i.ibb.co/RkdVv0t9/Resident-Evil-3-1-1-11zon.webp",
      "https://i.ibb.co/pv4jMVnX/Resident-Evil-3-5-5-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/fGLPcnnd/Resident-Evil-3-portada-6-11zon.webp"
  },
  {
    id: 26,
    image: "https://i.ibb.co/3mx8Pjhf/Resident-Evil-4-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
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
    fotos: [
      "https://i.ibb.co/T9zhdW7/Resident-Evil-3-2-2-11zon.webp",
      "https://i.ibb.co/qLzsCy4h/Resident-Evil-3-3-3-11zon.webp",
      "https://i.ibb.co/cShsFfBg/Resident-Evil-3-4-4-11zon.webp",
      "https://i.ibb.co/RkdVv0t9/Resident-Evil-3-1-1-11zon.webp",
      "https://i.ibb.co/pv4jMVnX/Resident-Evil-3-5-5-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/fGLPcnnd/Resident-Evil-3-portada-6-11zon.webp"
  },
  {
    id: 27,
    image: "https://i.ibb.co/PvmpLnrV/resident-evil-7-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
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
    fotos: [
      "https://i.ibb.co/6J7MH8TD/Resident-Evil-7-Biohazard-1-1-11zon.webp",
      "https://i.ibb.co/mV7qGq36/Resident-Evil-7-Biohazard-3-3-11zon.webp",
      "https://i.ibb.co/G38W80s4/Resident-Evil-7-Biohazard-4-4-11zon.webp",
      "https://i.ibb.co/MySfwLnj/Resident-Evil-7-Biohazard-5-5-11zon.webp",
      "https://i.ibb.co/WvG16swz/Resident-Evil-7-Biohazard-2-2-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/mFRwNxLp/Resident-Evil-7-Biohazard-portada-6-11zon.webp"
  },
  {
    id: 28,
    image: "https://i.ibb.co/3mVCCjZ2/Resident-Evil-Revelations-2-cover.webp",
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
      PS3: {Ocultar: "si"},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/RTGycZNj/Resident-Evil-Revelations-2-1.webp",
      "https://i.ibb.co/qY3ytTVj/Resident-Evil-Revelations-2-4.webp",
      "https://i.ibb.co/wNjNScpw/Resident-Evil-Revelations-2-3.webp",
      "https://i.ibb.co/CK6BfYtt/Resident-Evil-Revelations-2-2.webp",
      "https://i.ibb.co/dsC763FP/Resident-Evil-Revelations-2-5.webp"
    ],
    portadaUrl: "https://i.ibb.co/przc2NmW/Resident-Evil-Revelations-2-portada.webp"
  },
  {
    id: 29,
    image: "https://i.ibb.co/LhH82Pvj/Resident-Evil-Village-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/5Prj7gP/Resident-Evil-Village-5-4-11zon.webp",
      "https://i.ibb.co/1yt3xsj/Resident-Evil-Village-2-1-11zon.webp",
      "https://i.ibb.co/Xry7jBg8/Resident-Evil-Village-3-2-11zon.webp",
      "https://i.ibb.co/b5hrbQdr/resident-evil-village-4.webp",
      "https://i.ibb.co/BHnksLSs/Resident-Evil-Village-1-6-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/FkJY0jcY/Resident-Evil-Village-portada-5-11zon.webp"
  },
  {
    id: 30,
    image: "https://i.ibb.co/bjQtZm4v/UFC-2-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
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
    fotos: [
      "https://i.ibb.co/5xsmQTDJ/ufc-2-1.webp",
"https://i.ibb.co/Y4jNLSBr/ufc-2-5.webp",
"https://i.ibb.co/zWwv0XG2/ufc-2-4.webp",
"https://i.ibb.co/Nd9vNLgR/ufc-2-3.webp",
"https://i.ibb.co/k6yxfbhn/ufc-2-2.webp"
    ],
    portadaUrl: "https://i.ibb.co/21LpyTgF/ufc-2-portada.webp"
  },
  {
    id: 31,
    image: "https://i.ibb.co/s9Jwy4PS/wwe-2k17-11-11zon-11-11zon.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/NgqfWFm1/WWE-2-K17-2.webp",
"https://i.ibb.co/gbsGHN8b/WWE-2-K17-1.webp",
"https://i.ibb.co/jvnD8Ww0/WWE-2-K17-5.webp",
"https://i.ibb.co/yn5WZR5Q/WWE-2-K17-4.webp",
"https://i.ibb.co/Jw26rnbt/WWE-2-K17-3.webp"
    ],
    portadaUrl: "https://i.ibb.co/XQL1P70/WWE-2-K17-portada.webp"
  },
  {
    id: 32,
    image: "https://i.ibb.co/dzj7yBJ/wwe-2k22-15-11zon-15-11zon.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/tMgtqFjy/WWE-2-K22-5.webp",
"https://i.ibb.co/GQmrFdmL/WWE-2-K22-4.webp",
"https://i.ibb.co/39VdqHrb/WWE-2-K22-3.webp",
"https://i.ibb.co/bgyv3Q29/WWE-2-K22-2.webp",
"https://i.ibb.co/W4dXS46v/WWE-2-K22-1.webp"
    ],
    portadaUrl: "https://i.ibb.co/dwZVNHhz/WWE-2-K22-portada.webp"
  },
  {
    id: 33,
    image: "https://i.ibb.co/x83QtnRf/EA-Sports-FC-24-cover.webp",
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
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
    fotos: [
      "https://i.ibb.co/N6ZDzTfW/EA-Sports-FC-24-5-5-11zon-3-11zon.webp",
"https://i.ibb.co/7xvyJqGZ/EA-Sports-FC-24-4-4-11zon-2-11zon.webp",
"https://i.ibb.co/prJcCWrT/EA-Sports-FC-24-1-1-11zon-5-11zon.webp",
"https://i.ibb.co/SXtQNPYs/EA-Sports-FC-24-2-2-11zon-6-11zon.webp",
"https://i.ibb.co/j9FFdSV0/EA-Sports-FC-24-3-3-11zon-1-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/8n3mg7ZB/EA-Sports-FC-24-portada-6-11zon-4-11zon.webp"
  },
  {
    id: 34,
    image: "https://i.ibb.co/chmK4rr7/Bloodborne-cover.webp",
    title: "Bloodborne",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$27",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "si",
    discount: "50%",
    discountDate: "2025-07-25",
    ListadaDlcPs4: "Todos los DLCs",
    ListadaDlcPs5: "Todos los DLCs",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "RPG",
    pegiRating: "PEGI 16",
    developer: "FromSoftware",
    publisher: "Sony Computer Entertainment",
    descripcionContenido: "Sumérgete en el espeluznante mundo gótico de Yharnam, una ciudad asolada por una extraña enfermedad. Como cazador, te embarcarás en una búsqueda para desentrañar los oscuros secretos de la ciudad y enfrentarte a criaturas horripilantes. Bloodborne es un desafiante RPG de acción conocido por su combate exigente, su atmósfera opresiva y su intrincada narrativa lovecraftiana, donde cada esquina esconde un peligro y cada victoria se siente ganada con sudor y sangre.",
    releaseDate: "24 de marzo de 2015",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
      PS4: {
        Principal: {
          price: 25,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 12,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 27,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Secundaria: {
          price: 12,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 35,
    image: "https://i.ibb.co/Jjf4pQkZ/borderlands-3-cover.webp",
    title: "Borderlands 3",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$20",
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
    genre: "Shooter",
    pegiRating: "PEGI 18",
    developer: "Gearbox Software",
    publisher: "2K Games",
    descripcionContenido: "Prepárate para el caos intergaláctico en este looter-shooter cooperativo. Únete a uno de los cuatro Buscacámaras, cada uno con habilidades y árboles de destrezas únicos, y embárcate en una misión para detener a los gemelos Calypso, líderes de una secta despiadada que buscan apoderarse del poder de las Cámaras. Con miles de millones de armas disponibles y nuevos mundos para explorar más allá de Pandora, Borderlands 3 ofrece una aventura llena de humor, acción frenética y botín ilimitado.",
    releaseDate: "13 de septiembre de 2019",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 19,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 5,
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
          price: 20,
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
    id: 36,
    image: "https://i.ibb.co/5hqtDfwM/burnout-paradise-cover.webp",
    title: "Burnout Paradise Remastered",
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
    JuegosdeRegaloPs4: "The Walking Dead 1 (Inglés)",
    JuegosdeRegaloPs5: "The Walking Dead 1 (Inglés)",
    genre: "Carreras",
    pegiRating: "PEGI 7",
    developer: "Criterion Games",
    publisher: "Electronic Arts",
    descripcionContenido: "Experimenta la máxima adrenalina en un mundo abierto diseñado para la destrucción. Burnout Paradise Remastered te permite recorrer las calles de Paradise City, participar en carreras de alta velocidad, realizar acrobacias espectaculares y chocar contra tus rivales en gloriosas colisiones. Esta versión remasterizada incluye todo el contenido descargable original y mejoras técnicas para ofrecer gráficos impresionantes y una jugabilidad fluida.",
    releaseDate: "16 de marzo de 2018",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 9,
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
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 37,
    image: "https://i.ibb.co/20QhnZ6B/call-of-duty-black-ops-3-cover.webp",
    title: "Call of Duty: Black Ops 3",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$20",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "30%",
    discountDate: "2025-07-29",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Shooter",
    pegiRating: "PEGI 18",
    developer: "Treyarch",
    publisher: "Activision",
    descripcionContenido: "Adéntrate en un futuro oscuro y retorcido en este shooter en primera persona. En 2065, la biotecnología ha dado lugar a una nueva generación de soldados de élite, los Black Ops, que están siempre conectados. La campaña te sumerge en un viaje psicológico con giros inesperados, mientras que el multijugador ofrece una experiencia completa y adictiva. Además, el aclamado modo Zombies regresa con su propia progresión basada en XP, añadiendo profundidad y rejugabilidad.",
    releaseDate: "6 de noviembre de 2015",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 20,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 20,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      "https://i.ibb.co/kCTPN9G/Call-Of-Duty-Black-Ops-3-5-5-11zon-3-11zon.webp",
"https://i.ibb.co/KpVNSVbZ/Call-Of-Duty-Black-Ops-3-1-1-11zon-5-11zon.webp",
"https://i.ibb.co/211kk3Lp/Call-Of-Duty-Black-Ops-3-2-2-11zon-6-11zon.webp",
"https://i.ibb.co/BHZwd0vz/Call-Of-Duty-Black-Ops-3-3-3-11zon-1-11zon.webp",
"https://i.ibb.co/hF3SbbbD/Call-Of-Duty-Black-Ops-3-4-4-11zon-2-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/fdnxpmv2/Call-Of-Duty-Black-Ops-3-portada-6-11zon-4-11zon.webp"
  },
  {
    id: 38,
    image: "https://i.ibb.co/wZHdXQwF/call-of-duty-infinite-warfare-cover.webp",
    title: "Call of Duty: Infinite Warfare",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
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
    genre: "Shooter",
    pegiRating: "PEGI 18",
    developer: "Infinity Ward",
    publisher: "Activision",
    descripcionContenido: "Lucha por la supervivencia de la humanidad en una guerra que se extiende por todo el sistema solar. En esta entrega, la campaña sigue al Capitán Nick Reyes, quien debe liderar a su equipo en combates tanto en la Tierra como en el espacio, incluyendo escenarios de gravedad cero. El juego combina la acción característica de Call of Duty con una narrativa de ciencia ficción militar y ofrece modos de juego innovadores, incluyendo un multijugador futurista y un modo Zombies con elementos clásicos y nuevas características.",
    releaseDate: "4 de noviembre de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
          price: 4,
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
          price: 14,
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
    fotos: [
      "https://i.ibb.co/cPSV0cz/Call-of-Duty-Infinite-Warfare-2-2-11zon-6-11zon.webp",
"https://i.ibb.co/DHpqMs9t/Call-of-Duty-Infinite-Warfare-1-1-11zon-5-11zon.webp",
"https://i.ibb.co/HLJPSg4j/Call-of-Duty-Infinite-Warfare-3-3-11zon-1-11zon.webp",
"https://i.ibb.co/qP48T7w/Call-of-Duty-Infinite-Warfare-4-4-11zon-2-11zon.webp",
"https://i.ibb.co/Sw6Mgr9H/Call-of-Duty-Infinite-Warfare-5-5-11zon-3-11zon.webp"
    ],
    portadaUrl: "https://i.ibb.co/XkS9PBff/Call-of-Duty-Infinite-Warfare-portada-6-11zon-4-11zon.webp"
  },
  {
    id: 39,
    image: "https://i.ibb.co/v6JC27Rj/call-of-duty-vanguard-cover.webp",
    title: "Call of Duty: Vanguard",
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
    genre: "Shooter",
    pegiRating: "PEGI 18",
    developer: "Sledgehammer Games",
    publisher: "Activision",
    descripcionContenido: "Lucha por la supervivencia de la humanidad en una guerra que se extiende por todo el sistema solar. En esta entrega, la campaña sigue al Capitán Nick Reyes, quien debe liderar a su equipo en combates tanto en la Tierra como en el espacio, incluyendo escenarios de gravedad cero. El juego combina la acción característica de Call of Duty con una narrativa de ciencia ficción militar y ofrece modos de juego innovadores, incluyendo un multijugador futurista y un modo Zombies con elementos clásicos y nuevas características.",
    releaseDate: "5 de noviembre de 2021",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
          price: 8,
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
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 40,
    image: "https://i.ibb.co/xt1QCWNY/Card-Hacia-La-Victoria-cover.webp",
    title: "Cars 3: Driven to Win",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$20",
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
    genre: "Carreras",
    pegiRating: "PEGI 3",
    developer: "Avalanche Software",
    publisher: "Warner Bros. Interactive Entertainment",
    descripcionContenido: "Basado en la película de Disney-Pixar Cars 3, este juego de carreras te invita a poner a prueba tus habilidades al volante. Practica y mejora tus técnicas de manejo como el derrape y el turbo en seis emocionantes modos de juego. Desafía a amigos y familiares en carreras de combate para demostrar quién es el campeón definitivo, avanzando en tu carrera para convertirte en un corredor digno del Salón de la Fama.",
    releaseDate: "13 de junio de 2017",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
          price: 4,
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
          price: 20,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
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
    id: 41,
    image: "https://i.ibb.co/d4by6PXK/crash-bandicoot-4-cover.webp",
    title: "Crash Bandicoot 4: It's About Time",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$30",
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
    genre: "Plataformas",
    pegiRating: "PEGI 7",
    developer: "Toys for Bob",
    publisher: "Activision",
    descripcionContenido: "Únete a Crash y Coco en una nueva aventura interdimensional para salvar el multiverso. Cuando Neo Cortex y N. Tropy escapan de prisión y lanzan un asalto en múltiples universos, nuestros héroes deben reunir las cuatro Máscaras Cuánticas, guardianas del tiempo y el espacio. Estas máscaras otorgan a Crash y Coco poderes para alterar las reglas de la realidad, permitiéndoles superar obstáculos de formas nuevas y emocionantes.",
    releaseDate: "2 de octubre de 2020",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
          price: 15,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
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
          price: 15,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 42,
    image: "https://i.ibb.co/q3qjR4fZ/crash-bandicoot-trilogy-cover.webp",
    title: "Crash Bandicoot N. Sane Trilogy",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$20",
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
    genre: "Plataformas",
    pegiRating: "PEGI 7",
    developer: "Vicarious Visions",
    publisher: "Activision",
    descripcionContenido: "Revive las icónicas aventuras de Crash Bandicoot en esta colección remasterizada. Juega a los tres títulos originales: Crash Bandicoot, Crash Bandicoot 2: Cortex Strikes Back y Crash Bandicoot 3: Warped. Controla a Crash o, por primera vez, a su hermana Coco, mientras saltas, giras y conduces a través de niveles locos para frustrar los malvados planes del Dr. Neo Cortex. Disfruta de gráficos y audio actualizados que traen de vuelta la nostalgia de estos clásicos de PlayStation.",
    releaseDate: "30 de junio de 2017",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
          price: 4,
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
          price: 20,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
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
    id: 43,
    image: "https://i.ibb.co/TBGzDDnP/crash-team-racing-cover.webp",
    title: "Crash Team Racing Nitro-Fueled",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$20",
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
    genre: "Carreras",
    pegiRating: "PEGI 3",
    developer: "Beenox",
    publisher: "Activision",
    descripcionContenido: "Experimenta la emoción de las carreras de karts con Crash Team Racing Nitro-Fueled, una fantástica remasterización del clásico de 1999. Desarrollado por Beenox, este juego combina la nostalgia del original con gráficos renovados, mecánicas de juego mejoradas y contenido adicional, incluyendo nuevas pistas y personajes. Elige entre una amplia gama de personajes del universo de Crash, compite en carreras llenas de potenciadores y descubre rutas secretas en pistas desafiantes, ya sea en el Modo Aventura para un jugador o en el multijugador local y en línea.",
    releaseDate: "21 de junio de 2019",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
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
          price: 5,
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
          price: 20,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
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
    id: 44,
    image: "https://i.ibb.co/y2SC4yF/dmc-devil-may-cry-cover.webp",
    title: "DmC: Devil May Cry",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$15",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "30%",
    discountDate: "2025-07-29",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Acción",
    pegiRating: "PEGI 16",
    developer: "Ninja Theory",
    publisher: "Capcom",
    descripcionContenido: "En DmC: Devil May Cry, asume el papel de Dante, un joven con poderes sobrenaturales que se encuentra bajo el asedio de Limbo City, una ciudad aparentemente sensible y habitada por demonios. A medida que Dante recupera sus recuerdos, debe enfrentarse a los demonios que controlan el Limbo, incluyendo al rey demonio Mundus, quien destruyó y separó a su familia. El juego se centra en el combate rápido y la acción intensa, mientras Dante lucha contra las fuerzas demoníacas y descubre la verdad sobre su pasado.",
    releaseDate: "15 de enero de 2013",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 15,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 8,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 15,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 8,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [],
    portadaUrl: ""
  },
  {
    id: 45,
    image: "https://i.ibb.co/JSH9MRg/doom-cover.webp",
    title: "DOOM",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$15",
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
    genre: "Shooter",
    pegiRating: "PEGI 18",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    descripcionContenido: "Prepárate para una experiencia de disparos en primera persona brutal y desafiante. En DOOM, te conviertes en un marine espacial anónimo que debe luchar contra hordas demoníacas desatadas por la Union Aerospace Corporation en una instalación colonizada en Marte. El juego se destaca por su acción implacable, su combate visceral y su enfoque en la eliminación de demonios con un arsenal de armas devastadoras, mientras exploras un entorno invadido por las fuerzas del infierno.",
    releaseDate: "13 de mayo de 2016",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
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
          language={game.Lenguaje}
        />
      ))}
    </div>
  );
};

export default GameDatabase;