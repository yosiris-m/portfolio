import { useTranslation } from "react-i18next";
import styles from "../Contact/Contact.module.scss";

function Contact() {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <p className={styles.msg}>
    {t('contact.text1')}   
        <strong>{t('contact.text2')} </strong> 😉
      </p>
      <p>
        <a className={styles.btn} href="mailto:yosiris1086@gmail.com">
          <i className="far fa-envelope"></i> {t('contact.text3')}
        </a>
      </p>
    </section>
  );
}

export default Contact;
