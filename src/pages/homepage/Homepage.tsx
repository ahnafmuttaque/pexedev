import CollaborateFrame from "./collaborateFrame/CollaborateFrame";
import Hero from "./hero/Hero";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <section className={`${styles.homepage}`}>
      <Hero />
      <CollaborateFrame />
    </section>
  );
};

export default Homepage;
