import type { FC } from "react";
import { PRICING_DATA } from "../../../data/homepage.data";
import styles from "./Pricing.module.css";
import pricingIcon from "/assets/pricing-icon.png";

type PricingCardProps = (typeof PRICING_DATA)[number];

const PricingCard: FC<PricingCardProps> = ({
  title,
  description,
  price,
  button,
  listItems,
}) => {
  return (
    <div className={styles["pricing__card"]}>
      <h3 className={styles["pricing__card-title"]}>{title}</h3>
      <p
        className={`${styles["pricing__card-description"]} text--sm text--secondary`}
      >
        {description}
      </p>
      <div className={styles["pricing__card-price"]}>
        <span className={styles["pricing__card-price-amount"]}>
          {price ? `$${price}` : <img src={pricingIcon} alt="pricing icon" />}
        </span>{" "}
        <span
          className={`${styles["pricing__card-price-period"]} text--sm text--secondary`}
        >
          /{price ? "monthly" : "Custom Pricing"}
        </span>
      </div>
      <button
        className={`button button--black ${styles["pricing__card-button"]}`}
      >
        {button.label}
      </button>

      <h4 className={styles["pricing__list-title"]}>Included Features: </h4>
      <ul className={styles["pricing__list"]}>
        {listItems.map((item, index) => (
          <li className={styles["pricing__list-item"]} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className={styles["pricing__wrapper"]}>
      <section className={`${styles.pricing} max-inline`}>
        <h2 className={`${styles["pricing__title"]} heading heading--xl`}>
          Invest in Your Digital
          <span className="heading--blueItalic">Success.</span>
        </h2>
        <p
          className={`${styles["pricing__description"]} text--md text--secondary`}
        >
          Choose the plan that fits your business needs and start building
          exceptional digital products today.
        </p>
        <section className={styles["pricing__cards"]}>
          {PRICING_DATA.map((cData) => (
            <PricingCard key={cData.title} {...cData} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Pricing;
