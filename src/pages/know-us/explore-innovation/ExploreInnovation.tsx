import BackgroundWrapper from "../../../components/background-wrapper/BackgroundWrapper";
import styles from "./ExploreInnovation.module.css";
import exploreInnovationBg from "/assets/background/bg-explore-innovation.jpg";

const SHAPES = [
  "/assets/know-us/shape (1).png",
  "/assets/know-us/shape (2).png",
  "/assets/know-us/shape (3).png",
  "/assets/know-us/shape (4).png",
  "/assets/know-us/shape (5).png",
];

const ExploreInnovation = () => {
  return (
    <BackgroundWrapper
      url={exploreInnovationBg}
      opacity={12}
      backgroundColor="black"
    >
      <section
        className={`${styles["explore-innovation__section"]} padding__v-112`}
      >
        <div className={`${styles["explore-innovation__shapes"]}`}>
          {SHAPES.map((shape, index) => (
            <img
              key={index}
              src={shape}
              alt={`Shape ${index + 1}`}
              className={`${styles["explore-innovation__shape"]}`}
            />
          ))}
        </div>
        <h1
          className={`${styles["explore-innovation__title"]} heading heading--xl heading--white`}
        >
          PixeDev Excellence Through{" "}
          <span className="heading--blueItalic">Innovation.</span>
        </h1>
        <p
          className={`${styles["explore-innovation__paragraph"]} text--md text--secondary`}
        >
          At Musemind, our journey is fired by passion—our core spark. The
          secret to our innovation and success? It's the fusion of relentless
          dedication, a heart that beats for design, and a drive to innovate!
          With years of experience in the field, we have honed our skills to
          become At our agency
        </p>
        <button
          className={`${styles["explore-innovation__button"]} button button--white`}
        >
          Explore our Projects
        </button>
      </section>
    </BackgroundWrapper>
  );
};

export default ExploreInnovation;
