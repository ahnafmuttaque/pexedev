import AboutUs from "./about-us/AboutUs";
import CollaborateFrame from "./collaborateFrame/CollaborateFrame";
import Hero from "./hero/Hero";
import styles from "./Homepage.module.css";
import Projects from "./projects/Projects";
import SliderHero from "./slider-hero/SliderHero";
const Homepage = () => {
  return (
    <section className={`${styles.homepage}`}>
      <Hero />
      <SliderHero />
      <CollaborateFrame />
      <AboutUs />
      <Projects />
    </section>
  );
};

export default Homepage;
