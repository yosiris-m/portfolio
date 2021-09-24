import ProjectItem from "./ProjectItem";
import styles from "../Component/ProjectList.module.scss";

function ProjectList({ projectList }) {
  return (
    <>
      <h5>PROYECTOS</h5>
      <div className={styles.box}>
        {projectList.map((item, index) => (
          <ProjectItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
export default ProjectList;
