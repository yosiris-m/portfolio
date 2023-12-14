import styles from "./Main.module.scss";
import ProjectList from "./Projects/ProjectList";
import AboutMe from "./AboutMe";
import Contact from "./Contact/Contact";
import Technology from "./Tecnology/Technology";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";

function Main({ projectsList }) {
  const [init, setInit] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { t } = useTranslation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setInit(link === "init");
  };

  return (
    <main className={styles.main}>
     <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <span id="tools" className={`${styles.slide} ${styles.tools}`}></span>
      <div className={styles.tecnoBox}>
        <h2 className={styles.subtitle}>
        {t('sumary.tools')}
        </h2>
        <Technology />
      </div>
      <span id="projects"></span>
      <h2 className={styles.subtitle}>  {t('sumary.personalProjects')}</h2>
      <ProjectList projectList={projectsList} />
      <span id="aboutMe"></span>
      <h2  className={styles.subtitle}>
      {t('sumary.aboutMe')}
      </h2>
      <AboutMe />

      <h2 id="contact" className={styles.subtitle}>
      {t('sumary.contact')}
      </h2>
      <Contact />

      <a href="#init">
        <div
          className={`${styles.backBtn}`}
          onClick={() => setActiveLink(init)}
        >
          <i className="fas fa-chevron-up"></i>
        </div>
      </a>
    </main>
  );
}

export default Main;
