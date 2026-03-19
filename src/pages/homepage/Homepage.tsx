import Navbar from "../../components/navbar/Navbar";
import Hero from "./hero/Hero";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <section className={`${styles.homepage}`}>
      <Navbar />
      <Hero />
    </section>
  );
};

export default Homepage;
