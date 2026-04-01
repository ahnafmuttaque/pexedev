import type { FC, ReactNode } from "react";
import styles from "./BackgroundWrapper.module.css";

type BackgroundWrapperProps = {
  url: string;
  opacity: number;
  scale?: number;
  backgroundColor?: string;
  className?: string;
  zIndex?: number;
  children: ReactNode;
  borderRadius?: string;
};

const BackgroundWrapper: FC<BackgroundWrapperProps> = ({
  url,
  opacity,
  scale = 1,
  backgroundColor = "transparent",
  zIndex = -1,
  className = "",
  children,
  borderRadius = "0",
}) => {
  if (opacity < 0 || opacity > 100) {
    throw new Error("Opacity must be between 0 and 100");
  }
  return (
    <div className={`${styles["background-wrapper"]} ${className}`}>
      {children}
      <div
        className={styles["backgrond-wrapper__image-container"]}
        style={{
          backgroundImage: `url(${url})`,
          opacity: opacity / 100,
          scale,
          zIndex,
          borderRadius,
        }}
      ></div>
      {backgroundColor !== "transparent" && (
        <div
          style={{
            backgroundColor,
            position: "absolute",
            inset: "0",
            borderRadius,
            zIndex: -2,
          }}
        ></div>
      )}
    </div>
  );
};

export default BackgroundWrapper;
