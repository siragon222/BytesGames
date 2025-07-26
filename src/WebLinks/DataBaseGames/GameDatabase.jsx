import React from 'react';
import Card from '../../components/Card';
import ImageData from '../../assets/Banco de imagenes/ImageData';

// Exportar la lista de juegos como una constante
export const games = [
  {
    id: 1,
    image: ImageData["Assassin's Creed Valhalla cover"],
    title: "Assassin's Creed Valhalla",
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
    languages: [
      { name: 'English', image: 'idioma-ingles.svg', description: 'Audio & Text' },
      { name: 'Spanish', image: 'venezuela.svg', description: 'Audio & Text' },
    ],
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
      ImageData["Assassin's Creed Valhalla 1"],
      ImageData["Assassin's Creed Valhalla 2"],
      ImageData["Assassin's Creed Valhalla 3"],
      ImageData["Assassin's Creed Valhalla 4"],
      ImageData["Assassin's Creed Valhalla 5"],
    ],
    portadaUrl: ImageData["Assassin's Creed Valhalla Portada"],
  },
  {
    id: 2,
    image: ImageData["Unravel cover"],
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
      ImageData["Unravel 1"],
      ImageData["Unravel 2"],
      ImageData["Unravel 3"],
      ImageData["Unravel 4"],
      ImageData["Unravel 5"]
    ],
    portadaUrl: ImageData["Unravel Portada"]
  },
  {
    id: 3,
    image: ImageData["Astro Bot Rescue Mission cover"],
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
      ImageData["Astro Bot Rescue Mission 1"],
      ImageData["Astro Bot Rescue Mission 2"],
      ImageData["Astro Bot Rescue Mission 3"],
      ImageData["Astro Bot Rescue Mission 4"],
      ImageData["Astro Bot Rescue Mission 5"]
    ],
    portadaUrl: ImageData["Astro Bot Rescue Mission Portada"]
  },
  {
    id: 4,
    image: ImageData["Batman Arkham Collection cover"],
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
      ImageData["Batman Arkham Collection 1"],
      ImageData["Batman Arkham Collection 2"],
      ImageData["Batman Arkham Collection 3"],
      ImageData["Batman Arkham Collection 4"],
      ImageData["Batman Arkham Collection 5"]
    ],
    portadaUrl: ImageData["Batman Arkham Collection Portada"]
  },
  {
    id: 5,
    image: ImageData["Battlefield 4 cover"],
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
      ImageData["Battlefield 4 1"],
      ImageData["Battlefield 4 2"],
      ImageData["Battlefield 4 3"],
      ImageData["Battlefield 4 4"],
      ImageData["Battlefield 4 5"]
    ],
    portadaUrl: ImageData["Battlefield 4 Portada"]
  },
  {
    id: 6,
    image: ImageData["Black Myth Wukong cover"],
    title: "Black Myth: Wukong",
    Lenguaje: "Español",
    platforms: "PS5",
    price: "$52",
    stock: "si",
    nuevo: "si",
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
      ImageData["Black Myth Wukong 1"],
      ImageData["Black Myth Wukong 2"],
      ImageData["Black Myth Wukong 3"],
      ImageData["Black Myth Wukong 4"],
      ImageData["Black Myth Wukong 5"]
    ],
    portadaUrl: ImageData["Black Myth Wukong Portada"]
  },
  {
    id: 7,
    image: ImageData["Dragon Ball FighterZ cover"],
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
      ImageData["Dragon Ball FighterZ 1"],
      ImageData["Dragon Ball FighterZ 2"],
      ImageData["Dragon Ball FighterZ 3"],
      ImageData["Dragon Ball FighterZ 4"]
    ],
    portadaUrl: ImageData["Dragon Ball FighterZ Portada"]
  },
  {
    id: 8,
    image: ImageData["Dragon Ball Xenoverse cover"],
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
      ImageData["Dragon Ball Xenoverse 1"],
      ImageData["Dragon Ball Xenoverse 2"],
      ImageData["Dragon Ball Xenoverse 3"],
      ImageData["Dragon Ball Xenoverse 4"],
      ImageData["Dragon Ball Xenoverse 5"]
    ],
    portadaUrl: ImageData["Dragon Ball Xenoverse Portada"]
  },
  {
    id: 9,
    image: ImageData["Dragon Ball Xenoverse 2 cover"],
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
      ImageData["Dragon Ball Xenoverse 2 1"],
      ImageData["Dragon Ball Xenoverse 2 2"],
      ImageData["Dragon Ball Xenoverse 2 3"],
      ImageData["Dragon Ball Xenoverse 2 4"],
      ImageData["Dragon Ball Xenoverse 2 5"]
    ],
    portadaUrl: ImageData["Dragon Ball Xenoverse 2 Portada"]
  },
  {
    id: 10,
    image: ImageData["Dragon Ball Sparking! Zero cover"],
    title: "Dragon Ball: Sparking! Zero",
    Lenguaje: "Español",
    platforms: "PS5",
    price: "$55",
    stock: "si",
    nuevo: "si",
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
      ImageData["Dragon Ball Sparking! Zero 1"],
      ImageData["Dragon Ball Sparking! Zero 2"],
      ImageData["Dragon Ball Sparking! Zero 3"],
      ImageData["Dragon Ball Sparking! Zero 4"],
      ImageData["Dragon Ball Sparking! Zero 5"]
    ],
    portadaUrl: ImageData["Dragon Ball Sparking! Zero Portada"]
  },
  {
    id: 11,
    image: ImageData["FIFA 17 cover"],
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
      ImageData["FIFA 17 1"],
      ImageData["FIFA 17 2"],
      ImageData["FIFA 17 3"],
      ImageData["FIFA 17 4"],
      ImageData["FIFA 17 5"]
    ],
    portadaUrl: ImageData["FIFA 17 Portada"]
  },
  {
    id: 12,
    image: ImageData["FIFA 18 cover"],
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
      ImageData["FIFA 18 1"],
      ImageData["FIFA 18 2"],
      ImageData["FIFA 18 3"],
      ImageData["FIFA 18 4"],
      ImageData["FIFA 18 5"]
    ],
    portadaUrl: ImageData["FIFA 18 Portada"]
  },
  {
    id: 13,
    image: ImageData["FIFA 20 cover"],
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
      ImageData["FIFA 20 1"],
      ImageData["FIFA 20 2"],
      ImageData["FIFA 20 3"],
      ImageData["FIFA 20 4"],
      ImageData["FIFA 20 5"]
    ],
    portadaUrl: ImageData["FIFA 20 Portada"]
  },
  {
    id: 14,
    image: ImageData["FIFA 21 cover"],
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
      ImageData["FIFA 21 1"],
      ImageData["FIFA 21 2"],
      ImageData["FIFA 21 3"],
      ImageData["FIFA 21 4"],
      ImageData["FIFA 21 5"]
    ],
    portadaUrl: ImageData["FIFA 21 Portada"]
  },
  {
    id: 15,
    image: ImageData["FIFA 22 cover"],
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
      ImageData["FIFA 22 1"],
      ImageData["FIFA 22 2"],
      ImageData["FIFA 22 3"],
      ImageData["FIFA 22 4"],
      ImageData["FIFA 22 5"]
    ],
    portadaUrl: ImageData["FIFA 22 Portada"]
  },
  {
    id: 16,
    image: ImageData["FIFA 23 cover"],
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
      ImageData["FIFA 23 1"],
      ImageData["FIFA 23 2"],
      ImageData["FIFA 23 3"],
      ImageData["FIFA 23 4"],
      ImageData["FIFA 23 5"]
    ],
    portadaUrl: ImageData["FIFA 23 Portada"]
  },
  {
    id: 17,
    image: ImageData["God of War cover"],
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
      ImageData["God of War 1"],
      ImageData["God of War 2"],
      ImageData["God of War 3"],
      ImageData["God of War 4"],
      ImageData["God of War 5"]
    ],
    portadaUrl: ImageData["God of War Portada"]
  },
  {
    id: 18,
    image: ImageData["God of War Ragnarök cover"],
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
      ImageData["God of War Ragnarök 1"],
      ImageData["God of War Ragnarök 2"],
      ImageData["God of War Ragnarök 3"],
      ImageData["God of War Ragnarök 4"],
      ImageData["God of War Ragnarök 5"]
    ],
    portadaUrl: ImageData["God of War Ragnarök Portada"]
  },
  {
    id: 19,
    image: ImageData["NBA 2K17 cover"],
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
      ImageData["NBA 2K17 1"],
      ImageData["NBA 2K17 2"],
      ImageData["NBA 2K17 3"],
      ImageData["NBA 2K17 4"],
      ImageData["NBA 2K17 5"]
    ],
    portadaUrl: ImageData["NBA 2K17 Portada"]
  },
  {
    id: 20,
    image: ImageData["NBA 2K18 cover"],
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
      ImageData["NBA 2K18 1"],
      ImageData["NBA 2K18 2"],
      ImageData["NBA 2K18 3"],
      ImageData["NBA 2K18 4"],
      ImageData["NBA 2K18 5"]
    ],
    portadaUrl: ImageData["NBA 2K18 Portada"]
  },
  {
    id: 21,
    image: ImageData["NBA 2K20 cover"],
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
      ImageData["NBA 2K20 1"],
      ImageData["NBA 2K20 2"],
      ImageData["NBA 2K20 3"],
      ImageData["NBA 2K20 4"],
      ImageData["NBA 2K20 5"]
    ],
    portadaUrl: ImageData["NBA 2K20 Portada"]
  },
  {
    id: 22,
    image: ImageData["Resident Evil 0 HD Remaster cover"],
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
      ImageData["Resident Evil 0 HD Remaster 1"],
      ImageData["Resident Evil 0 HD Remaster 2"],
      ImageData["Resident Evil 0 HD Remaster 3"],
      ImageData["Resident Evil 0 HD Remaster 4"],
      ImageData["Resident Evil 0 HD Remaster 5"]
    ],
    portadaUrl: ImageData["Resident Evil 0 HD Remaster Portada"]
  },
  {
    id: 23,
    image: ImageData["Resident Evil 1 HD Remaster cover"],
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
        ImageData["Resident Evil 1 HD Remaster 1"],
        ImageData["Resident Evil 1 HD Remaster 2"],
        ImageData["Resident Evil 1 HD Remaster 3"],
        ImageData["Resident Evil 1 HD Remaster 4"],
        ImageData["Resident Evil 1 HD Remaster 5"]
    ],
    portadaUrl: ImageData["Resident Evil 1 HD Remaster Portada"]
  },
  {
    id: 24,
    image: ImageData["Resident Evil 2 cover"],
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
      ImageData["Resident Evil 2 1"],
      ImageData["Resident Evil 2 2"],
      ImageData["Resident Evil 2 3"],
      ImageData["Resident Evil 2 4"],
      ImageData["Resident Evil 2 5"]
    ],
    portadaUrl: ImageData["Resident Evil 2 Portada"]
  },
  {
    id: 25,
    image: ImageData["Resident Evil 3 cover"],
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
      ImageData["Resident Evil 3 1"],
      ImageData["Resident Evil 3 2"],
      ImageData["Resident Evil 3 3"],
      ImageData["Resident Evil 3 4"],
      ImageData["Resident Evil 3 5"]
    ],
    portadaUrl: ImageData["Resident Evil 3 Portada"]
  },
  {
    id: 26,
    image: ImageData["Resident Evil 4 cover"],
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
      ImageData["Resident Evil 4 1"],
      ImageData["Resident Evil 4 2"],
      ImageData["Resident Evil 4 3"],
      ImageData["Resident Evil 4 4"],
      ImageData["Resident Evil 4 5"]
    ],
    portadaUrl: ImageData["Resident Evil 4 Portada"]
  },
  {
    id: 27,
    image: ImageData["Resident Evil 7 Biohazard cover"],
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
      ImageData["Resident Evil 7 Biohazard 1"],
      ImageData["Resident Evil 7 Biohazard 2"],
      ImageData["Resident Evil 7 Biohazard 3"],
      ImageData["Resident Evil 7 Biohazard 4"],
      ImageData["Resident Evil 7 Biohazard 5"]
    ],
    portadaUrl: ImageData["Resident Evil 7 Biohazard Portada"]
  },
  {
    id: 28,
    image: ImageData["Resident Evil Revelations 2 cover"],
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
      ImageData["Resident Evil Revelations 2 1"],
      ImageData["Resident Evil Revelations 2 2"],
      ImageData["Resident Evil Revelations 2 3"],
      ImageData["Resident Evil Revelations 2 4"],
      ImageData["Resident Evil Revelations 2 5"]
    ],
    portadaUrl: ImageData["Resident Evil Revelations 2 Portada"]
  },
  {
    id: 29,
    image: ImageData["Resident Evil Village cover"],
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
      ImageData["Resident Evil Village 1"],
      ImageData["Resident Evil Village 2"],
      ImageData["Resident Evil Village 3"],
      ImageData["Resident Evil Village 4"],
      ImageData["Resident Evil Village 5"]
    ],
    portadaUrl: ImageData["Resident Evil Village Portada"]
  },
  {
    id: 30,
    image: ImageData["UFC 2 cover"],
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
      ImageData["UFC 2 1"],
      ImageData["UFC 2 2"],
      ImageData["UFC 2 3"],
      ImageData["UFC 2 4"],
      ImageData["UFC 2 5"]
    ],
    portadaUrl: ImageData["UFC 2 Portada"]
  },
  {
    id: 31,
    image: ImageData["WWE 2K17 cover"],
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
      ImageData["WWE 2K17 1"],
      ImageData["WWE 2K17 2"],
      ImageData["WWE 2K17 3"],
      ImageData["WWE 2K17 4"],
      ImageData["WWE 2K17 5"]
    ],
    portadaUrl: ImageData["WWE 2K17 Portada"]
  },
  {
    id: 32,
    image: ImageData["WWE 2K22 cover"],
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
      ImageData["WWE 2K22 1"],
      ImageData["WWE 2K22 2"],
      ImageData["WWE 2K22 3"],
      ImageData["WWE 2K22 4"],
      ImageData["WWE 2K22 5"]
    ],
    portadaUrl: ImageData["WWE 2K22 Portada"]
  },
  {
    id: 33,
    image: ImageData["EA Sports FC 24 cover"],
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
      ImageData["EA Sports FC 24 1"],
      ImageData["EA Sports FC 24 2"],
      ImageData["EA Sports FC 24 3"],
      ImageData["EA Sports FC 24 4"],
      ImageData["EA Sports FC 24 5"]
    ],
    portadaUrl: ImageData["EA Sports FC 24 Portada"]
  },
  {
    id: 34,
    image: ImageData["Bloodborne cover"],
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
    fotos: [
      ImageData["Bloodborne 1"],
      ImageData["Bloodborne 2"],
      ImageData["Bloodborne 3"],
      ImageData["Bloodborne 4"],
      ImageData["Bloodborne 5"]
    ],
    portadaUrl: ImageData["Bloodborne Portada"]
  },
  {
    id: 35,
    image: ImageData["Borderlands 3 cover"],
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
    fotos: [
      ImageData["Borderlands 3 1"],
      ImageData["Borderlands 3 2"],
      ImageData["Borderlands 3 3"],
      ImageData["Borderlands 3 4"],
      ImageData["Borderlands 3 5"]
    ],
    portadaUrl: ImageData["Borderlands 3 Portada"]
  },
  {
    id: 36,
    image: ImageData["Burnout Paradise Remastered cover"],
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
    JuegosdeRegaloPs4: "79",
    JuegosdeRegaloPs5: "79",
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
    fotos: [
      ImageData["Burnout Paradise Remastered 1"],
      ImageData["Burnout Paradise Remastered 2"],
      ImageData["Burnout Paradise Remastered 3"],
      ImageData["Burnout Paradise Remastered 4"],
      ImageData["Burnout Paradise Remastered 5"]
    ],
    portadaUrl: ImageData["Burnout Paradise Remastered Portada"]
  },
  {
    id: 37,
    image: ImageData["Call of Duty Black Ops 3 cover"],
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
      ImageData["Call of Duty Black Ops 3 1"],
      ImageData["Call of Duty Black Ops 3 2"],
      ImageData["Call of Duty Black Ops 3 3"],
      ImageData["Call of Duty Black Ops 3 4"],
      ImageData["Call of Duty Black Ops 3 5"]
    ],
    portadaUrl: ImageData["Call of Duty Black Ops 3 Portada"]
  },
  {
    id: 38,
    image: ImageData["Call of Duty Infinite Warfare cover"],
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
      ImageData["Call of Duty Infinite Warfare 1"],
      ImageData["Call of Duty Infinite Warfare 2"],
      ImageData["Call of Duty Infinite Warfare 3"],
      ImageData["Call of Duty Infinite Warfare 4"],
      ImageData["Call of Duty Infinite Warfare 5"]
    ],
    portadaUrl: ImageData["Call of Duty Infinite Warfare Portada"]
  },
  {
    id: 39,
    image: ImageData["Call of Duty Vanguard cover"],
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
    fotos: [
      ImageData["Call of Duty Vanguard 1"],
      ImageData["Call of Duty Vanguard 2"],
      ImageData["Call of Duty Vanguard 3"],
      ImageData["Call of Duty Vanguard 4"],
      ImageData["Call of Duty Vanguard 5"]
    ],
    portadaUrl: ImageData["Call of Duty Vanguard Portada"]
  },
  {
    id: 40,
    image: ImageData["Cars 3 Driven to Win cover"],
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
    fotos:[
      ImageData["Cars 3 Driven to Win 1"],
      ImageData["Cars 3 Driven to Win 2"],
      ImageData["Cars 3 Driven to Win 3"],
      ImageData["Cars 3 Driven to Win 4"],
      ImageData["Cars 3 Driven to Win 5"]
    ],
    portadaUrl: ImageData["Cars 3 Driven to Win Portada"]
  },
  {
    id: 41,
    image: ImageData["Crash Bandicoot 4 It's About Time cover"],
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
    fotos: [
      ImageData["Crash Bandicoot 4 It's About Time 1"],
      ImageData["Crash Bandicoot 4 It's About Time 2"],
      ImageData["Crash Bandicoot 4 It's About Time 3"],
      ImageData["Crash Bandicoot 4 It's About Time 4"],
      ImageData["Crash Bandicoot 4 It's About Time 5"]
    ],
    portadaUrl: ImageData["Crash Bandicoot 4 It's About Time Portada"]
  },
  {
    id: 42,
    image: ImageData["Crash Bandicoot N. Sane Trilogy cover"],
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
    fotos: [
      ImageData["Crash Bandicoot N. Sane Trilogy 1"],
      ImageData["Crash Bandicoot N. Sane Trilogy 2"],
      ImageData["Crash Bandicoot N. Sane Trilogy 3"],
      ImageData["Crash Bandicoot N. Sane Trilogy 4"],
      ImageData["Crash Bandicoot N. Sane Trilogy 5"]
    ],
    portadaUrl: ImageData["Crash Bandicoot N. Sane Trilogy Portada"]
  },
  {
    id: 43,
    image: ImageData["Crash Team Racing Nitro-Fueled cover"],
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
    fotos: [
      ImageData["Crash Team Racing Nitro-Fueled 1"],
      ImageData["Crash Team Racing Nitro-Fueled 2"],
      ImageData["Crash Team Racing Nitro-Fueled 3"],
      ImageData["Crash Team Racing Nitro-Fueled 4"],
      ImageData["Crash Team Racing Nitro-Fueled 5"]
    ],
    portadaUrl: ImageData["Crash Team Racing Nitro-Fueled Portada"]
  },
  {
    id: 44,
    image: ImageData["DmC Devil May Cry cover"],
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
    descripcionContenido: "En DmC: Devil May Cry, asume el papel de Dante, un joven con poderes sobrenaturais que se encuentra bajo el asedio de Limbo City, una ciudad aparentemente sensible y habitada por demonios. A medida que Dante recupera sus recuerdos, debe enfrentarse a los demonios que controlan el Limbo, incluyendo al rey demonio Mundus, quien destruyó y separó a su familia. El juego se centra en el combate rápido y la acción intensa, mientras Dante lucha contra las fuerzas demoníacas y descubre la verdad sobre su pasado.",
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
    fotos: [
      ImageData["DmC Devil May Cry 1"],
      ImageData["DmC Devil May Cry 2"],
      ImageData["DmC Devil May Cry 3"],
      ImageData["DmC Devil May Cry 4"],
      ImageData["DmC Devil May Cry 5"]
    ],
    portadaUrl: ImageData["DmC Devil May Cry Portada"]
  },
  {
    id: 45,
    image: ImageData["DOOM cover"],
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
    JuegosdeRegaloPs4: "57",
    JuegosdeRegaloPs5: "57",
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
    fotos: [
      ImageData["DOOM 1"],
      ImageData["DOOM 2"],
      ImageData["DOOM 3"],
      ImageData["DOOM 4"],
      ImageData["DOOM 5"]
    ],
    portadaUrl: ImageData["DOOM Portada"]
  },
  {
    id: 46,
    image: ImageData["Sniper Elitee 5 cover"],
    title: "Sniper Elite 5",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$15",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "",
    discountDate: "",
    LenguajePs3: "",
    LenguajePs4: "",
    LenguajePs5: "",
    
    ListadaDlcPs4: "Crosse DLC, Season Pass",
    ListadaDlcPs5: "Crosse DLC, Season Pass",
    JuegosdeRegaloPs4List:"80, 81, 82, 83, 35",
    JuegosdeRegaloPs5List:"80, 81, 82, 83, 35",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Shooter, Sigilo",
    pegiRating: "PEGI 16",
    developer: "Rebellion Developments",
    publisher: "Rebellion Developments",
    descripcionContenido: "Sniper Elite 5 es la última entrega de la aclamada serie de disparos tácticos. Ponte en la piel del francotirador de élite Karl Fairburne y lucha para descubrir y desmantelar el proyecto secreto nazi Kraken en la Francia de 1944. Experimenta una balística de francotirador inigualable, un combate táctico inmersivo y las icónicas cámaras de muerte X-Ray. Con un sistema de personalización de armas profundo y opciones de juego cooperativo y PvP, Sniper Elite 5 ofrece una experiencia de sigilo y disparos sin igual.",
    releaseDate: "26 de mayo de 2022",
    editions: {
        Ocultar: "si",
        PlayStation: {},
        PS4: {
            Ocultar: "si"
        },
        PS5: {
            Ocultar: "si"
        }
    },
    licensePrices: {
        PlayStation: {},
        PS3: {},
        PS4: {
            Principal: {
                price: 14,
                description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
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
                price: 5,
                description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
                discount: "no"
            },
            Secundaria: {
                price: 7,
                description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
                discount: "no"
            }
        }
    },
    "fotos": [
      ImageData["Sniper Elitee 5 1"],
      ImageData["Sniper Elitee 5 2"],
      ImageData["Sniper Elitee 5 3"],
      ImageData["Sniper Elitee 5 4"],
      ImageData["Sniper Elitee 5 5"]
    ],
    portadaUrl: ImageData["Sniper Elitee 5 Portada"]
  },
  {
    id: 47,
    image: ImageData["Dying Light cover"],
    title: "Dying Light",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$11",
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
    genre: "Acción, Supervivencia, Horror, Mundo Abierto, RPG",
    pegiRating: "PEGI 18",
    developer: "Techland",
    publisher: "Warner Bros. Interactive Entertainment",
    descripcionContenido: "Dying Light es un juego de supervivencia y horror en primera persona ambientado en un vasto mundo abierto postapocalíptico invadido por zombis. Durante el día, los jugadores exploran un entorno urbano expansivo en busca de suministros y fabricando armas para defenderse de la creciente población infectada. Por la noche, el cazador se convierte en la presa, ya que los infectados se vuelven más agresivos y peligrosos, y otros depredadores nocturnos aparecen. Los jugadores deben usar sus habilidades de parkour para sobrevivir mientras completan misiones y luchan por su vida.",
    releaseDate: "27 de enero de 2015",
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
          discount: "si"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 11,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      ImageData["Dying Light 1"],
      ImageData["Dying Light 2"],
      ImageData["Dying Light 3"],
      ImageData["Dying Light 4"],
      ImageData["Dying Light 5"]
    ],
    portadaUrl: ImageData["Dying Light Portada"]
  },
  {
    id: 48,
    image: ImageData["EA Sports FC 25 cover"],
    title: "EA Sports FC 25",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$38",
    stock: "si",
    nuevo: "si",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "50%",
    discountDate: "2025-07-29",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Deportes, Simulación",
    pegiRating: "PEGI 3",
    developer: "EA Vancouver, EA Romania",
    publisher: "EA Sports",
    descripcionContenido: "EA Sports FC 25 es la nueva entrega de la aclamada saga de simulación de fútbol. Con una autenticidad inigualable, el juego cuenta con más de 19,000 jugadores con licencia, 700 equipos y 30 ligas, incluidas competiciones exclusivas como la UEFA Champions League. Esta edición introduce mejoras significativas en la jugabilidad con la tecnología HyperMotionV y un motor Frostbite mejorado, ofreciendo una experiencia de partido más realista. Los jugadores pueden disfrutar de modos de juego como Carrera de Jugador y Mánager, y construir su equipo de ensueño en Ultimate Team.",
    releaseDate: "27 de septiembre de 2024",
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
          price: 35,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 25,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 38,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 25,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      ImageData["EA Sports FC 25 1"],
      ImageData["EA Sports FC 25 2"],
      ImageData["EA Sports FC 25 3"],
      ImageData["EA Sports FC 25 4"],
      ImageData["EA Sports FC 25 5"]
    ],
    portadaUrl: ImageData["EA Sports FC 25 Portada"]
  },
  {
    id: 49,
    image: ImageData["The Evil Within cover"],
    title: "The Evil Within",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$13",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "30%",
    discountDate: "2025-07-29",
    ListadaDlcPs4: "Todos los DLCs",
    ListadaDlcPs5: "Todos los DLCs",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Horror, Supervivencia, Acción",
    pegiRating: "PEGI 18",
    developer: "Tango Gameworks",
    publisher: "Bethesda Softworks",
    descripcionContenido: "The Evil Within, dirigido por Shinji Mikami, el creador de la serie Resident Evil, es una experiencia de survival horror puro. El detective Sebastián Castellanos es testigo de una masacre espeluznante y, al investigar, se encuentra atrapado en un mundo terrorífico lleno de criaturas aterradoras y trampas mortales. Con recursos limitados, Sebastián debe luchar por su supervivencia mientras desentraña una trama misteriosa y se enfrenta a un mal abrumador. El juego combina una atmósfera tensa, una jugabilidad desafiante y una narrativa perturbadora.",
    releaseDate: "14 de octubre de 2014",
    editions: {
      Ocultar: "no",
      PlayStation: {},
      PS4: {
        Estandar: 13,
        Premium: 0
      },
      PS5: {
        Estandar: 14,
        Premium: 0
      }
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 12,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 13,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      ImageData["The Evil Within 1"],
      ImageData["The Evil Within 2"],
      ImageData["The Evil Within 3"],
      ImageData["The Evil Within 4"],
      ImageData["The Evil Within 5"]
    ],
    portadaUrl: ImageData["The Evil Within Portada"]
  },
  {
    id: 50,
    image: ImageData["The Evil Within 2 cover"],
    title: "The Evil Within 2",
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
    genre: "Horror, Supervivencia, Acción",
    pegiRating: "PEGI 18",
    developer: "Tango Gameworks",
    publisher: "Bethesda Softworks",
    descripcionContenido: "En The Evil Within 2, el detective Sebastián Castellanos lo ha perdido todo, incluida su hija Lily. Para salvarla, se ve obligado a colaborar con Mobius, la organización que destruyó su vida anterior. Sebastián debe descender a Union, un mundo de pesadilla creado por la mente de su hija. En este retorcido universo, se enfrentará a amenazas horribles y deberá elegir entre enfrentarlas de frente con armas o escabullirse entre las sombras para sobrevivir. Es una carrera contra el tiempo y una oportunidad de redención en un infierno psicológico.",
    releaseDate: "13 de octubre de 2017",
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
          price: 18,
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
    fotos: [
      ImageData["The Evil Within 2 1"],
      ImageData["The Evil Within 2 2"],
      ImageData["The Evil Within 2 3"],
      ImageData["The Evil Within 2 4"],
      ImageData["The Evil Within 2 5"]
    ],
    portadaUrl: ImageData["The Evil Within 2 Portada"]
  },
  {
    id: 51,
    image: ImageData["The Forest cover"],
    title: "The Forest",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$15",
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
    genre: "Supervivencia, Horror, Mundo Abierto, Indies",
    pegiRating: "PEGI 18",
    developer: "Endnight Games",
    publisher: "Endnight Games",
    descripcionContenido: "The Forest es un juego de terror y supervivencia en primera persona que te sumerge en un mundo aterrador. Como único superviviente de un accidente aéreo, te encuentras en un misterioso bosque luchando por sobrevivir contra una sociedad de mutantes caníbales. Construye, explora y sobrevive en este simulador de terror. Puedes talar árboles para construir un campamento, encender un fuego para calentarte, y buscar comida para no morir de hambre. Defiéndete de una horda de enemigos genéticamente mutados que tienen creencias, familias y una moral que los hace parecer casi humanos.",
    releaseDate: "30 de abril de 2018",
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
    fotos: [
      ImageData["The Forest 1"],
      ImageData["The Forest 2"],
      ImageData["The Forest 3"],
      ImageData["The Forest 4"],
      ImageData["The Forest 5"]
    ],
    portadaUrl: ImageData["The Forest Portada"]
  },
  {
    id: 52,
    image: ImageData["Goat Simulator cover"],
    title: "Goat Simulator",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$6.5",
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
    genre: "Simulación, Indies, Acción",
    pegiRating: "PEGI 12",
    developer: "Coffee Stain Studios",
    publisher: "Coffee Stain Publishing",
    descripcionContenido: "Goat Simulator es un juego de acción y simulación en tercera persona que te permite experimentar el caos como una cabra. El objetivo principal es causar la mayor destrucción posible en un mundo abierto suburbano. Rompe cosas con estilo, como hacer una voltereta hacia atrás mientras golpeas un cubo a través de una ventana para ganar puntos. Con una física deliberadamente rota y un sinfín de fallos divertidos, este juego no pretende ser realista, sino una experiencia de sandbox hilarante. Sé una cabra, explora el mundo y desata el pandemonio.",
    releaseDate: "01 de abril de 2014",
    editions: {
      Ocultar: "no",
      PlayStation: {},
      PS4: {
        Estandar: 6,
        Premium: 9.3
      },
      PS5: {
        Estandar: 6.5,
        Premium: 9.5
      }
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 6,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 2,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 6.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["Goat Simulator 1"],
      ImageData["Goat Simulator 2"],
      ImageData["Goat Simulator 3"],
      ImageData["Goat Simulator 4"],
      ImageData["Goat Simulator 5"]
    ],
    portadaUrl: ImageData["Goat Simulator Portada"]
  },
  {
    id: 53,
    image: ImageData["Gran Turismo Sport cover"],
    title: "Gran Turismo Sport",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$4",
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
    genre: "Carreras, Simulación, Deportes, Realidad Virtual",
    pegiRating: "PEGI 3",
    developer: "Polyphony Digital",
    publisher: "Sony Interactive Entertainment",
    descripcionContenido: "Gran Turismo Sport es un simulador de carreras que redefine el género con un enfoque en las competiciones online y los eSports, sancionados por la FIA. El juego ofrece una experiencia de conducción increíblemente realista, con un manejo preciso y gráficos fotorrealistas. Presenta una cuidada selección de más de 150 coches, desde prototipos de Vision Gran Turismo hasta vehículos de competición y de calle, todos recreados con un detalle excepcional. Compite en múltiples modos, incluyendo el modo Sport para campeonatos en línea, el modo Arcade para carreras rápidas y una escuela de conducción para perfeccionar tus habilidades.",
    releaseDate: "17 de octubre de 2017",
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
          price: 3.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1,
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
          price: 4,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
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
      ImageData["Gran Turismo Sport 1"],
      ImageData["Gran Turismo Sport 2"],
      ImageData["Gran Turismo Sport 3"],
      ImageData["Gran Turismo Sport 4"],
      ImageData["Gran Turismo Sport 5"]
    ],
    portadaUrl: ImageData["Gran Turismo Sport Portada"]
  },
  {
    id: 54,
    image: ImageData["Grand Theft Auto V cover"],
    title: "Grand Theft Auto V",
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
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Acción, Aventura, Mundo Abierto",
    pegiRating: "PEGI 18",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    descripcionContenido: "Grand Theft Auto V es un aclamado juego de acción y aventura en un mundo abierto ambientado en la ficticia ciudad de Los Santos. Los jugadores pueden alternar entre tres protagonistas con historias interconectadas: Michael, un ladrón de bancos retirado; Franklin, un estafador callejero; y Trevor, un psicópata violento. Juntos, se embarcan en una serie de atrevidos atracos mientras navegan por un mundo lleno de crimen, corrupción y sátira social. Además de la extensa campaña para un jugador, el juego incluye Grand Theft Auto Online, un dinámico universo multijugador en constante evolución.",
    releaseDate: "17 de septiembre de 2013",
    editions: {
      Ocultar: "no",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {
        Estandar: 18,
        Premium: 10
      }
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
          price: 18,
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
      ImageData["Grand Theft Auto V 1"],
      ImageData["Grand Theft Auto V 2"],
      ImageData["Grand Theft Auto V 3"],
      ImageData["Grand Theft Auto V 4"],
      ImageData["Grand Theft Auto V 5"]
    ],
    portadaUrl: ImageData["Grand Theft Auto V Portada"]
  },
  {
    id: 55,
    image: ImageData["inFAMOUS Second Son cover"],
    title: "inFAMOUS Second Son",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
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
    genre: "Acción, Aventura, Mundo Abierto",
    pegiRating: "PEGI 16",
    developer: "Sucker Punch Productions",
    publisher: "Sony Computer Entertainment",
    descripcionContenido: "InFAMOUS Second Son es un juego de acción y aventura ambientado en una Seattle ficticia. Los jugadores controlan a Delsin Rowe, un joven grafitero que inesperadamente adquiere superpoderes y se convierte en el objetivo del Departamento de Protección Unificada (D.U.P.). Delsin puede absorber los poderes de otros conductores (superhumanos), lo que le permite desatar habilidades espectaculares de humo, neón y más. El juego presenta un sistema de moralidad en el que las decisiones del jugador determinan si Delsin se convierte en un héroe o en un villano, afectando la historia y la reacción de la ciudad.",
    releaseDate: "21 de marzo de 2014",
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
          price: 4,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 1,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 2.3,
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
        Alquiler: {
          price: 1,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 2.3,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["inFAMOUS Second Son 1"],
      ImageData["inFAMOUS Second Son 2"],
      ImageData["inFAMOUS Second Son 3"],
      ImageData["inFAMOUS Second Son 4"],
      ImageData["inFAMOUS Second Son 5"]
    ],
    portadaUrl: ImageData["inFAMOUS Second Son Portada"]
  },
  {
    id: 56,
    image: ImageData["Injustice Gods Among Us cover"],
    title: "Injustice: Gods Among Us",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$7.5",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "30%",
    discountDate: "2025-07-29",
    ListadaDlcPs4: "Todos los DLCs",
    ListadaDlcPs5: "Todos los DLCs",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Lucha, Acción",
    pegiRating: "PEGI 16",
    developer: "NetherRealm Studios",
    publisher: "Warner Bros. Interactive Entertainment",
    descripcionContenido: "Injustice: Gods Among Us desdibuja la línea entre el bien y el mal en una épica batalla de superhéroes y villanos del universo de DC Comics. En un universo alternativo, Superman se ha convertido en un tirano tras una tragedia personal, y Batman lidera una insurgencia para detenerlo. Este juego de lucha presenta un combate espectacular con un amplio elenco de personajes icónicos, cada uno con movimientos y habilidades únicas. Los jugadores pueden interactuar con los entornos de los escenarios, utilizando objetos como armas o provocando transiciones destructivas. La Ultimate Edition incluye todos los personajes DLC y contenido adicional.",
    releaseDate: "16 de abril de 2013",
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
          price: 7,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 2.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3.9,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 7.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 2.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3.9,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      ImageData["Injustice Gods Among Us 1"],
      ImageData["Injustice Gods Among Us 2"],
      ImageData["Injustice Gods Among Us 3"],
      ImageData["Injustice Gods Among Us 4"],
      ImageData["Injustice Gods Among Us 5"]
    ],
    portadaUrl: ImageData["Injustice Gods Among Us Portada"]
  },
  {
    id: 57,
    image: ImageData["Injustice 2 cover"],
    title: "Injustice 2",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$7.5",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "30%",
    discountDate: "2025-07-29",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "45",
    JuegosdeRegaloPs5: "45",
    genre: "Lucha, Acción, RPG",
    pegiRating: "PEGI 16",
    developer: "NetherRealm Studios",
    publisher: "Warner Bros. Interactive Entertainment",
    descripcionContenido: "Injustice 2 es la secuela del exitoso juego de lucha, que continúa la historia épica del universo de DC. Batman y sus aliados trabajan para reconstruir la sociedad mientras luchan contra los remanentes del régimen de Superman. Sin embargo, surge una nueva amenaza que pone en peligro la existencia de la Tierra. El juego introduce el sistema de equipo, que permite a los jugadores personalizar la apariencia y el estilo de lucha de sus personajes con un equipo poderoso obtenido a lo largo del juego. Con un roster masivo y un combate refinado, Injustice 2 ofrece una experiencia de lucha profunda y cinemática.",
    releaseDate: "16 de mayo de 2017",
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
          price: 7,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 2.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3.9,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 7.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 2.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3.9,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      ImageData["Injustice 2 1"],
      ImageData["Injustice 2 2"],
      ImageData["Injustice 2 3"],
      ImageData["Injustice 2 4"],
      ImageData["Injustice 2 5"]
    ],
    portadaUrl: ImageData["Injustice 2 Portada"]
  },
 {
    id: 58,
    image: ImageData["Legacy of Kain 1 & 2 cover"],
    title: "Legacy of Kain 1 & 2",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$25",
    stock: "si",
    nuevo: "si",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "30%",
    discountDate: "2025-07-29",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Acción, Aventura, Fantasía",
    pegiRating: "PEGI 18",
    developer: "Crystal Dynamics",
    publisher: "Square Enix",
    descripcionContenido: "Sumérgete en un reino gótico de intriga y venganza con Legacy of Kain 1 & 2. Desvela una historia profunda de vampiros y destinos entrelazados, dominando poderes sobrenaturales en un mundo oscuro y cautivador. Prepárate para una aventura que desafiará tu percepción de la justicia y el poder.",
    releaseDate: "10 de diciembre de 2024",
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
          price: 13,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 25,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\\\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 13,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\\\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      ImageData["Legacy of Kain 1 & 2 1"],
      ImageData["Legacy of Kain 1 & 2 2"],
      ImageData["Legacy of Kain 1 & 2 3"],
      ImageData["Legacy of Kain 1 & 2 4"],
      ImageData["Legacy of Kain 1 & 2 5"]
    ],
    portadaUrl: ImageData["Legacy of Kain 1 & 2 Portada"] // Corrected line
  },
  {
    id: 59,
    image: ImageData["LIMBO cover"],
    title: "LIMBO",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$4.5",
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
    genre: "Plataformas, Indies, Aventura",
    pegiRating: "PEGI 16",
    developer: "Playdead",
    publisher: "Playdead",
    descripcionContenido: "LIMBO es un juego de plataformas y puzzles con una estética visual única en blanco y negro. Incierto sobre el destino de su hermana, un niño entra en el LIMBO. El juego presenta un mundo oscuro y peligroso, lleno de trampas mortales y criaturas hostiles. Los jugadores deben guiar al niño a través de este entorno opresivo, resolviendo puzzles basados en la física para progresar. Con un diseño de sonido minimalista y una atmósfera inquietante, LIMBO ofrece una experiencia inmersiva y memorable que desafía tanto el ingenio como los nervios del jugador.",
    releaseDate: "21 de julio de 2010",
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
          price: 4,
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
          price: 4.5,
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
      }
    },
    fotos: [
      ImageData["LIMBO 1"],
      ImageData["LIMBO 2"],
      ImageData["LIMBO 3"],
      ImageData["LIMBO 4"],
      ImageData["LIMBO 5"]
    ],
    portadaUrl: ImageData["LIMBO Portada"]
  },
  {
    id: 60,
    image: ImageData["Naruto Shippuden Ultimate Ninja Storm 4 cover"],
    title: "Naruto Shippuden: Ultimate Ninja Storm 4",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$16",
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
    genre: "Lucha, Acción, Aventura",
    pegiRating: "PEGI 12",
    developer: "CyberConnect2",
    publisher: "Bandai Namco Entertainment",
    descripcionContenido: "Naruto Shippuden: Ultimate Ninja Storm 4 es la culminación de la serie Storm, ofreciendo una experiencia de lucha anime espectacular. Revive los momentos más épicos de la Cuarta Gran Guerra Ninja con un sistema de combate renovado que permite cambiar de personaje líder en medio de la batalla. El juego cuenta con el roster de personajes más grande de la serie, batallas contra jefes masivos y gráficos que recrean fielmente el estilo del anime. Disfruta de una campaña cinemática, modos de batalla en línea y todo el contenido adicional en la edición Road to Boruto.",
    releaseDate: "04 de febrero de 2016",
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
          price: 3,
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
          price: 16,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 3,
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
    fotos: [
      ImageData["Naruto Shippuden Ultimate Ninja Storm 4 1"],
      ImageData["Naruto Shippuden Ultimate Ninja Storm 4 2"],
      ImageData["Naruto Shippuden Ultimate Ninja Storm 4 3"],
      ImageData["Naruto Shippuden Ultimate Ninja Storm 4 4"],
      ImageData["Naruto Shippuden Ultimate Ninja Storm 4 5"]
    ],
    portadaUrl: ImageData["Naruto Shippuden Ultimate Ninja Storm 4 Portada"]
  },
  {
    id: 61,
    image: ImageData["Need for Speed Hot Pursuit Remastered cover"],
    title: "Need for Speed: Hot Pursuit Remastered",
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
    genre: "Carreras, Arcades, Acción",
    pegiRating: "PEGI 7",
    developer: "Stellar Entertainment, Criterion Games",
    publisher: "Electronic Arts",
    descripcionContenido: "Siente la emoción de la persecución en Need for Speed Hot Pursuit Remastered. Desata una salvaje sensación de velocidad tanto como forajido como policía en los coches de alto rendimiento más potentes del mundo. Supera la presión o derriba a los infractores con el armamento táctico a tu disposición en una experiencia de carreras socialmente competitiva. Actualizado con gráficos mejorados, multijugador multiplataforma, incluido el sistema asíncrono Autolog, y todo el contenido descargable principal, esta es la edición definitiva del aclamado debut de Criterion Games.",
    releaseDate: "06 de noviembre de 2020",
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
          price: 25,
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
      ImageData["Need for Speed Hot Pursuit Remastered 1"],
      ImageData["Need for Speed Hot Pursuit Remastered 2"],
      ImageData["Need for Speed Hot Pursuit Remastered 3"],
      ImageData["Need for Speed Hot Pursuit Remastered 4"],
      ImageData["Need for Speed Hot Pursuit Remastered 5"]
    ],
    portadaUrl: ImageData["Need for Speed Hot Pursuit Remastered Portada"]
  },
  {
    id: 62,
    image: ImageData["Need for Speed Rivals cover"],
    title: "Need for Speed Rivals",
    Lenguaje: "Español",
    platforms: "PS3, PS4, PS5",
    price: "$14",
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
    genre: "Carreras, Arcades, Acción, Mundo Abierto",
    pegiRating: "PEGI 7",
    developer: "Ghost Games",
    publisher: "Electronic Arts",
    descripcionContenido: "Bienvenido al condado de Redview, donde la rivalidad entre policías y pilotos nunca cesa. En Need for Speed Rivals, eliges tu bando. Juega como un policía que trabaja en equipo para detener a los corredores, o como un piloto solitario en busca de gloria. Ambas partes tienen sus propios desafíos, recompensas y consecuencias. El juego introduce el sistema AllDrive, que fusiona a la perfección el juego individual y el multijugador, permitiendo que tu mundo y el de tus amigos colisionen. Personaliza tus coches con mejoras de rendimiento y tecnología de persecución para ganar ventaja sobre tus rivales.",
    releaseDate: "15 de noviembre de 2013",
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
          discount: "si"
        },
        Alquiler: {
          price: 3,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      },
      PS5: {
        Principal: {
          price: 14,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      ImageData["Need for Speed Rivals 1"],
      ImageData["Need for Speed Rivals 2"],
      ImageData["Need for Speed Rivals 3"],
      ImageData["Need for Speed Rivals 4"],
      ImageData["Need for Speed Rivals 5"]
    ],
    portadaUrl: ImageData["Need for Speed Rivals Portada"]
  },
  {
    id: 63,
    image: ImageData["Outlast cover"],
    title: "Outlast",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$12",
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
    genre: "Horror, Supervivencia, Indies",
    pegiRating: "PEGI 18",
    developer: "Red Barrels",
    publisher: "Red Barrels",
    descripcionContenido: "Outlast es un juego de terror y supervivencia en primera persona que te pone en la piel del periodista Miles Upshur. Al investigar un misterioso asilo de montaña abandonado, descubre un terrible secreto. Sin armas para defenderse, Miles solo puede correr, esconderse o morir. Su única herramienta es una cámara de vídeo con visión nocturna, cuyas baterías se agotan rápidamente. Explora el asilo de Mount Massive y documenta los horrores que se esconden en su interior, pero ten cuidado: algunos monstruos no pueden ser combatidos, solo evitados. La supervivencia es tu única opción.",
    releaseDate: "04 de septiembre de 2013",
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
          price: 12,
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
      ImageData["Outlast 1"],
      ImageData["Outlast 2"],
      ImageData["Outlast 3"],
      ImageData["Outlast 4"],
      ImageData["Outlast 5"]
    ],
    portadaUrl: ImageData["Outlast Portada"]
  },
  {
    id: 64,
    image: ImageData["Outlast 2 cover"],
    title: "Outlast 2",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$7.5",
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
    genre: "Horror, Supervivencia, Indies",
    pegiRating: "PEGI 18",
    developer: "Red Barrels",
    publisher: "Red Barrels",
    descripcionContenido: "Outlast 2 te presenta a Blake Langermann, un cámara que trabaja con su esposa Lynn. Ambos son periodistas de investigación dispuestos a arriesgarlo todo para descubrir historias que nadie más se atreve a tocar. Su investigación sobre el misterioso asesinato de una mujer embarazada los lleva al desierto de Arizona, a una oscuridad tan profunda que nadie podría arrojar luz sobre ella y una corrupción tan intensa que volverse loco puede ser lo único cuerdo que se pueda hacer. Armado solo con tu cámara, debes sobrevivir en un pueblo aislado y aterrador dominado por un culto demente.",
    releaseDate: "25 de abril de 2017",
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
          price: 7,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 2.5,
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
          price: 7.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 2.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
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
      ImageData["Outlast 2 1"],
      ImageData["Outlast 2 2"],
      ImageData["Outlast 2 3"],
      ImageData["Outlast 2 4"],
      ImageData["Outlast 2 5"]
    ],
    portadaUrl: ImageData["Outlast 2 Portada"]
  },
  {
    id: 65,
    image: ImageData["Overwatch cover"],
    title: "Overwatch",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$11",
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
    genre: "Shooter, Acción, Cooperativo, MMO",
    pegiRating: "PEGI 12",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    descripcionContenido: "Overwatch es un juego de disparos por equipos que se desarrolla en un futuro cercano, donde héroes extraordinarios luchan para proteger el mundo. Elige entre una gran variedad de héroes, cada uno con habilidades únicas y roles específicos. Compite en intensas batallas 6v6 a través de diversos modos de juego y mapas icónicos. El trabajo en equipo y la estrategia son clave para la victoria en Overwatch.",
    releaseDate: "24 de mayo de 2016",
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
          price: 11,
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
    fotos: [
      ImageData["Overwatch 1"],
      ImageData["Overwatch 2"],
      ImageData["Overwatch 3"],
      ImageData["Overwatch 4"],
      ImageData["Overwatch 5"]
    ],
    portadaUrl: ImageData["Overwatch Portada"]
  },
  {
    id: 66,
    image: ImageData["Red Dead Redemption 2 cover"],
    title: "Red Dead Redemption 2",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$11",
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
    genre: "Acción, Aventura, Mundo Abierto",
    pegiRating: "PEGI 18",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    descripcionContenido: "Red Dead Redemption 2 es una épica historia del fin de la era del Salvaje Oeste. En 1899, América está en transición. Después de un atraco fallido, el forajido Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Mientras las autoridades y los cazarrecompensas los persiguen, la banda debe robar y luchar para sobrevivir en el corazón de América. El juego cuenta con un vasto y detallado mundo abierto, una narrativa profunda y la posibilidad de forjar tu propio camino a través de decisiones morales. También incluye Red Dead Online, una vibrante experiencia multijugador.",
    releaseDate: "26 de octubre de 2018",
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
          price: 11,
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
    fotos: [
      ImageData["Red Dead Redemption 2 1"],
      ImageData["Red Dead Redemption 2 2"],
      ImageData["Red Dead Redemption 2 3"],
      ImageData["Red Dead Redemption 2 4"],
      ImageData["Red Dead Redemption 2 5"]
    ],
    portadaUrl: ImageData["Red Dead Redemption 2 Portada"]
  },
  {
    id: 67,
    image: ImageData["Rise of the Tomb Raider cover"],
    title: "Rise of the Tomb Raider",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$6",
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
    genre: "Acción, Aventura",
    pegiRating: "PEGI 18",
    developer: "Crystal Dynamics",
    publisher: "Square Enix",
    descripcionContenido: "En Rise of the Tomb Raider, Lara Croft se embarca en su primera gran expedición de saqueo de tumbas en busca del secreto de la inmortalidad. Viaja a las regiones más remotas y peligrosas de Siberia para encontrar la mítica ciudad de Kitezh. En esta aventura, Lara deberá usar su ingenio y sus habilidades de supervivencia, formar nuevas alianzas y aceptar su destino como la Tomb Raider. El juego combina combates de guerrilla, exploración de tumbas mortales y una narrativa cinematográfica mientras Lara evoluciona de superviviente a una aventurera endurecida.",
    releaseDate: "10 de noviembre de 2015",
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
          price: 5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 2,
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
        Alquiler: {
          price: 2,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
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
      ImageData["Rise of the Tomb Raider 1"],
      ImageData["Rise of the Tomb Raider 2"],
      ImageData["Rise of the Tomb Raider 3"],
      ImageData["Rise of the Tomb Raider 4"],
      ImageData["Rise of the Tomb Raider 5"]
    ],
    portadaUrl: ImageData["Rise of the Tomb Raider Portada"]
  },
  {
    id: 68,
    image: ImageData["Shadow of the Colossus cover"],
    title: "Shadow of the Colossus",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$14",
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
    genre: "Acción, Aventura, Fantasía",
    pegiRating: "PEGI 12",
    developer: "Bluepoint Games, JAPAN Studio",
    publisher: "Sony Interactive Entertainment",
    descripcionContenido: "Shadow of the Colossus es una impresionante remasterización del clásico de PlayStation 2. En este juego, viajas a una tierra prohibida a lomos de tu fiel caballo, Agro, en busca de 16 colosos gigantes. Como un joven llamado Wander, tu misión es derrotar a estas majestuosas criaturas para resucitar a una chica llamada Mono. Cada coloso es un puzzle en sí mismo, y debes descubrir sus debilidades para escalarlos y asestar el golpe final. Es un viaje sobrecogedor y melancólico que explora temas de soledad, sacrificio y la ambigüedad de la moralidad.",
    releaseDate: "06 de febrero de 2018",
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
          price: 14,
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
      ImageData["Shadow of the Colossus 1"],
      ImageData["Shadow of the Colossus 2"],
      ImageData["Shadow of the Colossus 3"],
      ImageData["Shadow of the Colossus 4"],
      ImageData["Shadow of the Colossus 5"]
    ],
    portadaUrl: ImageData["Shadow of the Colossus Portada"]
  },
  {
    id: 69,
    image: ImageData["Slender The Arrival cover"],
    title: "Slender: The Arrival",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$9",
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
    genre: "Horror, Supervivencia, Indies",
    pegiRating: "PEGI 12",
    developer: "Blue Isle Studios",
    publisher: "Blue Isle Studios",
    descripcionContenido: "Slender: The Arrival es la adaptación oficial del fenómeno de internet, Slender Man. El juego te sumerge en una oscura y atmosférica historia llena de terror y paranoia. Estás solo y nadie vendrá a ayudarte. Tu objetivo es sobrevivir a una de las leyendas más aterradoras de la cultura popular. Armado solo con una linterna, debes explorar entornos abandonados y reunir pistas mientras eres acechado por la enigmática figura de Slender Man. La tensión aumenta a medida que avanzas, creando una experiencia de terror psicológico que te mantendrá al borde de tu asiento.",
    releaseDate: "28 de octubre de 2013",
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
          price: 7.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 3,
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
          price: 4.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["Slender The Arrival 1"],
      ImageData["Slender The Arrival 2"],
      ImageData["Slender The Arrival 3"],
      ImageData["Slender The Arrival 4"],
      ImageData["Slender The Arrival 5"]
    ],
    portadaUrl: ImageData["Slender The Arrival Portada"]
  },
  {
    id: 70,
    image: ImageData["Sniper Elite 3 cover"],
    title: "Sniper Elite 3",
    Lenguaje: "Español",
    platforms: "PS3, PS4, PS5",
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
    genre: "Shooter, Acción, Estrategia",
    pegiRating: "PEGI 16",
    developer: "Rebellion Developments",
    publisher: "505 Games",
    descripcionContenido: "Sniper Elite 3 te transporta al exótico y mortal terreno del norte de África durante la Segunda Guerra Mundial. Juega como el francotirador de élite Karl Fairburne, que se infiltra tras las líneas enemigas para sabotear un programa de superarmas nazi. El juego se centra en la elección del jugador, ofreciendo mapas no lineales que permiten múltiples enfoques tácticos. Utiliza el sigilo, la planificación y tus habilidades de francotirador para cazar a tus objetivos. La famosa cámara de muerte por rayos X regresa con más detalle, mostrando los efectos devastadores de cada disparo preciso.",
    releaseDate: "27 de junio de 2014",
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
          price: 6.5,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 2,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3.5,
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
        Alquiler: {
          price: 2,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 3.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["Sniper Elite 3 1"],
      ImageData["Sniper Elite 3 2"],
      ImageData["Sniper Elite 3 3"],
      ImageData["Sniper Elite 3 4"],
      ImageData["Sniper Elite 3 5"]
    ],
    portadaUrl: ImageData["Sniper Elite 3 Portada"]
  },
  {
    id: 71,
    image: ImageData["Tekken 7 cover"],
    title: "Tekken 7",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$25",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "60%",
    discountDate: "2025-07-29",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Lucha, Acción",
    pegiRating: "PEGI 16",
    developer: "Bandai Namco Studios",
    publisher: "Bandai Namco Entertainment",
    descripcionContenido: "Descubre la épica conclusión del clan Mishima y desentraña las razones detrás de cada paso de su incesante lucha. Tekken 7, impulsado por Unreal Engine 4, presenta impresionantes batallas cinemáticas narrativas y duelos intensos que se pueden disfrutar con amigos y rivales por igual a través de innovadoras mecánicas de lucha. El juego ofrece un combate 3D equilibrado y accesible, con un amplio elenco de personajes, cada uno con un profundo conjunto de movimientos. Nuevas mecánicas como los Rage Arts y Power Crushes hacen que las peleas sean más espectaculares y estratégicas que nunca.",
    releaseDate: "02 de junio de 2017",
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
          price: 25,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Alquiler: {
          price: 3,
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
          price: 25,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        },
        Secundaria: {
          price: 10,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "si"
        }
      }
    },
    fotos: [
      ImageData["Tekken 7 1"],
      ImageData["Tekken 7 2"],
      ImageData["Tekken 7 3"],
      ImageData["Tekken 7 4"],
      ImageData["Tekken 7 5"]
    ],
    portadaUrl: ImageData["Tekken 7 Portada"]
  },
  {
    id: 72,
    image: ImageData["Uncharted The Nathan Drake Collection cover"],
    title: "Uncharted: The Nathan Drake Collection",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$14",
    stock: "si",
    nuevo: "no",
    Oculto: "no",
    type: "game",
    PlystationPlus: "si",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "Todos los DLCs",
    ListadaDlcPs5: "Todos los DLCs",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Acción, Aventura, Shooter",
    pegiRating: "PEGI 16",
    developer: "Bluepoint Games",
    publisher: "Sony Computer Entertainment",
    descripcionContenido: "Revive las legendarias aventuras de Nathan Drake en Uncharted: The Nathan Drake Collection. Esta colección incluye las campañas para un jugador de Uncharted: Drake's Fortune, Uncharted 2: Among Thieves y Uncharted 3: Drake's Deception, todas remasterizadas para PlayStation 4. Sigue a Drake en su viaje por todo el mundo, desde selvas exuberantes hasta ciudades perdidas, en busca de tesoros legendarios. Con una narrativa cinematográfica, personajes memorables y un juego que combina disparos, exploración y resolución de acertijos, esta colección es la manera perfecta de experimentar la trilogía que definió una generación.",
    releaseDate: "07 de octubre de 2015",
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
          price: 4.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6.5,
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
        Alquiler: {
          price: 4.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["Uncharted The Nathan Drake Collection 1"],
      ImageData["Uncharted The Nathan Drake Collection 2"],
      ImageData["Uncharted The Nathan Drake Collection 3"],
      ImageData["Uncharted The Nathan Drake Collection 4"],
      ImageData["Uncharted The Nathan Drake Collection 5"]
    ],
    portadaUrl: ImageData["Uncharted The Nathan Drake Collection Portada"]
  },
  {
    id: 73,
    image: ImageData["The Walking Dead The Telltale Definitive Series cover"],
    title: "The Walking Dead: The Telltale Definitive Series",
    Lenguaje: "español",
    platforms: "PS4, PS5",
    price: "$25",
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
    genre: "Aventura, Horror, RPG",
    pegiRating: "PEGI 18",
    developer: "Skybound Games",
    publisher: "Skybound Games",
    descripcionContenido: "The Walking Dead: The Telltale Definitive Series contiene las 4 temporadas completas, el DLC 400 Days y The Walking Dead: Michonne, lo que supone más de 50 horas de juego en 23 episodios únicos. Vive la historia completa de la joven superviviente Clementine mientras crece de niña asustada a una superviviente capaz. Esta colección definitiva incluye mejoras gráficas, extras detrás de las cámaras y recreaciones fieles de los menús clásicos. Es la forma definitiva de experimentar el viaje de Clementine y ver cómo termina su historia en un mundo devastado por los muertos vivientes.",
    releaseDate: "10 de septiembre de 2019",
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
          price: 25,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 5.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 12.5,
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
        Alquiler: {
          price: 5.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 12.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["The Walking Dead The Telltale Definitive Series 1"],
      ImageData["The Walking Dead The Telltale Definitive Series 2"],
      ImageData["The Walking Dead The Telltale Definitive Series 3"],
      ImageData["The Walking Dead The Telltale Definitive Series 4"],
      ImageData["The Walking Dead The Telltale Definitive Series 5"]
    ],
    portadaUrl: ImageData["The Walking Dead The Telltale Definitive Series Portada"]
  },
  {
    id: 74,
    image: ImageData["The Walking Dead A New Frontier cover"],
    title: "The Walking Dead: A New Frontier",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$9",
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
    genre: "Aventura, Horror, Acción",
    pegiRating: "PEGI 18",
    developer: "Telltale Games",
    publisher: "Skybound Games",
    descripcionContenido: "En The Walking Dead: A New Frontier, la sociedad comienza a reconstruirse tras el apocalipsis zombi, pero a un alto costo. Juegas como Javier, un joven decidido a encontrar a su familia, cuyo destino se entrelaza con el de Clementine, ahora una adolescente endurecida por la pérdida. En esta nueva frontera, las decisiones que tomes pueden ser las últimas. La historia se centra en la confianza y el sacrificio en un mundo donde los vivos pueden ser tan peligrosos como los muertos. Experimenta una narrativa ramificada donde tus elecciones moldean la historia.",
    releaseDate: "20 de diciembre de 2016",
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
          price: 2.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4.2,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 9,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 2.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 4.2,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["The Walking Dead A New Frontier 1"],
      ImageData["The Walking Dead A New Frontier 2"],
      ImageData["The Walking Dead A New Frontier 3"],
      ImageData["The Walking Dead A New Frontier 4"],
      ImageData["The Walking Dead A New Frontier 5"]
    ],
    portadaUrl: ImageData["The Walking Dead A New Frontier Portada"]
  },
  {
    id: 75,
    image: ImageData["Wall World cover"],
    title: "Wall World",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$3",
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
    genre: "Acción, Estrategia, Indies, Arcades",
    pegiRating: "PEGI 7",
    developer: "Alawar",
    publisher: "Alawar",
    descripcionContenido: "Wall World es un roguelite de minería con elementos de defensa de torres. Explora minas generadas proceduralmente y descubre biomas fantásticos. A bordo de tu gigantesca rob araña, busca recursos y tecnologías para comprar mejoras valiosas. Lucha contra hordas de monstruos y defiende tu base mientras exploras el Muro. Personaliza tu equipo, mejora tus armas y descubre los secretos de este mundo vertical. Cada partida es una nueva aventura, desafiándote a cavar más profundo y sobrevivir más tiempo contra las amenazas que acechan.",
    releaseDate: "05 de abril de 2023",
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
          price: 3,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 0.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 1.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {
        Principal: {
          price: 3,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 0.5,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 1.5,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["Wall World 1"],
      ImageData["Wall World 2"],
      ImageData["Wall World 3"],
      ImageData["Wall World 4"],
      ImageData["Wall World 5"]
    ],
    portadaUrl: ImageData["Wall World Portada"]
  },
  {
    id: 76,
    image: ImageData["Just Dance 2023 Edition cover"],
    title: "Just Dance 2023 Edition",
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
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Musical, Arcades",
    pegiRating: "PEGI 3",
    developer: "Ubisoft Paris",
    publisher: "Ubisoft",
    descripcionContenido: "¡Bienvenido a una nueva era de la danza con Just Dance 2023 Edition! Por primera vez, baila al ritmo de BTS con Dynamite y otros éxitos de las listas de popularidad. Ahora con multijugador en línea, personalización, mundos inmersivos en 3D y nuevas canciones y modos durante todo el año, podrás vivir una fiesta de baile sin fin. Crea un grupo privado, invita hasta a cinco jugadores y juega como si estuvieran todos en la misma habitación. Con una nueva interfaz de usuario, la experiencia de juego es más intuitiva y personalizada que nunca.",
    releaseDate: "22 de noviembre de 2022",
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
        }
      },
      PS5: {
        Principal: {
          price: 18,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["Just Dance 2023 Edition 1"],
      ImageData["Just Dance 2023 Edition 2"],
      ImageData["Just Dance 2023 Edition 3"],
      ImageData["Just Dance 2023 Edition 4"],
      ImageData["Just Dance 2023 Edition 5"]
    ],
    portadaUrl: ImageData["Just Dance 2023 Edition Portada"]
  },
  {
    id: 77,
    image: ImageData["Immortals of Aveum cover"],
    title: "Immortals of Aveum",
    Lenguaje: "Español",
    platforms: "PS5",
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
    genre: "Shooter, Acción, Fantasía, RPG",
    pegiRating: "PEGI 16",
    developer: "Ascendant Studios",
    publisher: "Electronic Arts",
    descripcionContenido: "Immortals of Aveum es un shooter de magia en primera persona para un solo jugador que cuenta la historia de Jak, quien se une a una orden de élite de magos de batalla para salvar un mundo al borde del abismo. Domina tres fuerzas de la magia, desata hechizos con una habilidad mortal y diezma legiones de enemigos. La humanidad está en una guerra sin fin por el control de la magia. Como un Inmortal, Jak es reclutado por la orden de élite para proteger Aveum y detener la Guerra Eterna. Es una experiencia visceral y cinematográfica que combina una narrativa apasionante con un combate intenso.",
    releaseDate: "22 de agosto de 2023",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: {Ocultar: "si"},
      PS5: {Ocultar: "si"}
    },
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {},
      PS5: {
        Principal: {
          price: 30,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["Immortals of Aveum 1"],
      ImageData["Immortals of Aveum 2"],
      ImageData["Immortals of Aveum 3"],
      ImageData["Immortals of Aveum 4"],
      ImageData["Immortals of Aveum 5"]
    ],
    portadaUrl: ImageData["Immortals of Aveum Portada"]
  },
  {
    id: 78,
    image: ImageData["Just Dance 2025 Edition cover"],
    title: "Just Dance 2025 Edition",
    Lenguaje: "Español",
    platforms: "PS5",
    price: "$30",
    stock: "si",
    nuevo: "si",
    Oculto: "no",
    type: "game",
    PlystationPlus: "no",
    discount: "",
    discountDate: "",
    ListadaDlcPs4: "",
    ListadaDlcPs5: "",
    JuegosdeRegaloPs4: "",
    JuegosdeRegaloPs5: "",
    genre: "Musical, Arcades",
    pegiRating: "PEGI 3",
    developer: "Ubisoft Paris",
    publisher: "Ubisoft",
    descripcionContenido: "¡Reúne a tus amigos y familiares para soltarte con Just Dance 2025 Edition! Ya sea para celebrar, hacer ejercicio o crear momentos familiares especiales, esta edición tiene algo para todos, con 40 nuevas y emocionantes canciones. Disfruta de una amplia variedad de géneros musicales y coreografías para todos los niveles de habilidad. El juego continúa evolucionando con una plataforma de entretenimiento como servicio, trayendo actualizaciones regulares con nueva música, características y recompensas a lo largo del año. ¡La fiesta nunca termina!",
    releaseDate: "15 de octubre de 2024",
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
          price: 30,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      }
    },
    fotos: [
      ImageData["Just Dance 2025 Edition 1"],
      ImageData["Just Dance 2025 Edition 2"],
      ImageData["Just Dance 2025 Edition 3"],
      ImageData["Just Dance 2025 Edition 4"],
      ImageData["Just Dance 2025 Edition 5"]
    ],
    portadaUrl: ImageData["Just Dance 2025 Edition Portada"]
  },
  {
    id: 79,
    image: ImageData["The Walking Dead Season One cover"],
    title: "The Walking Dead: Season One (Inglés)",
    Lenguaje: "Ingles",
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
    JuegosdeRegaloPs4: "36",
    JuegosdeRegaloPs5: "36",
    genre: "Aventura, Horror, Acción",
    pegiRating: "PEGI 18",
    developer: "Telltale Games",
    publisher: "Telltale Games",
    descripcionContenido: "The Walking Dead: Season One es una aventura gráfica dividida en cinco partes y ambientada en el mismo universo que la galardonada serie de cómics de Robert Kirkman. [10] Juega como Lee Everett, un criminal convicto al que se le ha dado una segunda oportunidad en un mundo devastado por los muertos vivientes. [21] Con cadáveres que vuelven a la vida y supervivientes que no se detienen ante nada para mantenerse a salvo, proteger a una niña huérfana llamada Clementine puede ser su redención en un mundo que se ha convertido en el infierno. [3, 4] Las decisiones y acciones que tomes afectarán a cómo se desarrolla tu historia a lo largo de toda la serie. [7]",
    releaseDate: "24 de abril de 2012",
    editions: {
      Ocultar: "si",
      PlayStation: {},
      PS4: { Ocultar: "si" },
      PS5: { Ocultar: "si" }
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
    fotos: [
      ImageData["The Walking Dead Season One 1"],
      ImageData["The Walking Dead Season One 2"],
      ImageData["The Walking Dead Season One 3"],
      ImageData["The Walking Dead Season One 4"],
      ImageData["The Walking Dead Season One 5"]
    ],
    portadaUrl: ImageData["The Walking Dead Season One Portada"]
  },
  {
    id: 80,
    image: ImageData["The Witcher 3 Wild Hunt cover"],
    title: "The Witcher 3: Wild Hunt (Inglés)",
    Lenguaje: "Ingles",
    platforms: "PS4, PS5",
    price: "$15",
    stock: "no",
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
    genre: "RPG, Mundo Abierto, Fantasía, Acción, Aventura",
    pegiRating: "PEGI 18",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    descripcionContenido: "Eres Geralt de Rivia, un cazador de monstruos a sueldo. Ante ti se extiende un continente devastado por la guerra e infestado de monstruos que puedes explorar a tu antojo. Tu contrato actual es encontrar a Ciri, la Niña de la Profecía, un arma viviente que puede alterar la forma del mundo.",
    releaseDate: "19 de mayo de 2015",
    editions: {},
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
          price: 7,
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
          price: 5,
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
    fotos: [
      ImageData["The Witcher 3 Wild Hunt 1"],
      ImageData["The Witcher 3 Wild Hunt 2"],
      ImageData["The Witcher 3 Wild Hunt 3"],
      ImageData["The Witcher 3 Wild Hunt 4"],
      ImageData["The Witcher 3 Wild Hunt 5"]
    ],
    portadaUrl: ImageData["The Witcher 3 Wild Hunt Portada"]
  },
  {
    id: 81,
    image: ImageData["Battlefield 5 cover"],
    title: "Battlefield V",
    Lenguaje: "Español",
    platforms: "PS4",
    price: "$12",
    stock: "no",
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
    genre: "Shooter, Acción, Cooperativo",
    pegiRating: "PEGI 18",
    developer: "DICE",
    publisher: "Electronic Arts",
    descripcionContenido: "Battlefield V te lleva a la Segunda Guerra Mundial como nunca antes la habías visto. Participa en un multijugador masivo con tu escuadrón en modos como Grandes Operaciones y Conquista. Experimenta el drama humano en el corazón del combate global en las Historias de Guerra para un jugador.",
    releaseDate: "20 de noviembre de 2018",
    editions: {},
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {
        Principal: {
          price: 12,
          description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Alquiler: {
          price: 4,
          description: "Licencia Alquiler es...<a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        },
        Secundaria: {
          price: 6,
          description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
          discount: "no"
        }
      },
      PS5: {}
    },
    fotos: [
      ImageData["Battlefield 5 1"],
      ImageData["Battlefield 5 2"],
      ImageData["Battlefield 5 3"],
      ImageData["Battlefield 5 4"],
      ImageData["Battlefield 5 5"]
    ],
    portadaUrl: ImageData["Battlefield 5 Portada"]
  },
  {
    id: 82,
    image: ImageData["Mortal Kombat 11 cover"],
    title: "Mortal Kombat 11",
    Lenguaje: "Español",
    platforms: "PS4, PS5",
    price: "$14",
    stock: "no",
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
    pegiRating: "PEGI 18",
    developer: "NetherRealm Studios",
    publisher: "Warner Bros. Interactive Entertainment",
    descripcionContenido: "Mortal Kombat 11 ofrece una experiencia más profunda y personalizada. Con las nuevas variantes de personajes, tendrás un control sin precedentes para personalizar a tus luchadores. El nuevo motor gráfico resalta cada detalle, desde cráneos destrozados hasta ojos arrancados, sumergiéndote en el combate como nunca antes.",
    releaseDate: "23 de abril de 2019",
    editions: {},
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
          price: 4,
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
        Alquiler: {
          price: 5,
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
    fotos: [
      ImageData["Mortal Kombat 11 1"],
      ImageData["Mortal Kombat 11 2"],
      ImageData["Mortal Kombat 11 3"],
      ImageData["Mortal Kombat 11 4"],
      ImageData["Mortal Kombat 11 5"]
    ],
    portadaUrl: ImageData["Mortal Kombat 11 Portada"]
  },
  {
    id: 83,
    image: ImageData["Mafia Definitive Edition cover"],
    title: "Mafia: Definitive Edition",
    Lenguaje: "Español",
    platforms: "PS4",
    price: "$13",
    stock: "no",
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
    genre: "Acción, Aventura, Mundo Abierto, Shooter",
    pegiRating: "PEGI 18",
    developer: "Hangar 13",
    publisher: "2K Games",
    descripcionContenido: "Rehecho desde cero, Mafia: Definitive Edition es una fiel recreación del clásico de 2002. Tras un encuentro con la mafia, el taxista Tommy Angelo se ve inmerso en el mundo del crimen organizado. Acepta trabajos para la familia Salieri y asciende en sus filas, en una ciudad de la era de la Prohibición llena de arquitectura, coches y cultura de la época.",
    releaseDate: "25 de septiembre de 2020",
    editions: {},
    licensePrices: {
      PlayStation: {},
      PS3: {},
      PS4: {}

    },
    fotos: [
      ImageData["Mafia Definitive Edition 1"],
      ImageData["Mafia Definitive Edition 2"],
      ImageData["Mafia Definitive Edition 3"],
      ImageData["Mafia Definitive Edition 4"],
      ImageData["Mafia Definitive Edition 5"]
    ],
    portadaUrl: ImageData["Mafia Definitive Edition Portada"]
  },
{
  id: 84,
  image: ImageData["It Takes Two cover"],
  title: "It Takes Two",
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
  ListadaDlcPs4: "",
  ListadaDlcPs5: "",
  JuegosdeRegaloPs4List:"80, 81, 82, 83, 35",
  JuegosdeRegaloPs5List:"80, 81, 82, 83, 35",
  JuegosdeRegaloPs4: "",
  JuegosdeRegaloPs5: "",
  genre: "Cooperativo, Plataformas, Aventura, Acción",
  pegiRating: "PEGI 12",
  developer: "Hazelight Studios",
  publisher: "Electronic Arts",
  descripcionContenido: "Embárcate en la aventura más alocada de tu vida en It Takes Two. Juega como la conflictiva pareja Cody y May, dos humanos convertidos en muñecos por un hechizo mágico. Atrapados en un mundo fantástico, el gurú del amor, el Dr. Hakim, los desafía a salvar su relación rota. Supera una gran variedad de desafíos de juego alegremente disruptivos en una experiencia puramente cooperativa.",
  releaseDate: "26 de marzo de 2021",
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
      Secundaria: {
        price: 7,
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
      Secundaria: {
        price: 7,
        description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
        discount: "no"
      }
    }
  },
  fotos: [
    ImageData["It Takes Two 1"],
    ImageData["It Takes Two 2"],
    ImageData["It Takes Two 3"],
    ImageData["It Takes Two 4"],
    ImageData["It Takes Two 5"]
  ],
  portadaUrl: ImageData["It Takes Two Portada"]
},
{
  id: 85,
  image: ImageData["FC26 cover"],
  title: "EA Sports FC 26",
  Lenguaje: "Español",
  platforms: "PS4, PS5",
  price: "18$",
  stock: "si",
  nuevo: "si",
  Oculto: "no",
  type: "game",
  PlystationPlus: "si",
  discount: "",
  discountDate: "",
  ListadaDlcPs4: "",
  ListadaDlcPs5: "",
  JuegosdeRegaloPs4List: "",
  JuegosdeRegaloPs5List: "",
  JuegosdeRegaloPs4: "",
  JuegosdeRegaloPs5: "",
  genre: "Deportes, Simulación",
  pegiRating: "PEGI 3",
  developer: "EA Vancouver, EA Romania",
  publisher: "Electronic Arts",
  descripcionContenido: "EA SPORTS FC 26 promete una experiencia de fútbol más inmersiva y realista. Esta entrega introduce innovaciones significativas en la jugabilidad, como una revisión completa de la mecánica de regate, una inteligencia artificial mejorada para el posicionamiento de los jugadores y animaciones de portero más realistas. El juego incluye más de 20,000 jugadores con licencia, más de 750 clubes y selecciones nacionales, y más de 35 ligas, con derechos exclusivos de competiciones de la UEFA y la CONMEBOL.",
  releaseDate: "26 de septiembre de 2025",
  editions: {
    Ocultar: "no",
    PlayStation: {},
    PS4: {
      Ocultar: "si"
    },
    PS5: {
      Ocultar: "si"
    }
  },
  licensePrices: {
    PlayStation: {},
    PS3: {},
    PS4: {
      Principal: {
        price: 38,
        description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
        discount: "no"
      },
      Secundaria: {
        price: 25,
        description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
        discount: "no"
      }
    },
    PS5: {
      Principal: {
        price: 44,
        description: "Licencia principal es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
        discount: "no"
      },
      Secundaria: {
        price: 25,
        description: "Licencia Secundaria es... <a href=\"/PreguntasFrecuentes\" style=\"text-decoration: underline; font-weight: bold; font-size: 1.1em; color:#FFFF00;\">VER MÁS DETALLES.</a>",
        discount: "no"
      }
    }
  },
  fotos: [
    ImageData["FC26 1"],
    ImageData["FC26 2"],
    ImageData["FC26 3"],
    ImageData["FC26 4"],
    ImageData["FC26 5"]
  ],
  portadaUrl: ImageData["FC26 Portada"]
},
 
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