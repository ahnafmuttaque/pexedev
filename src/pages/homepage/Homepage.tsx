import AboutUs from "./about-us/AboutUs";
import CollaborateFrame from "./collaborateFrame/CollaborateFrame";
import Hero from "./hero/Hero";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <section className={`${styles.homepage}`}>
      <Hero />
      <CollaborateFrame />
      <AboutUs />
    </section>
  );
};

export default Homepage;
