import ProjectItem from "./ProjectItem";
import styles from "../Component/ProjectList.module.scss";
import { Link } from "react-router-dom";

function ProjectList({ projectList }) {
  return (
    <>
      <h5 id="projects">PROYECTOS</h5>
      <div className={styles.box}>
        {projectList.map((item, index) => (
          <ProjectItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
export default ProjectList;
