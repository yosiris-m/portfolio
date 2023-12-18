import styles from "./Header.module.scss";
import photo from "../../images/yosi_photo.jpg";
import LinkContact from "../main/Contact/LinksContact";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";

function Header({activeLink, handleLinkClick}) {
  const { t } = useTranslation();
  return (
    <>   
    <NavBar activeLink={activeLink} onLinkClick={handleLinkClick}/>
      <section className={styles.headerBox} id="init">
        <div className={styles.hero}>
          <div className={styles.titlename}>
            <div className={styles.descript}> 
              <h1 className={styles.title}>{t('header.title')}</h1>
              <img className={styles.photo} src={photo} alt="Yosiris face" />
              <p className={styles.name}><i>{t('header.content')}</i></p>
              <p className={styles.webTitle}>
                <strong>{t('header.profession')}</strong>
              </p>
              <i className={styles.job}>
              {t('header.description')}
              </i>
            </div>
         
          </div>
          <LinkContact /> 
        </div> 
      </section>
    </>
  );
}

export default Header;
