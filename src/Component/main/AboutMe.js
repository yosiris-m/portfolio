
import styles from "../main/AboutMe.module.scss";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.BoxDescription}>
          <p>
            Soy de alma libre, amante de los colores y defensora de la
            diversidad. Me gustan los retos y los grandes cambios.
          </p>
          <p>
           <span>Licenciada en Bioanálisis, tras varios años en el área de la sanidad
            decidí reinventarme al sector IT. Empecé con un Bootcamp intensivo dónde aprendí mis primeros pasos en programación.  </span> 
            <span>Actualmente sigo formándome en un : </span> <i>Grado superior en Desarrollo de Aplicaciones Web.</i>
          </p>
          <p>
           <span>En mi corta experiencia laboral en el sector he tenido la oportunidad de trabajar en HeyTrade(Startup sector inversiones)
             y en SopraHR(Consultora de servicios HR) de la mano de grandes compañeros creando, refactorizando y actualizando código.  </span> 
           <span>  Actualmente estoy buscando una oportunidad laboral en la que pueda construibuir y seguir creciendo en este mundillo.
           </span> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
