import { useNavigate } from "react-router";
import BackgroundWrapper from "../../../components/background-wrapper/BackgroundWrapper";
import { CAPABILITIES } from "../../../data/homepage.data";
import CapabilityItem from "./capability-item/CapabilityItem";
import styles from "./Capability.module.css";

const Capability = () => {
  const navigate = useNavigate();
  return (
    <BackgroundWrapper
      url="/assets/background/design-process.jpg"
      opacity={12}
      scale={2}
    >
      <section className={`${styles.capability} max-inline`}>
        {/* capability header */}
        <header className={styles["capability__header"]}>
          <div>
            <h2
              className={`${styles["capability__title"]} heading heading--xxl`}
            >
              Our Digital{" "}
              <span className="heading--blueItalic">Capabilities.</span>
            </h2>
            <p
              className={`${styles["capability__description"]} text--md text--secondary`}
            >
              From strategy to design and development, we build digital products
              that move businesses forward.
            </p>
          </div>
          <button
            className="button button--black"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </button>
        </header>

        <section className={styles["capability__lists"]}>
          {CAPABILITIES.items.map((item, index) => (
            <CapabilityItem key={index} {...item} />
          ))}
        </section>
      </section>
    </BackgroundWrapper>
  );
};

export default Capability;
