
import { useTranslation } from "react-i18next";
import styles from "../main/AboutMe.module.scss";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.BoxDescription}>
          <p> {t('aboutme.description1')} </p>        
          <p>
           <span><p> {t('aboutme.description2')} </p>  </span> 
            <span> {t('aboutme.description3')} </span> <strong>{t('aboutme.description4')}</strong>
          </p>
          <p>
           <span>{t('aboutme.description5')} </span> 
           <span> {t('aboutme.description6')} </span>  
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
