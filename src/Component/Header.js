import styles from "./Header.module.scss";
import InputSwitch from "./InputSwitch";
import React, { useState } from "react";

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <nav className="box">
      {/* <InputSwitch /> */}
      <InputSwitch
        rounded={true}
        isToggled={isToggled}
        onToggled={() => setIsToggled(!isToggled)}
      />
      <div className={styles.navBox}>
        {/* <section className={styles.header}> */}
        <div className={styles.menu1}>
          <di className={styles.menu}>
            <input type="checkbox" id="menu" />
            <label for="menu">
              <i className="fas fa-bars"></i>
            </label>

            <ul className={styles.option}>
              <a href="#projects">
                <li>Proyectos</li>
              </a>
              <a href="#tools/">
                <li>Herramientas</li>
              </a>
              <a href="#aboutMe">
                <li>Acerca de mi</li>
              </a>
            </ul>
          </di>
        </div>
      </div>
      {/* </section> */}
    </nav>
  );
}

export default Header;
