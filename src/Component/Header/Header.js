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
          <div className={styles.code}>
            <i className="fas fa-code"></i>
            <p className={styles.name}>Soy Yosiris Mariñez</p>
            <i className="fas fa-code"></i>
          </div>
          <div className={styles.description}>
            <div className={styles.job}>👨🏻‍💻 Front-end Developer</div>
            <p>
              Estoy <strong>buscando mi primera oportunidad laboral </strong> en
              el sector IT. Actualmente estoy perfeccionándome en{" "}
              <strong>JavaScript</strong> y<strong> React</strong>.
            </p>
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
