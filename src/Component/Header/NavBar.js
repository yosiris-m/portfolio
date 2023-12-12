import { useState } from "react";
import styles from "./NavBar.module.scss";

function NavBar() {
  

  return (
    
    
      <div className={styles.tols}>
        <div className={styles.linksBox}>
          <a href="#projects">
            <span className={styles.list}>
             Proyectos
            </span>
          </a>

          <a href="#tools">
            <span>
              Herramientas
            </span>
          </a>

          <a href="#aboutMe">
            <span>
              Acerca de mí
            </span>
          </a>
          <a href="#contacto" className={styles.mg}>
            <span>
             Contacto
            </span>
          </a>
         
        </div>
      </div>
     
  
  );
}

export default NavBar;
