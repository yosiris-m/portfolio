import architecture from "../images/architecture_app.png";
import familyCash from "../images/family_app.png";
import series from "../images/Buscador_series.png";
import card from "../images/card.png";
import maquetacion from "../images/maquetacion_web.png";
import planet from "../images/planet_express.png";
import rickMorty from "../images/rick_morty.png";
import styles from "./Projects.module.scss";

function Projects() {
  return (
    <section>
      <h5>PROYECTOS</h5>
      <div className={styles.boxImages}>
        <di className={styles.imgArchiteture}>
          <h4 className={styles.title}>Arquitectura de software</h4>
          <img src={architecture} alt="architecture" className={styles.img} />
          <p className={styles.subTitle}>
            Base de datos implementada para guardar los datos de la aplicación.
          </p>
        </di>
        <div className={styles.imgArchiteture}>
          <img src={familyCash} alt="family_cas" className={styles.img} />
        </div>
        <div className={styles.imgArchiteture}>
          <img src={series} alt="series" className={styles.img} />
        </div>
        <div className={styles.imgArchiteture}>
          <img src={card} alt="card" className={styles.img} />
        </div>
        <div className={styles.imgArchiteture}>
          <img src={maquetacion} alt="page web" className={styles.img} />
        </div>
        <div className={styles.imgArchiteture}>
          <img src={planet} alt="planet" className={styles.img} />
        </div>
        <div className={styles.imgArchiteture}>
          <img src={rickMorty} alt="character" className={styles.img} />
        </div>
      </div>
    </section>
  );
}
export default Projects;
