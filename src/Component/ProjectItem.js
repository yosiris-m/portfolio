import styles from "./ProjectItem.module.scss";

function ProjectItem({ item }) {
  return (
    // <div className={styles.box}>
    <section>
      <div className={styles.boxImages}>
        <div className={styles.container}>
          <h4 className={styles.title}>{item.title}</h4>
          <img src={item.img} alt="architecture" className={styles.img} />
          <p className={styles.subTitle}>{item.description}</p>
          <div className={styles.codeBox}>
            <a href={item.urlGit} alt="link" className={styles.codeGit}>
              <i className="fa fa-github" href={item.urlGit}></i>
            </a>
            <a href={item.urlPage} alt="link" className={styles.codePage}>
              <i className="fa fa-tv"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
}
export default ProjectItem;
