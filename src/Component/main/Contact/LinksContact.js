import styles from "../Contact/LinksContact.module.scss";
import pdf from "../Contact/pdf/yosiris_cv.pdf";

function LinkContact() {
  return (
    <div className={styles.boxContact}>
      <a
        href="https://github.com/yosiris-m"
        target="_blank"
        rel="noreferrer"
        className={styles.nav}
      >
        <span>
          <i className="fab fa-github"></i>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/yosiris/"
        target="_blank"
        rel="noreferrer"
        className={styles.nav}
      >
        <span>
          <i className="fab fa-linkedin-in"></i>
        </span>
      </a>
      <a
        href={pdf}
        target="_blank"
        rel=" noopener noreferrer"
        download="yosiris_cv.pdf"
        className={styles.nav}
      >
        <span className={styles.mailLink}>
          <i className="far fa-file-pdf"></i>
        </span>
      </a>
    </div>
  );
}

export default LinkContact;
