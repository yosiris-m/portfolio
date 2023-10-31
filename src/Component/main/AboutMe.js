import photo from "../../images/foto1.jpg";
import styles from "../main/AboutMe.module.scss";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img src={photo} className={styles.photo} alt="Foto de yosiris" />
        <div className={styles.BoxDescription}>
          <p>
            Soy de alma libre, amante de los colores y defensora de la
            diversidad. Me gustan los retos y los grandes cambios.
          </p>
          <p>
           <span>Licenciada en Bioanálisis, tras varios años en el área salud
            decidí reinventarme al sector IT. Empecé con un Bootcamp intensivo dónde aprendí mis primeros pasos en programación.  </span> 
            <span>Actualmente sigo formándome en un : </span> <i>Grado superior en Desarrollo de Aplicaciones Web.</i>
          </p>
          <p>
           <span>Tengo 1 año y 6 meses de experiencia laboral como desarrolladora web, durante este tiempo he tenido la oportunidad de trabajar en HeyTrade(Startup sector inversiones)
             y en SopraHR(Consultora de servicios HR).  </span> 
           <span>  Actualmente estoy buscando una oportunidad laboral que me permita seguir desarrollándome como programadora.
           </span> 

          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
