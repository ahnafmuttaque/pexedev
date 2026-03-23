import AboutUs from "./about-us/AboutUs";
import CollaborateFrame from "./collaborateFrame/CollaborateFrame";
import Hero from "./hero/Hero";
import styles from "./Homepage.module.css";
import Projects from "./projects/Projects";
const Homepage = () => {
  return (
    <section className={`${styles.homepage}`}>
      <Hero />
      <CollaborateFrame />
      <AboutUs />
      <Projects />
    </section>
  );
};

export default Homepage;
