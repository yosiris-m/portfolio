
import { useTranslation } from "react-i18next";
import styles from "./NavBar.module.scss";
import { ButtonsLanguage } from "../bootons/bootonsLanguage";

function NavBar({activeLink, onLinkClick}) {

  const { t } = useTranslation();

  const navLinks = [
    { id: 'aboutMe', label: t('header.navbar.aboutMe') },
    { id: 'projects', label: t('header.navbar.projects') },
    { id: 'tools', label: t('header.navbar.tools') },
    { id: 'contact', label: t('header.navbar.contact') },
  ];

  const showInitLink = navLinks.slice(0).some(link => link.id === activeLink);
  return (
    <div className={styles.box}>
     <ButtonsLanguage/> 
  
      <div className={styles.linksBox}>
    
      {showInitLink && (
          <a
            href="#init"
            onClick={() => onLinkClick('init')}
            className={`${activeLink === 'init' ? styles.click : ''}`}
          >
            <span>{t('header.navbar.home')}</span>
          </a>
        )}
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => onLinkClick(link.id)}
            className={`${activeLink === link.id ? styles.click : ""}`}
          >
            <span>{link.label}</span>
          </a>
        ))}
 
    </div>
    <div>
    </div>
    
    </div>)
}

export default NavBar;
