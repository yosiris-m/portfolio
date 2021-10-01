import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <span>
        Made with <i className="fas fa-heart"></i> by Yosiris Mariñez
      </span>
      <span></span>
    </div>
  );
}

export default Footer;
