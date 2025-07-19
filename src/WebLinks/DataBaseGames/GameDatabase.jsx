import React from 'react';
import Card from '../../components/Card';
import ImageData from '../../assets/Banco de imagenes/ImageData';

// Exportar la lista de juegos como una constante
export const games = [
  {
    id: 1,
    image: ImageData["Assassin's Creed Valhalla cover"],
    title: "Assassin's Creed Valhalla",
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