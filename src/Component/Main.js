import styles from "./Main.module.scss";
import photo from "../images/yosi_photo.jpg";
import Projects from "./Projects";

function Main() {
  return (
    <main>
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
        <h4>Front-end Developer</h4>
        <p>
          Soy una persona que le encanta aprender y descubrir 🚀 cosas nuevas
        </p>
        <p>
          Estoy buscando mi primera oportunidad en el el sector IT como Front
          End Developer.
        </p>

        <Projects />
        <h5>TECNOLOGÍAS</h5>

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
        <p></p>
        <p></p>
      </section>
    </main>
  );
}

export default Main;
