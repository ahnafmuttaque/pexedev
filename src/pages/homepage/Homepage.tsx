import Hero from "./hero/Hero";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <section className={`${styles.homepage}`}>
      <Hero />
    </section>
  );
};

export default Homepage;
