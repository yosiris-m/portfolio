import photo from "../../images/foto1.jpg";
import styles from "../main/AboutMe.module.scss";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img src={photo} className={styles.photo} alt="Foto de yosiris" />
        <di className={styles.BoxDescription}>
          <p>
            Soy una alma libre amante de los colores y defensora de la
            diversidad, me gustan los retos y los grandes cambios.
          </p>
          <p>
            Soy Licenciada en Bioanálisis, tras varios años en el sector salud
            decidí reinventarme en el sector IT. Para ello, me inscribí a un
            Bootcamp intensivo dónde he aprendido a programar. Actualmente sigo
            formándome en otro Bootcamp: <i>Desarrollo Web Full Stack</i> con
            especialidad en
            <strong> JavaScript</strong>, <strong> TypeScript</strong>,
            <strong> Angular</strong> y <strong> Node Js</strong>.
          </p>

          <p>
            De las cosas que más me llama a la atención en la programación es el
            aprendizaje continuo, trabajar en equipo, compartir conocimientos y
            pertenecer a un sector tan colaborativo.
          </p>
        </di>
      </div>
    </div>
  );
}

export default AboutMe;
