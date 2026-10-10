import { useNavigate } from "react-router";
import BackgroundWrapper from "../../components/background-wrapper/BackgroundWrapper";
import LetsBuildSomething from "../../components/letsBuildSomething/LetsBuildSomething";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <LetsBuildSomething />
      <BackgroundWrapper
        className={`${styles.contactUs__wrapper} max-inline`}
        url="/assets/background/design-process.jpg"
        opacity={12}
        backgroundColor="white"
        borderRadius="12px"
      >
        <div className={`${styles.contactUs} max-inline`}>
          <h1 className="heading heading--xxl">
            Let's Build Something Exceptional{" "}
            <span className="heading--blueItalic">Together</span>
          </h1>
          <p className="text--md text--secondary">
            Have an idea or project in mind? Our team is ready to collaborate
            with you to transform your vision into a powerful digital product
            that delivers real value and supports your business growth.
          </p>
          <div className={styles.contactUs__cta}>
            <button
              className="button button--black"
              onClick={handleStartProject}
            >
              Start your Project
            </button>
            <button
              className="button button--white"
              onClick={() => navigate("/portfolio")}
            >
              Explore Projects
            </button>
          </div>
        </div>
      </BackgroundWrapper>
    </>
  );
};

export default ContactUs;
