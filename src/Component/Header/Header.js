import styles from "./Header.module.scss";
import photo from "../../images/yosi_photo.jpg";
import LinkContact from "../main/Contact/LinksContact";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <NavBar />
      <section className={styles.headerBox} id="inicio">
        <div className={styles.hero}>
          <h1 className={styles.title}>Hola mundo!</h1>
          <div>
            <img className={styles.photo} src={photo} alt="Yosiris face" />
          </div>
            <p className={styles.name}>Soy... Yosiris Mariñez Cabrera</p>
          <div className={styles.description}>
            <div className={styles.job}><span>👨🏻‍💻Programadora    </span><strong>Front-end Developer</strong> actualmente estoy en búsqueda 
            de una nueva oportunidad laboral en la que pueda seguir desarrollándome tanto en Back como en Front. </div>
          </div>
          <LinkContact />
          <a href="#projects">
            <div className={styles.btnGoDown}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
