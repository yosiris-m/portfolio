import infinityCash from "../images/infinity_cash.png";
import ShareExpense from "../images/ShareExpense.png";
import series from "../images/buscador_serie.png";
import TravelBlog from "../images/travelBlog.png";
import WillyWonka from "../images/willy_wonka.png";
import planet from "../images/planet_express.png";
import rickMorty from "../images/rick_morty.png";
import LikesNotLikes from "../images/likes.png";

const projectsList = [
  {
    id: 1,
    title: "InfinityCash",
    description:
      "App que permite crear y agregar transacciones. De manera que puedas llevar control sobre los gastos y los ingresos por mes.",
    urlGit: "https://github.com/yosiris-m/infinity-cash-app",
    urlPage: "https://yosiris-m.github.io/infinity-cash-app/",
    img: infinityCash,
    tools: "JavaScript, React, Bootstrap, Sass",
  },
  {
    id: 2,
    title: "WillyWonka",
    description:
      "Este proyecto para mostrar los helados Willy Wonk donde puedes añadir a favoritos, filtrar por sabores y eliminar de favoritos.                         ",
    urlGit: "https://github.com/yosiris-m/WillyWonka_factory",
    urlPage: "https://github.com/yosiris-m/WillyWonka_factory",
    img: WillyWonka,
    tools: "JavaScript, React,NodeJs, CSS",
  },
  {
    id: 3,
    title: "SharedExpenses",
    description:
      "App para compartir gastos. Permite crear usuarios, agregar pagos, ver el total gastado y ver cuanto tienen que pagar o recibir cada uno.",
    urlGit: "https://github.com/yosiris-m/SharedExpenses",
    urlPage: "https://yosiris-m.github.io/SharedExpenses/#/",
    img: ShareExpense,
    tools: "TypeScript, React, Jest, NodeJs, Sass",
  },
  {
    id: 4,
    title: "TravelBlog",
    description:
      "Sitio web para compartir experiencias sobre viajes en ciudades de todo el mundo.",
    urlGit: "https://github.com/yosiris-m/travel_blog",
    urlPage: "https://github.com/yosiris-m/travel_blog",
    img: TravelBlog,
    tools: "TypeScript, React, Jest, NodeJs, CSS, Docker",
  },

  {
    id: 5,
    title: "LikesNotLikes",
    description:
      "Maquetación responsive creada haciendo uso de photoshop. Permite dar y mostrar los likes a images, con scroll infinito.",
    urlGit: "https://github.com/yosiris-m/likesNotLikes",
    urlPage:  "https://github.com/yosiris-m/likesNotLikes",
    img: LikesNotLikes,
    tools: "JavaScript, React, Sass, Jest",
  }, 
  {
    id: 6,
    title: "PlanetExpress",
    description:
      "Tienda online de artículos de la serie Planet Express. Se pueden filtrar los artículos, añadirlos a la cesta y ver los detalles  de la compra.",
    urlGit: "https://github.com/yosiris-m/planetExpress_app",
    urlPage: "https://github.com/yosiris-m/planetExpress_app",
    img: planet,
    tools: "JavaScript, React, Sass",
  },

  {
    id: 7,
    title: "Rick and Morty",
    description:
      "Página web en la que puedes buscar, filtrar y ver con detalle los personajes de la serie Rick and Morty.",
    urlGit: "https://github.com/yosiris-m/characters-Rick-And-Morty",
    urlPage: "https://yosiris-m.github.io/characters-Rick-And-Morty/#/",
    img: rickMorty,
    tools: "JavaScript, React, Css",
  },
  {
    id: 8,
    title: "Buscador de series",
    description:
      "Aplicación web que permite buscar series por nombre, ver su título, crear un listado de favoritas y eliminarlas de favoritas.",
    urlGit: "https://github.com/yosiris-m/buscador-de-series-yosiris-m",
    urlPage: "https://yosiris-m.github.io/buscador-de-series-yosiris-m/",
    img: series,
    tools: "JavaScript, Css",
  },

];

export default projectsList;
