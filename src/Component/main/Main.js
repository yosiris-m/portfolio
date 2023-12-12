import styles from "./Main.module.scss";
import ProjectList from "./Projects/ProjectList";
import AboutMe from "./AboutMe";
import Contact from "./Contact/Contact";
import Technology from "./Tecnology/Technology";
import NavBar from "../Header/NavBar";

function Main({ projectsList }) {
  return (
    <main className={styles.main}>
      <NavBar />
      <h2 id="tools" className={styles.subtitle}>
        Tecnologías con las que he trabajado
      </h2>
      <Technology />
      <h2 id="projects" className={styles.subtitle}>
        Proyectos personales
      </h2>
      <ProjectList projectList={projectsList} />

      <h2 id="aboutMe" className={styles.subtitle}>
        Acerca de mí
      </h2>
      <AboutMe />

      <h2 id="contacto" className={styles.subtitle}>
        Contacto
      </h2>
      <Contact />

      <a href="#inicio">
        <div className={styles.backBtn}>
          <i className="fas fa-chevron-up"></i>
        </div>
      </a>
    </main>
  );
}

export default Main;
