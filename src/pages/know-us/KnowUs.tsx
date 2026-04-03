import FaqSection from "../../components/faqSection/FaqSection";
import LetsBuildSomething from "../../components/letsBuildSomething/LetsBuildSomething";
import DiscoverUs from "./discover-us/DiscoverUs";
import ExploreInnovation from "./explore-innovation/ExploreInnovation";
import styles from "./KnowUs.module.css";
import OurTalent from "./our-talent/OurTalent";
import OurVision from "./our-vision/OurVision";

const KnowUs = () => {
  return (
    <div className={`${styles["know-us"]}`}>
      <DiscoverUs />
      <ExploreInnovation />
      <OurVision />
      <OurTalent />
      <FaqSection />
      <LetsBuildSomething />
    </div>
  );
};

export default KnowUs;
