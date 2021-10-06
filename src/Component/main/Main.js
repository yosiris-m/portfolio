import styles from "./Main.module.scss";
import ProjectList from "./Projects/ProjectList";
import AboutMe from "./AboutMe";
import Contact from "./Contact/Contact";
import Technology from "./Tecnology/Technology";

function Main({ projectsList }) {
  return (
    <main className={styles.main}>
      <h2 id="projects" className={styles.subtitle}>
        Proyectos
      </h2>
      <ProjectList projectList={projectsList} />

      <h2 id="tools" className={styles.subtitle}>
        Herramientas
      </h2>
      <Technology />

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
          <i class="fas fa-chevron-up"></i>
        </div>
      </a>
    </main>
  );
}

export default Main;
