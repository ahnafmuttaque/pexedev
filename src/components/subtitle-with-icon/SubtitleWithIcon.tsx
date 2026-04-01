import solarStarIcon from "/assets/solar-star.png";
import styles from "./SubtitleWithIcon.module.css";
import type { FC } from "react";

interface SubtitleWithIconProps {
  text: string;
}

const SubtitleWithIcon: FC<SubtitleWithIconProps> = ({ text }) => {
  return (
    <div className={styles["subtitle-box"]}>
      <div className={styles["subtitle-icon-wrapper"]}>
        <img src={solarStarIcon} alt={"solar star icon"} />
      </div>
      <p className={`text--secondary text--xs text--semibold`}>{text}</p>
    </div>
  );
};

export default SubtitleWithIcon;
