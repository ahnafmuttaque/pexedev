import { useState } from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
  const [activeItem, setActiveItem] = useState<string>("All");
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  return (
    <div className={styles["projects__wrapper"]}>
      <section className={`${styles.projects} max-inline`}>
        <div className={styles["projects__header"]}>
          <h2 className={`${styles["projects__title"]} heading heading--xl`}>
            Combining Design, and Innovation to Build{" "}
            <span className="heading--blueItalic">Impactful Products.</span>
          </h2>
          <ul className={styles["projects__menu"]}>
            {["All", "Website Design", "Mobile app", "SaaS Platform"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`${styles["projects__menu-item"]} ${activeItem === item ? styles["projects__menu-item--active"] : ""}`}
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Projects;
