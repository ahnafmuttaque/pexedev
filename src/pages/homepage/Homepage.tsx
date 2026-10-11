import Navbar from "../../components/navbar/Navbar";
import FaqSection from "../../components/faqSection/FaqSection";
import LetsBuildSomething from "../../components/letsBuildSomething/LetsBuildSomething";
import AboutUs from "./about-us/AboutUs";
import Capability from "./capability/Capability";
import Collaborate from "./collaborate/Collaborate";
import DesignProcess from "./design-process/DesignProcess";
import Hero from "./hero/Hero";
import styles from "./Homepage.module.css";
import Pricing from "./pricing/Pricing";
import Projects from "./projects/Projects";
import Reviews from "./reviews/Reviews";
import SliderHero from "./slider-hero/SliderHero";

const Homepage = () => {
  return (
    <section className={`${styles.homepage}`}>
      <div className={styles["heroHeader__wrapper"]}>
        <img
          src="/assets/hero-bg.png"
          alt=""
          aria-hidden="true"
          className={styles["heroHeader__bg"]}
        />
        <Navbar />
        <Hero />
      </div>
      <SliderHero />
      <Collaborate />
      <AboutUs />
      <Projects />
      <Capability />
      <DesignProcess />
      <Reviews />
      <Pricing />
      <FaqSection />
      <LetsBuildSomething />
    </section>
  );
};

export default Homepage;
