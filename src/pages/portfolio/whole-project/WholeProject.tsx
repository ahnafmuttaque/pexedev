import { createPortal } from "react-dom";
import styles from "./WholeProject.module.css";
import { type FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import WholeProjectHeader from "./whole-project-header/WholeProjectHeader";
import CancelButton from "./cancel-button/CancelButton";
import projectFigure from "/assets/my-genie-template.png";
import ShortDescription from "./short-description/ShortDescription";
import type { ProjectItem } from "../../../data/projects.data";

interface WholeProjectProps {
  project?: ProjectItem | null;
  selected?: boolean;
  onClose: () => void;
}

const WholeProject: FC<WholeProjectProps> = ({ project, onClose, selected }) => {
  const navigate = useNavigate();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent layout shift from disappearing scrollbar
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [selected, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const handleStartProject = () => {
    onClose();
    navigate("/contact-us");
  };

  const projectTitle = project?.title
    ? project.title.replace(/\.$/, "")
    : "Neurix";

  const portalNode = document.getElementById("whole-project-el");
  if (!portalNode) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className={`${styles["whole-project__overlay"]} ${selected ? styles["up"] : ""}`}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles["whole-project"]}>
        <CancelButton onClose={onClose} />
        <div className="max-inline">
          <WholeProjectHeader />
          <div className={`${styles["whole-project__figure"]}`}>
            <img src={project?.thumbnail || projectFigure} alt={projectTitle} />
          </div>
          <ShortDescription
            title={`${projectTitle} Overview!`}
            description={
              project?.description
                ? `${project.description} This solution blends transparency, innovation, and human connection to reflect the values of modern digital products. It opens with a strong headline and key performance metrics, supported by trust badges to establish credibility. The responsive design ensures a smooth experience across desktop and mobile.`
                : "The Neurix About Us page blends transparency, innovation, and human connection to reflect the values of a modern AI startup. It opens with a strong headline and key performance stats, supported by trust badges from brands like Google, Figma, and Shopify to establish credibility. The responsive design ensures a smooth experience across desktop and mobile."
            }
          />
          <section className={styles["whole-project__gallery"]}>
            <img
              src={project?.thumbnail || projectFigure}
              alt="project gallery 1"
            />
            <img src={projectFigure} alt="project gallery 2" />
            <img
              src={project?.thumbnail || projectFigure}
              alt="project gallery 3"
            />
            <img src={projectFigure} alt="project gallery 4" />
          </section>
          <ShortDescription
            title={`${projectTitle} Problem!`}
            description={`Many startups struggle to communicate their story, achievements, and credibility in a clear and engaging way. Without a well-structured interface, visitors may find it difficult to understand the product value and the mission behind ${projectTitle}.`}
          />
          <ShortDescription
            marginTop={48}
            marginBottom={80}
            title={`${projectTitle} Solution!`}
            description={`The ${projectTitle} design addresses this challenge by combining storytelling with modern UI/UX design to present the product vision, achievements, and workflows in a clear and compelling way.`}
            solutions={[
              "Strong Brand Introduction – Clear headlines and value proposition to immediately explain product purpose.",
              "Trust & Credibility Signals – Key metrics and user feedback to build immediate visitor confidence.",
              "Intuitive User Flows – Streamlined journeys that convert visitors into active customers.",
              "Mobile-First Architecture – Fluid responsiveness across phones, tablets, and high-res desktops.",
              "Modern UI/UX Design – Clean typography, structured layout, and accessible interaction patterns.",
            ]}
          />
          <section className={styles["thanks"]}>
            <div className={styles["thanks__left"]}>
              <h3 className="heading heading--xl">
                Thanks for watching our full design details.
              </h3>
              <p className="text--md text--secondary">
                Our team creates visually compelling images that tell a story,
                enhance your brand &amp; leave a lasting impression on your
                audience. We help brand and individuals bring their vision to
                life&excl;
              </p>
              <div>
                <button
                  className="button button--black"
                  onClick={handleStartProject}
                >
                  Start your Project
                </button>
                <button
                  className="button button--white"
                  onClick={handleStartProject}
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className={styles["thanks__right"]}>
              <img src="/assets/thanks.png" alt="thanks image" />
            </div>
          </section>
        </div>
      </div>
    </div>,
    portalNode,
  );
};

export default WholeProject;
