import SubtitleWithIcon from "../../../components/subtitle-with-icon/SubtitleWithIcon";
import styles from "./DiscoverUs.module.css";
import designCard from "/assets/know-us/design-card.png";

const DiscoverUs = () => {
  return (
    <section className={`${styles["discover-us"]} max-inline padding__b-112`}>
      <SubtitleWithIcon>
        Discover who we are, what we do, and how we help
      </SubtitleWithIcon>
      <h1 className={`${styles["discover-us__title"]} heading heading--xxl`}>
        We design and develop digital products that help businesses grow through
        strategy, modern design, and technology.
      </h1>
      <div className={`${styles["discover-us__card"]}`}>
        <img src={designCard} alt="Design card" />
      </div>
    </section>
  );
};

export default DiscoverUs;
