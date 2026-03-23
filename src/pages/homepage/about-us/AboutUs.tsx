import threeFourth from "/assets/three-fourth.png";
import oneFourth from "/assets/one-fourth.png";
import playIcon from "/assets/play.png";

import styles from "./AboutUs.module.css";
export const AboutUs = () => {
  return (
    <section className={`${styles["about-us"]} max-inline`}>
      {/* About us gallery */}
      <div className={`${styles["about-us__gallery"]} max-inline`}>
        <img src={threeFourth} alt="About us gallery" />
        <img src={oneFourth} alt="About us gallery" />
        <button className={`${styles["about-us__play-button"]}`}>
          <img src={playIcon} alt="Play" />
        </button>
      </div>
      <div className={styles["about-us__content"]}>
        <h2 className={`${styles["about-us__title"]} heading heading--xl`}>
          Helping Businesses Grow Through{" "}
          <span className="heading--blueItalic">Digital</span> Design.
        </h2>
        <p className={`${styles["about-us__description"]} normal-text`}>
          Our agency specializes in crafting modern digital experiences through
          thoughtful design and scalable development. We combine creativity,
          strategy, and technology to deliver products that not only look great
          but also perform exceptionally. Our team works closely with startups,
          founders, and growing companies to transform ideas into successful
          digital products.
        </p>
        <button className="button button--black">Learn More About Us</button>
      </div>
    </section>
  );
};

export default AboutUs;
