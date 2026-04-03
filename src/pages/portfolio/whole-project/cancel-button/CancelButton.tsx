import cancelIcon from "/assets/cancel.png";
import type { FC } from "react";
import styles from "./CancelButton.module.css";

interface CancelButtonProps {
  onClose: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({ onClose }) => {
  return (
    <button
      className={`${styles["whole-project__close"]} text--base text--secondary`}
      onClick={onClose}
    >
      <span>Close </span>{" "}
      <span className={styles["close__icon"]}>
        <img src={cancelIcon} alt="cancel" />
      </span>
    </button>
  );
};

export default CancelButton;
