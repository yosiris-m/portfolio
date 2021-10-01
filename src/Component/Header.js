import styles from "./Header.module.scss";
import InputSwitch from "./nav/InputSwitch";
import React, { useState } from "react";

function Header() {
  // const [isToggled, setIsToggled] = useState(false);
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  // const onClickClosed = () => {
  //   setOpen(false);
  // };

  return (
    <section>
      {/* <InputSwitch
        rounded={true}
        isToggled={isToggled}
        onToggled={() => setIsToggled(!isToggled)}
      /> */}
      {/* <nav open={open}>
        <div className={styles.menu1}>
          <div className={styles.menu}>
            <input type="checkbox" id="menu" onClick={handleClick} />
            <label for="menu">
              <i className="fas fa-bars"></i>
            </label>

            <ul className={styles.option} onClick={onClickClosed}>
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
          </div>
        </div>
      </nav> */}
    </section>
  );
}

export default Header;
