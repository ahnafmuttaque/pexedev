import { useCallback, useState } from "react";
import SubtitleWithIcon from "../../components/subtitle-with-icon/SubtitleWithIcon";
import { PROJECTS } from "../../data/projects.data";
import Project from "../homepage/projects/project/Project";
import styles from "./Portfolio.module.css";
import WholeProject from "./whole-project/WholeProject";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleSelectedProject = useCallback((id: number) => {
    setSelectedProject(id);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  console.log(selectedProject);

  return (
    <>
      <WholeProject
        onClose={handleCloseProject}
        selected={Boolean(selectedProject)}
      />
      <div className={styles.portfolio__wrapper}>
        <div className={`${styles.portfolio} max-inline`}>
          <div className={styles["portfolio__content"]}>
            <SubtitleWithIcon>
              Digital Product &amp; Case Studies
            </SubtitleWithIcon>
            <h1 className="text--center heading heading--xxl heading--white">
              Our Digital{" "}
              <span className="heading--blueItalic">Experience</span> &amp;
              Implementation.
            </h1>
          </div>
          <section className="projects__gallery">
            {PROJECTS.map((project, index) => (
              <Project
                key={index}
                {...project}
                onProjectSelect={handleSelectedProject}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
