import SubtitleWithIcon from "../../components/subtitle-with-icon/SubtitleWithIcon";
import Projects from "../homepage/projects/Projects";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolio__wrapper}>
      <div className={`${styles.portfolio} max-inline`}>
        <div className={styles["portfolio__content"]}>
          <SubtitleWithIcon>
            Digital Product &amp; Case Studies
          </SubtitleWithIcon>
          <h1 className="text--center heading heading--xl heading--white">
            Our Digital <span className="heading--blueItalic">Experience</span>{" "}
            &amp; Implementation.
          </h1>
        </div>
        <Projects withoutHeader />
      </div>
    </div>
  );
};

export default Portfolio;
