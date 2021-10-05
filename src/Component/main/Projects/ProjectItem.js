import styles from "./ProjectItem.module.scss";

function ProjectItem({ item }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{item.title}</h4>
      <img src={item.img} alt="architecture" className={styles.img} />
      <p className={styles.subTitle}>{item.description}</p>
      <p className={styles.tools}>{item.tools}</p>{" "}
      <div className={styles.codeBox}>
        <a
          href={item.urlGit}
          alt="git"
          className={styles.codeGit}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github" href={item.urlGit}></i>
        </a>
        <a
          href={item.urlPage}
          alt="webpage"
          className={styles.codePage}
          target="_blank"
          rel="noreferrer"
        >
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}
export default ProjectItem;
