import DiscoverUs from "./discover-us/DiscoverUs";
import ExploreInnovation from "./explore-innovation/ExploreInnovation";
import styles from "./KnowUs.module.css";
import OurVision from "./our-vision/OurVision";

const KnowUs = () => {
  return (
    <div className={`${styles["know-us"]}`}>
      <DiscoverUs />
      <ExploreInnovation />
      <OurVision />
    </div>
  );
};

export default KnowUs;
