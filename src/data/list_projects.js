import familyCash from "../images/family_app.png";
import ShareExpense from "../images/ShareExpense.png";
import series from "../images/buscador_serie.png";
import card from "../images/card.png";
import maquetacionProyecto from "../images/maquetacion_web.png";
import planet from "../images/planet_express.png";
import rickMorty from "../images/rick_morty.png";

const projectsList = [
  {
    id: 1,
    title: "FamilyCash",
    description:
      "App que permite crear y agregar transacciones. De manera que puedas llevar control sobre los gastos y los ingresos por mes. Aún en construcción.",
    urlGit: "https://github.com/yosiris-m/family-cash-app",
    urlPage: "https://family-cash-app.herokuapp.com/",
    img: familyCash,
    tools: "JavaScript, React, Bootstrap, Sass",
  },
  {
    id: 2,
    title: "SharedExpenses",
    description:
      "App para compartir gastos. Permite crear usuarios, agregar pagos, ver el total gastado y cuanto tiene que pagar o recibir cada uno de los integrantes.",
    urlGit: "https://github.com/yosiris-m/SharedExpenses",
    urlPage: "https://yosiris-m.github.io/SharedExpenses/#/",
    img: ShareExpense,
    tools: "TypeScript, React, Jest, NodeJs, Sass",
  },


  {
    id: 3,
    title: "PlanetExpress",
    description:
      "Tienda online de artículos de la serie Planet Express. Se pueden filtrar los artículos, añadirlos a la cesta y ver los detalles  de la compra.",
    urlGit: "https://github.com/yosiris-m/enthec_planetExpress_app",
    urlPage: "https://yosiris-m.github.io/enthec_planetExpress_app/",
    img: planet,
    tools: "JavaScript, React, Sass",
  },

  {
    id: 4,
    title: "Rick and Morty",
    description:
      "Página web en la que puedes buscar, filtrar y ver con detalle los personajes de la serie Rick and Morty.",
    urlGit: "https://github.com/yosiris-m/characters-Rick-And-Morty",
    urlPage: "https://yosiris-m.github.io/characters-Rick-And-Morty/#/",
    img: rickMorty,
    tools: "JavaScript, React, Css",
  },
  {
    id: 5,
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
