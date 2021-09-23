import styles from "./Header.module.scss";

function Header() {
  return (
    <nav>
      <section className={styles.header}>
        <i className="fas fa-bars menu"></i>
        <section className={styles.BoxMenu}>
          <div>
            <i className="far fa-moon dark"></i>
          </div>
          <select className={styles.select}>
            <option>Es</option>
            <option>In</option>
          </select>
        </section>
      </section>
    </nav>
  );
}

export default Header;
