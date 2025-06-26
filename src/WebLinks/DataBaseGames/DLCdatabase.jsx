import React from 'react';
import Card from '../../components/Card';

// Exportar la lista de DLCs como una constante
export const dlcGames = [
  {
    id: 1000000,
    image: 'https://i.ibb.co/cSWh5KnS/assassins-creed-valhalla-cover.webp',
    title: 'Assassin\'s Creed Valhalla - DLC Pack',
    Lenguaje: "",
    platforms: 'PS4, PS5',
    stock: 'si',
    nuevo: 'no',
    Oculto: 'no',
    type: 'dlc',
    PlystationPlus: 'no',
    discount: '',
    discountDate: '',
    // Data para Selecciona tu edición para el compoente @SeleccionaComponente
    editions: {
      Ocultar: 'no',
      PlayStation: {
        Premium: { price: 89.99, description: 'Incluye el DLC base + contenido adicional + DLCs exclusivos para PlayStation.' },
      },
      PS4: {
        Premium: { price: 95.00, description: 'Incluye el DLC base + contenido adicional + DLCs exclusivos para PS4.' },
      },
      PS5: {
        Premium: { price: 100.00, description: 'Incluye el DLC base + contenido adicional + DLCs exclusivos para PS5.' },
      },
    },
    descripcionContenido: 'Expansión de la historia de Assassin\'s Creed Valhalla con nuevas misiones, áreas por explorar y desafíos adicionales. Descubre nuevos secretos y forja tu leyenda en este vasto mundo. Este DLC incluye horas de contenido extra y equipamiento exclusivo.',
    // Data para Selecciona tu licencia del compoente @SeleccionaComponente
    licensePrices: {
      PlayStation: {
        Principal: { price: 0.00, description: 'Licencia principal para esta plataforma.' },
      },
      PS4: {
        Principal: { price: 10.00, description: 'Licencia principal para una cuenta.' },
        Secundario: { price: 6.00, description: 'Licencia secundaria para compartir con un amigo.' },
      },
      PS5: {
        Principal: { price: 18.00, description: 'Licencia principal para una cuenta.' },
        Secundario: { price: 6.00, description: 'Licencia secundaria para compartir con un amigo.' },
      }
    },
    // Data para Seleccionar las imagenes para el componente @GaleriaFotos
    fotos: [
      'https://i.ibb.co/60Pf5FSS/Assassin-s-Creed-Valhalla-1-1-11zon.webp',
      'https://i.ibb.co/cHHGhNq/Assassin-s-Creed-Valhalla-5-1-11zon.webp',
      'https://i.ibb.co/84tNbvf4/Assassin-s-Creed-Valhalla-4-2-11zon.webp',
      'https://i.ibb.co/cHHGhNq/Assassin-s-Creed-Valhalla-5-1-11zon.webp',
      'https://i.ibb.co/xKvsmZDk/Assassin-s-Creed-Valhalla-2-4-11zon.webp',
    ],
     // Data para Seleccionar la portada para el componente @Portada Componente
    portadaUrl: 'https://i.ibb.co/kgxm4jV5/portada-Assassin-s-Creed-Valhalla-5-11zon.webp',
    genre: 'Action RPG - DLC',
    pegiRating: 'PEGI 18',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    releaseDate: '10 noviembre 2021'
  },
  {
    id: 1000001,
    image: 'https://i.ibb.co/60Pf5FSS/Assassin-s-Creed-Valhalla-1-1-11zon.webp',
    title: 'Assassin\'s Creed Valhalla - Wrath of the Druids',
    Lenguaje: "",
    platforms: 'PC, PS4, PS5',
    stock: 'si',
    nuevo: 'no',
    Oculto: 'no',
    type: 'dlc',
    PlystationPlus: 'no',
    discount: '',
    discountDate: '',
    editions: {
      Ocultar: 'no',
      PlayStation: {
        Común: { price: 15.99, description: 'DLC Wrath of the Druids base.' },
      },
      PS4: {
        Común: { price: 18.00, description: 'DLC Wrath of the Druids base para PS4.' },
      },
      PS5: {
        Común: { price: 20.00, description: 'DLC Wrath of the Druids base para PS5.', discount: 'no' },
      },
      PC: {
        Común: { price: 19.99, description: 'DLC Wrath of the Druids base para PC.', discount: 'no' },
      }
    },
    descripcionContenido: 'Explora los misterios de Irlanda y lucha contra un culto oscuro en este DLC épico. Incluye nuevas armas, armaduras y habilidades.',
    licensePrices: {
      PlayStation: { 
        Principal: { price: 0.00, description: 'Licencia principal para esta plataforma.', discount: 'no' },
      },
      PS4: {
        Principal: { price: 8.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
      },
      PS5: {
        Principal: { price: 10.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
      },
      PC: {
        Principal: { price: 15.00, description: 'Licencia principal para una cuenta en PC.', discount: 'no' },
      }
    },
    fotos: [
      'https://i.ibb.co/cHHGhNq/Assassin-s-Creed-Valhalla-5-1-11zon.webp',
    ],
    portadaUrl: 'https://i.ibb.co/kgxm4jV5/portada-Assassin-s-Creed-Valhalla-5-11zon.webp',
    genre: 'Action RPG - DLC',
    pegiRating: 'PEGI 18',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    releaseDate: '13 mayo 2021'
  },
  {
    id: 1000002,
    image: 'https://i.ibb.co/xKvsmZDk/Assassin-s-Creed-Valhalla-2-4-11zon.webp',
    title: 'Assassin\'s Creed Valhalla - The Siege of Paris',
    Lenguaje: "",
    platforms: 'PC, PS4, PS5',
    stock: 'si',
    nuevo: 'no',
    Oculto: 'no',
    type: 'dlc',
    PlystationPlus: 'no',
    discount: '',
    discountDate: '',
    editions: {
      Ocultar: 'no',
      PlayStation: {
      },
      PS3: {
        Común: { price: 20.00, description: 'DLC The Siege of Paris base para PS4.' },
      },

      PS4: {
        Común: { price: 20.00, description: 'DLC The Siege of Paris base para PS4.' },
      },
      PS5: {
        Común: { price: 22.00, description: 'DLC The Siege of Paris base para PS5.', discount: 'no' },
      },

    },
    descripcionContenido: 'Asedia la ciudad de París y descubre una red de espías y conspiraciones en este emocionante DLC. Incluye nuevas misiones, personajes y equipamiento.',
    licensePrices: {
      PlayStation: { 
        Principal: { price: 0.00, description: 'Licencia principal para esta plataforma.', discount: 'no' },
      },
      PS4: {
        Principal: { price: 9.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
      },
      PS5: {
        Principal: { price: 11.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
      },
      PC: {
        Principal: { price: 19.00, description: 'Licencia principal para una cuenta en PC.', discount: 'no' },
      }
    },
    fotos: [
      'https://i.ibb.co/84tNbvf4/Assassin-s-Creed-Valhalla-4-2-11zon.webp',
    ],
    portadaUrl: 'https://i.ibb.co/kgxm4jV5/portada-Assassin-s-Creed-Valhalla-5-11zon.webp',
    genre: 'Action RPG - DLC',
    pegiRating: 'PEGI 18',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    releaseDate: '12 agosto 2021'
  },
  {
    id: 1000003,
    image: 'https://i.ibb.co/60Pf5FSS/Assassin-s-Creed-Valhalla-1-1-11zon.webp',
    title: 'Assassin\'s Creed Valhalla - Dawn of Ragnarök',
    Lenguaje: "",
    platforms: 'PC, PS4, PS5',
    stock: 'si',
    nuevo: 'no',
    Oculto: 'no',
    type: 'dlc',
    PlystationPlus: 'no',
    discount: '',
    discountDate: '',
    editions: {
      Ocultar: 'no',
      PlayStation: {
        Común: { price: 30.99, description: 'DLC Dawn of Ragnarök base.' },
      },
      PS4: {
        Común: { price: 35.00, description: 'DLC Dawn of Ragnarök base para PS4.' },
      },
      PS5: {
        Común: { price: 40.00, description: 'DLC Dawn of Ragnarök base para PS5.', discount: 'no' },
      },
      PC: {
        Común: { price: 39.99, description: 'DLC Dawn of Ragnarök base para PC.', discount: 'no' },
      }
    },
    descripcionContenido: 'Adéntrate en los reinos míticos de la mitología nórdica y asume el destino de un dios en este vasto DLC. Incluye un nuevo mundo para explorar, poderes divinos y enemigos formidables.',
    licensePrices: {
      PlayStation: { 
        Principal: { price: 0.00, description: 'Licencia principal para esta plataforma.', discount: 'no' },
      },
      PS4: {
        Principal: { price: 15.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
      },
      PS5: {
        Principal: { price: 20.00, description: 'Licencia principal para una cuenta.', discount: 'no' },
      },
      PC: {
        Principal: { price: 30.00, description: 'Licencia principal para una cuenta en PC.', discount: 'no' },
      }
    },
    fotos: [
      'https://i.ibb.co/60Pf5FSS/Assassin-s-Creed-Valhalla-1-1-11zon.webp',
    ],
    portadaUrl: 'https://i.ibb.co/kgxm4jV5/portada-Assassin-s-Creed-Valhalla-5-11zon.webp',
    genre: 'Action RPG - DLC',
    pegiRating: 'PEGI 18',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    releaseDate: '10 marzo 2022'
  },
]; 