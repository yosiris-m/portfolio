import styles from "./Main.module.scss";
import photo from "../images/yosi_photo.jpg";
import ProjectList from "./ProjectList";
import Technology from "./Technology";
import AboutMe from "./AboutMe";
import InputSwitch from "./nav/InputSwitch";
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
        <h1 className={styles.title}>Hola mundo!</h1>
        <div>
          <img className={styles.photo} src={photo} alt="Yosiris face" />
        </div>
        <p>
          <i className="fas fa-code"></i>
          <span className={styles.name}>Yosiris Mariñez</span>
          <i className="fas fa-code"></i>
        </p>
      </section>
      <section className={styles.descriptionBox}>
        <span className={styles.job}>Front-end Developer</span>
        <p className={styles.description}>
          Soy una persona que le encanta aprender y descubrir 🚀 cosas nuevas.
        </p>
        <p className={styles.description}>
          Estoy buscando mi primera oportunidad en el el sector IT como Front
          End Developer.
        </p>

        <h2 id="projects" className={styles.subtitle}>
          Proyectos
        </h2>
        <ProjectList projectList={projectsList} />

        <h2 id="tools" className={styles.subtitle}>
          Tecnologías
        </h2>
        <Technology />

        <h2 id="aboutMe" className={styles.subtitle}>
          Acerca de mí
        </h2>
        <AboutMe />
      </section>
    </main>
  );
}

export default Main;
