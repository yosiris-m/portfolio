import styles from  "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.by}>
        Made with <i className={`fas fa-heart ${styles.heart}`}></i> by Yosiris Mariñez
      </span>
    </div>
  );
}

export default Footer;
