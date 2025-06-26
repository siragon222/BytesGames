import React from 'react';
import Card from '../../components/Card';

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

]; 