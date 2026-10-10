import { useNavigate } from "react-router";
import styles from "./CapabilityItem.module.css";
import { CAPABILITIES } from "../../../../data/homepage.data";
import type { FC } from "react";

type CapabilityItemProps = (typeof CAPABILITIES.items)[number];

const CapabilityItem: FC<CapabilityItemProps> = ({
  title,
  description,
  long,
  wide,
}: CapabilityItemProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles["capability-item"]}>
      <div className={styles["capability__item-content"]}>
        <h3 className={styles["capability__item-title"]}>{title}</h3>
        <p
          className={`${styles["capability__item-description"]} text--base text--secondary`}
        >
          {description}
        </p>
        <button
          className={styles["capability__item-button"]}
          onClick={() => navigate("/our-services")}
        >
          <span>{CAPABILITIES.button.label}</span>
          <span>
            <img src={CAPABILITIES.button.icon} alt="arrow" />
          </span>
        </button>
      </div>
      <img
        src={CAPABILITIES.spiral}
        alt="spiral"
        className={styles["capability__item-spiral"]}
      />
      <div className={styles["capability__item-gallery"]}>
        <img
          src={wide}
          alt="gallery"
          className={styles["capability__item-gallery-image"]}
        />
        <img
          src={long}
          alt="gallery"
          className={styles["capability__item-gallery-image"]}
        />
      </div>
    </div>
  );
};

export default CapabilityItem;
