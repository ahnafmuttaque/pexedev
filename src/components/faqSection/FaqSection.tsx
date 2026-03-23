import { useState } from "react";
import { FAQ_SECTION } from "../../data/shared.data";
import styles from "./FaqSection.module.css";

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState<string | undefined>(undefined);

  const onFaqClick = (faqId: string) => {
    if (activeFaq === faqId) {
      setActiveFaq(undefined);
    } else {
      setActiveFaq(faqId);
    }
  };
  const { title, description, button, faqs, icons } = FAQ_SECTION;
  return (
    <section className={`${styles.faqSection} max-inline`}>
      {/*faq right content*/}
      <section className={styles["faqSection__content"]}>
        <h2 className={`${styles["faqSection__title"]}  heading heading--xl`}>
          {title.firstHalf}
          <span className="heading heading--blueItalic">{title.special}</span>
          <br />
          {title.lastHalf}
        </h2>
        <p className={`${styles["faqSection__description"]} normal-text`}>
          {description}
        </p>
        <button
          className={`${styles["faqSection__button"]} button button--black`}
        >
          {button}
        </button>
      </section>
      <section className={styles["faqSection__faq"]}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles["faqSection__faq-item"]}>
            <div className={styles["faqSection__faq-question"]}>
              <h2>
                <span className="bullet-point"></span>
                <span>{faq.question}</span>
              </h2>
              <span
                className={styles["faqSection__icon"]}
                onClick={() => onFaqClick(faq.id)}
              >
                {activeFaq === faq.id ? (
                  <img src={icons.minus} alt={faq.question} />
                ) : (
                  <img src={icons.plus} alt={faq.question} />
                )}
              </span>
            </div>
            <p
              className={`${styles["faqSection__faq-answer"]} ${activeFaq === faq.id ? styles.visible : ""}`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default FaqSection;
