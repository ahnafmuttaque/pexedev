import DiscoverUs from "./discover-us/DiscoverUs";
import ExploreInnovation from "./explore-innovation/ExploreInnovation";
import styles from "./KnowUs.module.css";

const KnowUs = () => {
  return (
    <div className={`${styles["know-us"]}`}>
      <DiscoverUs />
      <ExploreInnovation />
    </div>
  );
};

export default KnowUs;
