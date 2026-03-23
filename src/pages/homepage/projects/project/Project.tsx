import styles from "./Project.module.css";
import { PROJECTS } from "../../../../data/projects.data";
import type { FC } from "react";

type ProjectProps = (typeof PROJECTS)[number];

const Project: FC<ProjectProps> = ({
  thumbnail,
  title,
  description,
  tags,
  time,
}) => {
  return (
    <section className={styles["project"]}>
      {/* view project button */}
      <a href="#" className={styles["project__view-button"]}>
        View Project
      </a>
      <div className={styles["project__thumbnail"]}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={styles["project__content"]}>
        <div className={styles["project__header"]}>
          <h3 className={styles["project__title"]}>{title}</h3>
          <span className={styles["project__time"]}>{time}</span>
        </div>
        <p className={styles["project__description"]}>{description}</p>
        <ul className={styles["project__tags"]}>
          {tags.map((tag) => (
            <li key={tag} className={styles["project__tag"]}>
              | {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
