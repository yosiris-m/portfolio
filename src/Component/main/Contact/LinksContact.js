import { useTranslation } from "react-i18next";
import styles from "../Contact/LinksContact.module.scss";
import pdfEnglish from "../Contact/pdf/yosiris_cv.pdf";
import pdfSpanish from "../Contact/pdf/yosirismc_en.pdf";

function LinkContact() {

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const pdf =  currentLanguage === "en" ?   pdfSpanish : pdfEnglish;

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
        download={`yosiris_cv_${currentLanguage}.pdf`}
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
