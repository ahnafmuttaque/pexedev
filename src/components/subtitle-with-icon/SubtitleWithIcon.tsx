import solarStarIcon from "/assets/solar-star.png";
import styles from "./SubtitleWithIcon.module.css";
import type { FC, PropsWithChildren } from "react";

const SubtitleWithIcon: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles["subtitle-box"]}>
      <div className={styles["subtitle-icon-wrapper"]}>
        <img src={solarStarIcon} alt={"solar star icon"} />
      </div>
      <p className={`text--xs text--semibold`}>{children}</p>
    </div>
  );
};

export default SubtitleWithIcon;
