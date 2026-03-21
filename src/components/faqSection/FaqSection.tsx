import { FAQ_SECTION } from "../../data/shared.data";
import styles from "./FaqSection.module.css";

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState<string | undefined>(undefined);
  return (
    <section className={`${styles.faqSection} max-inline`}>
      {/*faq right content*/}
      <section className={styles["faqSection__content"]}>
        <h2 className={styles["faqSection__title"]}>{FAQ_SECTION.title}</h2>
        <p className={styles["faqSection__description"]}>
          {FAQ_SECTION.description}
        </p>
        <button className={`${styles["faqSection__button"]}`}>
          {FAQ_SECTION.button}
        </button>
      </section>
      <section className={styles["faqSection__faq"]}>
        {FAQ_SECTION.faqs.map((faq, index) => (
          <div key={index} className={styles["faqSection__faq-item"]}>
            <h3 className={styles["faqSection__faq-question"]}>
              {faq.question}
            </h3>
            <p className={styles["faqSection__faq-answer"]}>{faq.answer}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default FaqSection;
