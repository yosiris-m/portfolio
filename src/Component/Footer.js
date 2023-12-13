import styles from  "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.by}>
      By <i className={`fas fa-heart ${styles.heart}`}></i><i> Yosiris m..</i> 
      </span>
    </div>
  );
}

export default Footer;
