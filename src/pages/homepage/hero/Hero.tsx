import styles from "./Hero.module.css";
import { HERO } from "../../../data/homepage.data";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className={styles["hero__wrapper"]}>
      <section className={`${styles["hero"]}  max-inline`}>
        {/* homepage top sub title*/}
        <section className={styles["hContent"]}>
          <div className={styles["hContent__subtitle"]}>
            <div className={styles["hContent__subtitle-icon-wrapper"]}>
              <img
                src={HERO.subtitle.icon.src}
                alt={HERO.subtitle.icon.alt}
                className={styles["hContent__subtitle-icon"]}
              />
            </div>
            <p className={styles["hContent__subtitle-text"]}>
              {HERO.subtitle.text}
            </p>
          </div>

          {/* Hero title */}
          <h1 className={`${styles["hContent__title"]} heading--xl`}>
            {HERO.title.normal}
            <span className=" heading--blueItalic">{HERO.title.special}</span>
          </h1>
          <p className={`${styles["hContent__paragraph"]} normal-text`}>
            {HERO.paragraph}
          </p>
          <div className={styles["hContent__buttons"]}>
            {HERO.buttons.map((button, index) => {
              const classes = ["button--black", "button--white"];
              return (
                <button
                  key={button.label}
                  className={`${styles["hContent__button"]} button ${classes[index]}`}
                  onClick={() => navigate(button.href)}
                >
                  {button.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* hero stats*/}
        <aside className={styles["hStat"]}>
          <ul>
            <li className={`${styles["hStat__title"]} heading--md`}>
              {HERO.stat.title.normal.split(" ")[0]}{" "}
              <span className="heading--blueItalic">
                {HERO.stat.title.special}
              </span>{" "}
              {HERO.stat.title.normal.split(" ")[1]}
            </li>
          </ul>
          <ul className={styles["hStat__container"]}>
            {HERO.stat.values.map((value) => (
              <li key={value.label} className={styles["hStat__item"]}>
                <span className={styles["hStat__item-value"]}>
                  {value.value}+
                </span>
                <span className={styles["hStat__item-label"]}>
                  {value.label}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </section>
  );
};
export default Hero;
