import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./bootonLang.module.scss";
import ES from "../../images/españa.png";
import UK from "../../images/UK.png";

export const ButtonsLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguageEs = (newLanguage) => {
    i18n.changeLanguage(newLanguage)
  };


  return (
    <div className={styles.btnbox}>
      <button className={styles.btnE} onClick={() => toggleLanguageEs('es')}>
         <img className={styles.photoSp} src={ES} alt="Bandera de España" />
        </button>
      <button className={styles.btnU} onClick={() => toggleLanguageEs('en')}> 
      <img className={styles.photoUk} src={UK} alt="Bandera de España" /></button>
    </div>
  );
};
