import styles from "./Main.module.scss";
import ProjectList from "./Projects/ProjectList";
import AboutMe from "./AboutMe";
import Contact from "./Contact/Contact";
import Technology from "./Tecnology/Technology";

import { useState } from "react";
import NavBar from "../Header/NavBar";

function Main({ projectsList }) {
  const [init, setInit] = useState(false);
  const [activeLink, setActiveLink] = useState("");


  const handleLinkClick = (link) => {
    setActiveLink(link);
    setInit(link === "init"); 
  };


  return (
    <main className={styles.main}>
      <NavBar activeLink={activeLink} onLinkClick={handleLinkClick}/>
      <spam id="tools"  className={`${styles.slide} ${styles.tools}`} ></spam>
      <div className={styles.tecnoBox}>
         <h2  className={styles.subtitle}>
        Tecnologías con las que he trabajado
      </h2>
      <Technology /></div>
      <spam id="projects"></spam>
      <h2  className={styles.subtitle}>
        Proyectos personales
      </h2>
      <ProjectList projectList={projectsList} />
      <spam id="aboutMe"></spam>
      <h2  className={styles.subtitle}>
        Acerca de mí
      </h2>
      <AboutMe />

      <h2 id="contact" className={styles.subtitle}>
        Contacto
      </h2>
      <Contact />
    
      <a href="#init">
         <div  className={`${styles.backBtn}`} onClick={()=>setActiveLink(init)} >
          <i className="fas fa-chevron-up"></i>
        </div>
      </a>
    </main>
  );
}

export default Main;
