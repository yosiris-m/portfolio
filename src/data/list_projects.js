import architecture from "../images/architecture_app.png";
import familyCash from "../images/family_app.png";
import series from "../images/buscador_serie.png";
import card from "../images/card.png";
import maquetacion from "../images/maquetacion_web.png";
import planet from "../images/planet_express.png";
import rickMorty from "../images/rick_morty.png";

const projectsList = [
  {
    id: 1,
    title: "FamilyCash Front",
    description:
      "App que permite crear y agregar transaciones de manera que puedas ver los ingresos, los gastos y generar informes (en proceso).",
    urlGit: "https://github.com/yosiris-m/family-cash-app",
    urlPage: "https://family-cash-app.herokuapp.com/",
    img: familyCash,
  },
  {
    id: 2,
    title: "FamilyCash API",
    description:
      "API Rest que se integra con una base de datos Pp implementada para guardar los datos de la aplicación Family-cash-App",
    urlGit: "https://github.com/yosiris-m/family-cash-app",
    urlPage: "https://family-cash-app.herokuapp.com/",
    img: architecture,
  },

  {
    id: 3,
    title: "Card profile",
    description:
      "Proyecto de equipo, refactorización de codigo con el que puedes crear, personalizar y enviar tarjetas de presentación.",
    urlGit: "https://github.com/yosiris-m/project-promo-m-module-3-team5",
    urlPage: "https://vegandebuggers.herokuapp.com/#/card",
    img: card,
  },
  {
    id: 4,
    title: "Rick and Morty",
    description:
      "Buscador de personajes de la serie rick and morty, permite filtrar y ver con detalle cada personaje, realizado con React.",
    urlGit: "https://github.com/yosiris-m/characters-Rick-And-Morty",
    urlPage: "https://yosiris-m.github.io/characters-Rick-And-Morty/#/",
    img: rickMorty,
  },
  {
    id: 5,
    title: "PlaneExpress",
    description:
      "Buscador de articulos de la serie planet express donde puedes añadir articulos a la cesta, ver los detalles y un temporizador para las ofertas, realizado con React.",
    urlGit: "https://github.com/yosiris-m/enthec_planetExpress_app",
    urlPage: "https://yosiris-m.github.io/enthec_planetExpress_app/",
    img: planet,
  },
  {
    id: 6,
    title: "Buscador de series",
    description:
      "Aplicación web que permite buscar series y agregarlas a favoritas.",
    urlGit: "https://github.com/yosiris-m/buscador-de-series-yosiris-m",
    urlPage: "https://yosiris-m.github.io/buscador-de-series-yosiris-m/",
    img: series,
  },
  {
    id: 7,
    title: "Maquetacion web",
    description:
      "Maquetación de pagina web proyecto de equipo 404, realizado con html y css.",
    urlGit: "https://github.com/yosiris-m/Web-Anonymous",
    urlPage: "https://yosiris-m.github.io/Web-Anonymous/",
    img: maquetacion,
  },
];

export default projectsList;
