import styles from "./WholeProjectHeader.module.css";

const WholeProjectHeader = () => {
  return (
    <header className={`${styles["whole-project__header"]}`}>
      <div className={styles["whole-project__header-left"]}>
        <div className={styles["whole-project__header-image"]}>
          <img src="/assets/my-genie.png" alt="my genie" />
        </div>
        <div className={styles["whole-project__header__content"]}>
          <h1 className="heading heading--lg">MyGenie Application Design</h1>
          <p className="text--base text--secondary">
            Cleaning Service Mobile Application UI Design | UIUX
          </p>
        </div>
      </div>
      <ul className={styles["whole-project__header-right"]}>
        <li className="text--base text--secondary">
          <span>Company Name:</span>
          <span className="text--xs text--semibold text--mild-black">
            MyGenie
          </span>
        </li>
        <li className="text--base text--secondary">
          <span>Timeline:</span>
          <span className="text--xs text--semibold text--mild-black">
            1.5 Month
          </span>
        </li>
        <li className="text--base text--secondary">
          <span>Provided Services:</span>
          <ul className={styles["whole-project__header-right__services"]}>
            <li className="text--xs text--semibold text--mild-black">
              UI/UX Design
            </li>
            <li className="text--xs text--semibold text--mild-black">
              UX Research
            </li>
            <li className="text--xs text--semibold text--mild-black">
              Mobile App
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default WholeProjectHeader;
