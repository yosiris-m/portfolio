
import styles from "./NavBar.module.scss";

function NavBar({activeLink, onLinkClick}) {
  const navLinks = [
    { id: 'aboutMe', label: 'Acerca de mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'tools', label: 'Herramientas' },
    { id: 'contact', label: 'Contacto' },
  ];

  const showInitLink = navLinks.slice(1).some(link => link.id === activeLink);
  return (
    <div className={styles.tols}>
      <div className={styles.linksBox}>
      {showInitLink && (
          <a
            href="#init"
            onClick={() => onLinkClick('init')}
            className={`${activeLink === 'init' ? styles.click : ''}`}
          >
            <span>Inicio</span>
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
    </div>)
}

export default NavBar;
