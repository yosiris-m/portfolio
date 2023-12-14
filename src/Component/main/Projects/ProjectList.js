
import projectListData from "../../../data/list_projects";
import ProjectItem from "../Projects/ProjectItem";
import styles from "../Projects/ProjectList.module.scss";

function ProjectList() {
    const projectsList = projectListData();
  return (
    <div className={styles.box}>
      { projectsList.map((item, index) => (
        <ProjectItem item={item} key={index} />
      ))}
    </div>
  );
}
export default ProjectList;
