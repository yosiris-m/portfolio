import styles from "./Main.module.scss";
import photo from "../images/yosi_photo.jpg";
import ProjectList from "./ProjectList";
import Technology from "./Technology";

function Main({ projectsList }) {
  return (
    <main className={styles.main}>
      <section className={styles.mainBox}>
        <h4 className={styles.title}>Hola mundo!</h4>
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

        <ProjectList projectList={projectsList} />
        <Technology />

        {/* <p>
          y
          enfrentarme a grandes retos. Apasionada de la naturaleza y la
          programación.
        </p> */}
        {/* <p>
          Tras años de pertenecer al mundo de las ciencias de la salud he
          decidido dar un cambio, reinventarme y hacer lo que me gusta "
          programar".
        </p> */}
      </section>
    </main>
  );
}

export default Main;
