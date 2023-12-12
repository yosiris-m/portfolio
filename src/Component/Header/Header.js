import styles from "./Header.module.scss";
import photo from "../../images/yosi_photo.jpg";
import LinkContact from "../main/Contact/LinksContact";

function Header() {
  return (
    <>
      
      <section className={styles.headerBox} id="inicio">
        <div className={styles.hero}>
          <div className={styles.titlename}>
            <div className={styles.descript}>
              <h1 className={styles.title}>Hola mundo!</h1>
              <p className={styles.name}>Soy... Yosiris Mariñez Cabrera</p>
              <p className={styles.webTitle}>
                <strong>Junior Web Developer</strong>
              </p>
              <span className={styles.job}>
                Actualmente estoy en búsqueda de una nueva oportunidad laboral
                en la que pueda seguir desarrollándome tanto en Back como en
                Front.
              </span>
            </div>
            <img className={styles.photo} src={photo} alt="Yosiris face" />
                   
          </div>

        
          {/*<a href="#projects">
            <div className={styles.btnGoDown}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </a>*/}
          <LinkContact /> 
        </div>
         
           
      </section>
    </>
  );
}

export default Header;
