import styles from "../Component/Technology.module.scss";
function Technology() {
  return (
    <div>
      <h5 id="tools">TECNOLOGÍAS</h5>
      <div className={styles.box} align="left">
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
            className={styles.BoxSiZe}
            rel="noreferrer"
          />
        </a>
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            className={styles.BoxSiZe}
            rel="noreferrer"
          />
        </a>
        <a href="https://expressjs.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
            className={styles.BoxSiZe}
            rel="noreferrer"
          />
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            className={styles.BoxSiZe}
          />
        </a>
        <a href="https://gulpjs.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg"
            alt="gulp"
            className={styles.BoxSiZe}
          />
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            className={styles.BoxSiZe}
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            className={styles.BoxSiZe}
          />
        </a>

        <a
          href="https://www.microsoft.com/en-us/sql-server"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
            alt="mssql"
            className={styles.BoxSiZe}
          />
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            className={styles.BoxSiZe}
          />
        </a>
        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="postgresql"
            className={styles.BoxSiZe}
          />
        </a>
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            className={styles.BoxSiZe}
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            className={styles.BoxSiZe}
          />
        </a>
        {/* <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
            className={styles.BoxSiZe}
          />
        </a> */}
      </div>
    </div>
  );
}

export default Technology;
