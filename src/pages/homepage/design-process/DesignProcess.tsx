import type { FC } from "react";
import styles from "./DesignProcess.module.css";
import CenteredSectionHeader from "../../../components/centered-section-header/CenteredSectionHeader";

const Process = () => {
  return (
    <div className={styles["design-process__step"]}>
      <h3 className={`${styles["design-process__step-title"]} normal-text`}>
        <span>Step 01</span>
        <span className="bullet-point bullet-point--blue"></span>
        <span>Discovery &amp; Strategy</span>
      </h3>
      <p
        className={`${styles["design-process__step-description"]} text--md text--secondary`}
      >
        We start by understanding your business goals, product vision, and
        target audience. This helps us align the project direction with your
        long-term objectives.
      </p>
    </div>
  );
};

interface DirectionProps {
  src: string;
  alt?: string;
}
const Direction: FC<DirectionProps> = ({ src, alt = "process-direction" }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

const DesignProcess = () => {
  return (
    <CenteredSectionHeader
      className={styles["design-process"]}
      title="Our Design "
      special="Process."
      description="A proven process to deliver exceptional digital products."
    >
      <div className={styles["design-process__steps"]}>
        {Array.from({ length: 4 }).map((_, index, arr) => (
          <div key={index} className={styles["design-process__row"]}>
            <Process />
            {index === arr.length - 1 && (
              <Direction src="/assets/direction/last-row.png" />
            )}
            <Process />
          </div>
        ))}
        <section className={styles["design-process__centered-image"]}>
          <div className={styles["design-process__eclipse"]}>
            <img src="/assets/eclipse.png" alt="eclipse" />
          </div>
          <img
            src="/assets/design-process-portrait.png"
            alt="design-process image"
          />
        </section>
      </div>
    </CenteredSectionHeader>
  );
};

export default DesignProcess;
