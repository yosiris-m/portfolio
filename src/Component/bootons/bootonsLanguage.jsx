import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./bootonLang.module.scss";

export const ButtonsLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguageEs = (newLanguage) => {
    i18n.changeLanguage(newLanguage)
  };


  return (
    <div className={styles.btnbox}>
      <button className={styles.btnE} onClick={() => toggleLanguageEs('es')}>
        <span>Es </span>
        </button>
      <button className={styles.btnS} onClick={() => toggleLanguageEs('en')}>In</button>
    </div>
  );
};
