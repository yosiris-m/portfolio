import ProjectItem from "../Projects/ProjectItem";
import styles from "../Projects/ProjectList.module.scss";

function ProjectList({ projectList }) {
  return (
    <div className={styles.box}>
      {projectList.map((item, index) => (
        <ProjectItem item={item} key={index} />
      ))}
    </div>
  );
}
export default ProjectList;
