import { useState } from "react";
import styles from "./NavBar.module.scss";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const panelClasses = open ? styles.panel : `${styles.panel} ${styles.closed}`;

  return (
    <>
      {!open && (
        <div className={styles.menu} onClick={toggleOpen}>
          <i className="fas fa-bars"></i>
        </div>
      )}
      <div className={panelClasses}>
        <div onClick={toggleOpen} className={styles.closeBtn}>
          <i className="fas fa-times closed"></i>
        </div>

        <ul className={styles.linksBox} onClick={toggleOpen}>
          <a href="#projects">
            <li className={styles.list}>
              <i className="far fa-file-alt"></i>Proyectos
            </li>
          </a>

          <a href="#tools">
            <li>
              <i className="fas fa-cog"></i>Herramientas
            </li>
          </a>

          <a href="#aboutMe">
            <li>
              <i className="far fa-user"></i> Acerca de mi
            </li>
          </a>
          <a href="#contacto">
            <li>
              <i className="far fa-address-card"></i> Contacto
            </li>
          </a>
          <div className={styles.flower}>
            <i className="fab fa-pagelines"></i>
          </div>
        </ul>
      </div>
      {open && <div className={styles.shield} onClick={toggleOpen}></div>}
    </>
  );
}

export default NavBar;
