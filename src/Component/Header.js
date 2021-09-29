import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <nav>
      <section className={styles.header}>
        <div className={styles.menu}>
          <nav className={styles.boxMenu}>
            <input type="checkbox" id="menu" />
            <label for="menu">
              <i className="fas fa-bars"></i>
            </label>
            <ul className={styles.option}>
              <a href="#projects">
                <li>Proyectos</li>
              </a>
              <a href="#tools">
                <li>Herramientas</li>
              </a>
              <a href="#aboutMe">
                <li>Acerca de mi</li>
              </a>
            </ul>
          </nav>
        </div>
        <section className={styles.BoxMenu}>
          <div>
            <i className="far fa-moon dark"></i>
          </div>
          {/* <select className={styles.select}>
            <option>Es</option>
            <option>In</option>
          </select> */}
        </section>
      </section>
    </nav>
  );
}

export default Header;
