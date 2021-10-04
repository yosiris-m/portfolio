import styles from "./Main.module.scss";
import photo from "../images/yosi_photo.jpg";
import ProjectList from "./ProjectList";
import Technology from "./Technology";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

// import InputSwitch from "./nav/InputSwitch";
// import React, { useState } from "react";

function Main({ projectsList }) {
  // const [isToggled, setIsToggled] = useState(false);
  return (
    <main className={styles.main}>
      {/* <InputSwitch
        rounded={true}
        isToggled={isToggled}
        onToggled={() => setIsToggled(!isToggled)}
      /> */}
      <section className={styles.mainBox}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Hola mundo!</h1>
          <div id="inicio">
            <img className={styles.photo} src={photo} alt="Yosiris face" />
          </div>
          <p className={styles.code}>
            <i className="fas fa-code"></i>
            <span className={styles.name}>Soy Yosiris Mariñez</span>
            <i className="fas fa-code"></i>
          </p>
          <div className={styles.description}>
            <p className={styles.job}>👨🏻‍💻 Front-end Developer</p>
            <p>Me encanta aprender y descubrir 🚀 cosas nuevas.</p>
            <p>
              Estoy <strong>buscando mi primera oportunidad laboral </strong> en
              el el sector IT.
            </p>
            <p>
              Actualmente estoy perfecionándome en <strong>JavaScript</strong> y
              <strong> React</strong>.
            </p>

            <div className={styles.boxContact}>
              <a
                href="https://github.com/yosiris-m"
                target="_blank"
                rel="noreferrer"
                className={styles.nav}
              >
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/yosiris/"
                target="_blank"
                rel="noreferrer"
                className={styles.nav}
              >
                <span>
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
              <a
                href="./yosiris_cv.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.nav}
              >
                <span className={styles.mailLink}>
                  <i className="far fa-file-pdf"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.descriptionBox}>
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
      </section>
      <a href="#inicio">
        <div className={styles.backBtn}>
          <i class="fas fa-chevron-up"></i>
        </div>
      </a>
    </main>
  );
}

export default Main;
