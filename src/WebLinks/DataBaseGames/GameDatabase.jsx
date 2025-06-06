import React from 'react';
import Card from '../../components/Card';
import BurnoutParadise from './Imagenes_Data_Base/PortadaDataBase/Burnout_Paradise.webp';
import AssassinsCreedValhalla from './Imagenes_Data_Base/PortadaDataBase/Assassin_s-Creed-Valhalla.webp';
import CallOfDutyBlackOps from './Imagenes_Data_Base/PortadaDataBase/Call_Of_Duty_Black_Ops.webp';
import CallOfDutyInfiniteWarfare from './Imagenes_Data_Base/PortadaDataBase/Call_of_Duty_iInfinite_Warfare.webp';
import CrashBandicoot from './Imagenes_Data_Base/PortadaDataBase/Crash_Bandicoot.webp';
import CrashBandicootTrilogy from './Imagenes_Data_Base/PortadaDataBase/Crash_Bandicoot_Trilogy.webp';

// Exportar la lista de juegos como una constante
export const games = [
  {
    id: 1,
    image: AssassinsCreedValhalla,
    title: 'Assassin\'s Creed Valhalla',
    platforms: 'PC, PS4, PS5, Xbox One, Xbox Series X/S',
    price: '$59.99',
    genre: 'Action RPG',
    year: 2020,
    discount: '10%'
  },
  {
    id: 2,
    image: 'ruta/a/imagen2.jpg',
    title: 'Battlefield 1',
    platforms: 'PC, PS4, Xbox One',
    price: '$19.99',
    genre: 'Shooter',
    year: 2016,
    discount: '15%'
  },
  {
    id: 3,
    image: 'ruta/a/imagen3.jpg',
    title: 'Bloodborne (Incluye DLC)',
    platforms: 'PS4',
    price: '$39.99',
    genre: 'Action RPG',
    year: 2015,
    discount: '20%'
  },
  {
    id: 4,
    image: 'ruta/a/imagen4.jpg',
    title: 'WWE',
    platforms: 'PC, PS4, Xbox One',
    price: '$49.99',
    genre: 'Sports',
    year: 2022,
    discount: '10%'
  },
  {
    id: 5,
    image: 'ruta/a/imagen5.jpg',
    title: 'Borderlands 3',
    platforms: 'PC, PS4, Xbox One',
    price: '$59.99',
    genre: 'Shooter',
    year: 2019,
    discount: '10%'
  },
  {
    id: 6,
    image: BurnoutParadise,
    title: 'Burnout: Paradise',
    platforms: 'PC, PS3, Xbox 360',
    price: '$19.99',
    genre: 'Racing',
    year: 2008,
    discount: '15%'
  },
  {
    id: 7,
    image: CrashBandicootTrilogy,
    title: 'Crash Bandicoot Trilogy',
    platforms: 'PS4',
    price: '$39.99',
    genre: 'Platformer',
    year: 2017,
    discount: '20%'
  },
  {
    id: 8,
    image: CrashBandicoot,
    title: 'Crash Bandicoot 4',
    platforms: 'PC, PS4, Xbox One',
    price: '$49.99',
    genre: 'Platformer',
    year: 2020,
    discount: '10%'
  },
  {
    id: 9,
    image: 'ruta/a/imagen9.jpg',
    title: 'Crash Team Racing',
    platforms: 'PS4',
    price: '$39.99',
    genre: 'Racing',
    year: 2019,
    discount: '15%'
  },
  {
    id: 10,
    image: 'ruta/a/imagen10.jpg',
    title: 'Cars 3',
    platforms: 'PC, PS4, Xbox One',
    price: '$29.99',
    genre: 'Racing',
    year: 2017,
    discount: '10%'
  },
  {
    id: 11,
    image: CallOfDutyBlackOps,
    title: 'Call Of Duty: Black Ops 3 (Incluye DLC)',
    platforms: 'PC, PS4, Xbox One',
    price: '$49.99',
    genre: 'Shooter',
    year: 2015,
    discount: '20%'
  },
  {
    id: 12,
    image: CallOfDutyInfiniteWarfare,
    title: 'Call of Duty: Infinite Warfare',
    platforms: 'PC, PS4, Xbox One',
    price: '$39.99',
    genre: 'Shooter',
    year: 2016,
    discount: '15%'
  },
  {
    id: 13,
    image: 'ruta/a/imagen13.jpg',
    title: 'Call of Duty Vanguard',
    platforms: 'PC, PS4, Xbox One',
    price: '$59.99',
    genre: 'Shooter',
    year: 2021,
    discount: '10%'
  },
  {
    id: 14,
    image: 'ruta/a/imagen14.jpg',
    title: 'DOOM',
    platforms: 'PC, PS4, Xbox One',
    price: '$19.99',
    genre: 'Shooter',
    year: 2016,
    discount: '15%'
  },
  {
    id: 15,
    image: 'ruta/a/imagen15.jpg',
    title: 'DmC Devil May Cry',
    platforms: 'PC, PS3, Xbox 360',
    price: '$29.99',
    genre: 'Action',
    year: 2013,
    discount: '10%'
  },
  {
    id: 16,
    image: 'ruta/a/imagen16.jpg',
    title: 'Dragon Ball Xenoverse (Con todos los DLC)',
    platforms: 'PC, PS4, Xbox One',
    price: '$39.99',
    genre: 'Fighting',
    year: 2015,
    discount: '20%'
  },
  {
    id: 17,
    image: 'ruta/a/imagen17.jpg',
    title: 'Dragon Ball Xenoverse 2',
    platforms: 'PC, PS4, Xbox One',
    price: '$49.99',
    genre: 'Fighting',
    year: 2016,
    discount: '15%'
  },
  {
    id: 18,
    image: 'ruta/a/imagen18.jpg',
    title: 'Dragon Ball Fighter Of Z',
    platforms: 'PC, PS4, Xbox One',
    price: '$59.99',
    genre: 'Fighting',
    year: 2018,
    discount: '10%'
  },
  {
    id: 19,
    image: 'ruta/a/imagen19.jpg',
    title: 'Final Fantasy XV',
    platforms: 'PC, PS4, Xbox One',
    price: '$29.99',
    genre: 'RPG',
    year: 2016,
    discount: '15%'
  },
  {
    id: 20,
    image: 'ruta/a/imagen20.jpg',
    title: 'FIFA',
    platforms: 'PC, PS4, Xbox One',
    price: '$59.99',
    genre: 'Sports',
    year: 2022,
    discount: '10%'
  },
  {
    id: 21,
    image: 'ruta/a/imagen21.jpg',
    title: 'Injustice (Con todos los DLC)',
    platforms: 'PC, PS3, Xbox 360',
    price: '$19.99',
    genre: 'Fighting',
    year: 2013,
    discount: '15%'
  },
  {
    id: 22,
    image: 'ruta/a/imagen22.jpg',
    title: 'Injustice 2 (Con todos los DLC)',
    platforms: 'PC, PS4, Xbox One',
    price: '$39.99',
    genre: 'Fighting',
    year: 2017,
    discount: '20%'
  },
  {
    id: 23,
    image: 'ruta/a/imagen23.jpg',
    title: 'Infamous Second Son',
    platforms: 'PS4',
    price: '$29.99',
    genre: 'Action',
    year: 2014,
    discount: '10%'
  },
  {
    id: 24,
    image: 'ruta/a/imagen24.jpg',
    title: 'LIMBO',
    platforms: 'PC, PS3, Xbox 360',
    price: '$9.99',
    genre: 'Puzzle',
    year: 2010,
    discount: '15%'
  },
  {
    id: 25,
    image: 'ruta/a/imagen25.jpg',
    title: 'Lost Words',
    platforms: 'PC, PS4, Xbox One',
    price: '$19.99',
    genre: 'Adventure',
    year: 2019,
    discount: '10%'
  },
  {
    id: 26,
    image: 'ruta/a/imagen26.jpg',
    title: 'Gran Turismo Sports',
    platforms: 'PS4',
    price: '$39.99',
    genre: 'Racing',
    year: 2017,
    discount: '15%'
  },
  {
    id: 27,
    image: 'ruta/a/imagen27.jpg',
    title: 'God Of War 4',
    platforms: 'PS4',
    price: '$49.99',
    genre: 'Action',
    year: 2018,
    discount: '20%'
  },
  {
    id: 28,
    image: 'ruta/a/imagen28.jpg',
    title: 'God Of War Ragnarok',
    platforms: 'PS4, PS5',
    price: '$69.99',
    genre: 'Action',
    year: 2022,
    discount: '10%'
  },
  {
    id: 29,
    image: 'ruta/a/imagen29.jpg',
    title: 'Goat Simulator',
    platforms: 'PC, PS3, Xbox 360',
    price: '$9.99',
    genre: 'Simulation',
    year: 2014,
    discount: '15%'
  },
  {
    id: 30,
    image: 'ruta/a/imagen30.jpg',
    title: 'Marvel Avengers',
    platforms: 'PC, PS4, Xbox One',
    price: '$59.99',
    genre: 'Action',
    year: 2020,
    discount: '10%'
  },
  {
    id: 31,
    image: 'ruta/a/imagen31.jpg',
    title: 'Mortal Kombat 11 (CON DLC)',
    platforms: 'PC, PS4, Xbox One',
    price: '$49.99',
    genre: 'Fighting',
    year: 2019,
    discount: '20%'
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
          genre={game.genre}
          onButtonClick={() => handleClick(game.id)}
        />
      ))}
    </div>
  );
};

export default GameDatabase;