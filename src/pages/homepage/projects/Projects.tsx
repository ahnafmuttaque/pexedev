import { useState } from "react";
import styles from "./Projects.module.css";
import { PROJECTS, type ProjectItem } from "../../../data/projects.data";
import Project from "./project/Project";

const CATEGORIES = [
  "All",
  "Website Design",
  "Mobile app",
  "SaaS Platform",
] as const;

type Category = (typeof CATEGORIES)[number];

export const Projects = () => {
  const [activeItem, setActiveItem] = useState<Category>("All");

  const filteredProjects: ProjectItem[] =
    activeItem === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeItem);

  return (
    <div className={styles["projects__wrapper"]}>
      <section className={`${styles.projects} max-inline`}>
        {/* projects header */}

        <div className={styles["projects__header"]}>
          <h2 className={`${styles["projects__title"]} heading heading--xxl`}>
            Combining Design, and Innovation to Build{" "}
            <span className="heading--blueItalic">Impactful Products.</span>
          </h2>
          <ul className={styles["projects__menu"]}>
            {CATEGORIES.map((item) => (
              <li
                key={item}
                onClick={() => setActiveItem(item)}
                className={`${styles["projects__menu-item"]} ${activeItem === item ? styles["projects__menu-item--active"] : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* projects content */}
        <div className={"projects__gallery"}>
          {filteredProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

