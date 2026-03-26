import AboutUs from "./about-us/AboutUs";
import Capability from "./capability/Capability";
import CollaborateFrame from "./collaborateFrame/CollaborateFrame";
import DesignProcess from "./design-process/DesignProcess";
import Hero from "./hero/Hero";
import styles from "./Homepage.module.css";
import Projects from "./projects/Projects";
import Reviews from "./reviews/Reviews";
import SliderHero from "./slider-hero/SliderHero";
const Homepage = () => {
  return (
    <section className={`${styles.homepage}`}>
      <Hero />
      <SliderHero />
      <CollaborateFrame />
      <AboutUs />
      <Projects />
      <Capability />
      <DesignProcess />
      <Reviews />
    </section>
  );
};

export default Homepage;
