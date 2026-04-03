import styles from "./OurVision.module.css";
import ourVisionImage from "/assets/know-us/our-vision.png";

const OurVision = () => {
  return (
    <section className={`${styles["our-vision"]} max-inline padding__v-112`}>
      <h1 className={`${styles["our-vision__title"]} heading heading--xxl`}>
        <span className="heading--blueItalic">Our Vision.</span>
        <br /> We unite brand, culture and experience to drive impact inside and
        outside an organization.
      </h1>
      <div className={styles["our-vision__image"]}>
        <img src={ourVisionImage} alt="our vision" />
      </div>
    </section>
  );
};

export default OurVision;
