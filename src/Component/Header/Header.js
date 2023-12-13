import styles from "./Header.module.scss";
import photo from "../../images/yosi_photo.jpg";
import LinkContact from "../main/Contact/LinksContact";

function Header() {
  return (
    <>    
      <section className={styles.headerBox} id="init">
      
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
          <LinkContact /> 
        </div> 
      </section>
    </>
  );
}

export default Header;
