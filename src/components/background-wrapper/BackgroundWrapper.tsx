import type { FC, ReactNode } from "react";
import styles from "./BackgroundWrapper.module.css";

type BackgroundWrapperProps = {
  url: string;
  opacity: number;
  scale?: number;
  backgroundColor?: string;
  zIndex?: number;
  children: ReactNode;
};

const BackgroundWrapper: FC<BackgroundWrapperProps> = ({
  url,
  opacity,
  scale = 1,
  backgroundColor = "transparent",
  zIndex = -1,
  children,
}) => {
  if (opacity < 0 || opacity > 100) {
    throw new Error("Opacity must be between 0 and 100");
  }
  return (
    <div className={styles["background-wrapper"]}>
      {children}
      <div
        className={styles["backgrond-wrapper__image-container"]}
        style={{
          backgroundColor,
          backgroundImage: `url(${url})`,
          opacity: opacity / 100,
          scale,
          zIndex,
        }}
      ></div>
    </div>
  );
};

export default BackgroundWrapper;
