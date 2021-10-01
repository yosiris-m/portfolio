import styles from "../Component/Technology.module.scss";
import tools from "../data/tools";

function Technology() {
  return (
    <div className={styles.box} align="left">
      {tools.map((tool, idx) => (
        <div key={idx} className={styles.item}>
          <a href={tool.link} target="_blank" rel="noreferrer">
            <img src={tool.img} alt={tool.name} className={styles.image} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Technology;
