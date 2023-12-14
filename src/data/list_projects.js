/* eslint-disable react-hooks/rules-of-hooks */
import infinityCash from "../images/infinity_cash.png";
import ShareExpense from "../images/ShareExpense.png";
import series from "../images/buscador_serie.png";
import TravelBlog from "../images/travelBlog.png";
import WillyWonka from "../images/willy_wonka.png";
import planet from "../images/planet_express.png";
import rickMorty from "../images/rick_morty.png";
import LikesNotLikes from "../images/likes.png";
import { useTranslation } from "react-i18next";



const projectsListData = [
  {
    id: 1,
    title: "InfinityCash",
    urlGit: "https://github.com/yosiris-m/infinity-cash-app",
    urlPage: "https://yosiris-m.github.io/infinity-cash-app/",
    img: infinityCash,
    tools: "JavaScript, React, Bootstrap, Sass",
  },
  {
    id: 2,
    title: "WillyWonka",
    description: "", 
    urlGit: "https://github.com/yosiris-m/WillyWonka_factory",
    urlPage: "https://github.com/yosiris-m/WillyWonka_factory",
    img: WillyWonka,
    tools: "JavaScript, React,NodeJs, CSS",
  },
  {
    id: 3,
    title: "SharedExpenses",
    description: "", 
    urlGit: "https://github.com/yosiris-m/SharedExpenses",
    urlPage: "https://yosiris-m.github.io/SharedExpenses/#/",
    img: ShareExpense,
    tools: "TypeScript, React, Jest, NodeJs, Sass",
  },
  {
    id: 4,
    title: "TravelBlog",
    description: "",
    urlGit: "https://github.com/yosiris-m/travel_blog",
    urlPage: "https://github.com/yosiris-m/travel_blog",
    img: TravelBlog,
    tools: "TypeScript, React, Jest, NodeJs, CSS, Docker",
  },

  {
    id: 5,
    title: "LikesNotLikes",
    description: "",
    urlGit: "https://github.com/yosiris-m/likesNotLikes",
    urlPage:  "https://github.com/yosiris-m/likesNotLikes",
    img: LikesNotLikes,
    tools: "JavaScript, React, Sass, Jest",
  }, 
  {
    id: 6,
    title: "PlanetExpress",
    description:"",
    urlGit: "https://github.com/yosiris-m/planetExpress_app",
    urlPage: "https://github.com/yosiris-m/planetExpress_app",
    img: planet,
    tools: "JavaScript, React, Sass",
  },

  {
    id: 7,
    title: "RickandMorty",
    description: "",
    urlGit: "https://github.com/yosiris-m/characters-Rick-And-Morty",
    urlPage: "https://yosiris-m.github.io/characters-Rick-And-Morty/#/",
    img: rickMorty,
    tools: "JavaScript, React, Css",
  },
  {
    id: 8,
    title: "SeriesSearch",
    description: "",
    urlGit: "https://github.com/yosiris-m/buscador-de-series-yosiris-m",
    urlPage: "https://yosiris-m.github.io/buscador-de-series-yosiris-m/",
    img: series,
    tools: "JavaScript, Css",
  },

];

const projectListData = () => {
  const { t } = useTranslation();

  const projectsList = projectsListData.map(project => ({
    ...project,
    description: t(`sumary.${project.title.toLowerCase()}.description`),
  }));

  return projectsList;
};

export default projectListData;
