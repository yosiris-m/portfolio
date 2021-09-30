import photo from "../images/foto1.jpg";
import styles from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <>
      <div id="aboutMe" className={styles.container}>
        <p className={styles.title}>Acerca de mi</p>
        <img src={photo} className={styles.photo} alt="Foto de yosiris" />
        <p className={styles.description}>
          Me encanta sonreir, me adapto facilmente a los cambios y aprender
          cosas nuevas. Amante de las plantas y los animales. Llegue al mundo de
          la programación porque me gusta y me da la oportunidad de estar en
          constante aprendisaje continuo. Busco adentrarme en el sector IT y
          tener mi primera experiencia laboral en la programación.
        </p>
        <a href="#" target="_blank" rel="noreferrer">
          <i class="fas fa-code"></i>Porfolio code<i class="fas fa-code"></i>
        </a>
        <div className={styles.boxTo}>
          <a
            href="mailto: yosiris0510@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/yosiris-m"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i class="fab fa-github"></i>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/yosiris/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i class="fab fa-linkedin-in"></i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
