import { useState } from "react";
import styles from "./NavBar.module.scss";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return open ? (
    <>
      <div className={styles.panel}>
        <div onClick={toggleOpen} className={styles.closeBtn}>
          <i class="fas fa-times closed"></i>
        </div>

        <ul className={styles.linksBox} onClick={toggleOpen}>
          <a href="#projects">
            <li className={styles.list}>
              <i className="far fa-file-alt"></i>Proyectos
            </li>
          </a>
          <a href="#tools">
            <li>
              <i className="fas fa-wrench"></i> Herramientas
            </li>
          </a>
          yosiris_cv.pdf
          {/* 
          <i class="fas fa-phone-alt"></i> */}
        </ul>
      </div>
      <div className={styles.shield} onClick={toggleOpen}></div>
    </>
  ) : (
    <div className={styles.menu} onClick={toggleOpen}>
      <i className="fas fa-bars"></i>
    </div>
  );
}

export default NavBar;
