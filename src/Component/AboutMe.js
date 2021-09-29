import photo from "../images/foto1.jpg";
import styles from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <>
      <div id="aboutMe" className={styles.container}>
        <h4 className={styles.title}>Acerca de mi</h4>
        <img src={photo} className={styles.photo} alt="Foto de yosiris" />
        <p>
          Me encanta sonreir, me adapto facilmente a los cambios y aprender
          cosas nuevas. Amante de las plantas y los animales. Llegue al mundo de
          la programación porque me gusta y me da la oportunidad de estar en
          constante aprendisaje continuo. Busco adentrarme en el sector IT y
          tener mi primera experiencia laboral en la programación.
        </p>
        <p>
          Escribeme<i class="fas fa-envelope"></i>
        </p>
        <p>
          <i class="fas fa-code"></i>Porfolio code<i class="fas fa-code"></i>
        </p>
        <span>
          <i class="fab fa-github"></i>
        </span>
        <span>
          <i class="fab fa-linkedin-in"></i>
        </span>
      </div>
    </>
  );
}

export default AboutMe;
