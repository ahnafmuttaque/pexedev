import { createPortal } from "react-dom";
import styles from "./WholeProject.module.css";
import type { FC } from "react";
import WhoeleProjectHeader from "./whole-project-header/WholeProjectHeader";
import CancelButton from "./cancel-button/CancelButton";
import projectFigure from "/assets/my-genie-template.png";
import ShortDescription from "./short-description/ShortDescription";

interface WholePorjectProps {
  selected?: boolean;
  onClose: () => void;
}

const WholeProject: FC<WholePorjectProps> = ({ onClose, selected }) => {
  return createPortal(
    <div
      className={`${styles["whole-project__overlay"]} ${selected ? styles["up"] : ""}`}
    >
      <div className={styles["whole-project"]}>
        <CancelButton onClose={onClose} />
        <div className="max-inline">
          <WhoeleProjectHeader />
          <div className={`${styles["whole-project__figure"]}`}>
            <img src={projectFigure} alt="project" />
          </div>
          <ShortDescription
            title="Neurix Problem!"
            description="The Neurix About Us page blends transparency, innovation, and human connection to reflect the values of a modern AI startup. It opens with a strong headline and key performance stats, supported by trust badges from brands like Google, Figma, and Shopify to establish credibility. The responsive design ensures a smooth experience across desktop and mobile.
            The layout combines storytelling with conversion-focused elements, highlighting the company’s mission, achievements, and team. Testimonials, clean typography, and modern UI styling help build trust while presenting Neurix as a reliable and forward-thinking brand."
          />
          <section className={styles["whole-project__gallery"]}>
            <img src={projectFigure} alt="project gallery" />
            <img src={projectFigure} alt="project gallery" />
            <img src={projectFigure} alt="project gallery" />
            <img src={projectFigure} alt="project gallery" />
          </section>
          <ShortDescription
            title="Neurix Problem!"
            description="Many startups struggle to communicate their story, achievements, and credibility in a clear and engaging way. Without a well-structured About Us page, visitors may find it difficult to understand the company’s mission, values, and the people behind the product, which can reduce trust and engagement."
          />
          <ShortDescription
            marginTop={48}
            marginBottom={80}
            title="Neurix Solution!"
            description="The Neurix About Us page addresses this challenge by combining storytelling with modern UI/UX design to present the company’s vision, achievements, and team in a clear and compelling way."
            solutions={[
              "Strong Brand Introduction – A clear headline and mission statement to quickly explain the company’s purpose.",
              "Trust & Credibility Signals – Stats, achievements, and brand partnerships to build confidence.",
              "Storytelling Sections – Narratives that explain the company’s journey and core values.",
              "Team Showcase – Introducing the people behind the product to create human connection.",
              "Modern UI/UX Design – Clean typography, structured layout, and responsive design for a smooth user experience.",
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
                <button className="button button--black">
                  Start your Project
                </button>
                <button className="button button--white">Contact Us</button>
              </div>
            </div>
            <div className={styles["thanks__right"]}>
              <img src="/assets/thanks.png" alt="thanks image" />
            </div>
          </section>
        </div>
      </div>
    </div>,
    document.getElementById("whole-project-el")!,
  );
};

export default WholeProject;
