import LetsBuildSomething from "../../components/letsBuildSomething/LetsBuildSomething";
import SubtitleWithIcon from "../../components/subtitle-with-icon/SubtitleWithIcon";
import styles from "./OurServices.module.css";
import ProductShowcase from "./product-showcase/ProductShowcase";

const OurServices = () => {
  return (
    <div className={`${styles["our-services"]} max-inline padding__b-112`}>
      <SubtitleWithIcon>Our Services</SubtitleWithIcon>
      <h1 className={`${styles["our-services__title"]} heading heading--xl`}>
        Transforming Ideas into Powerful{" "}
        <span className="heading--blueItalic">Digital Products</span>
      </h1>
      <p className="text--md text--secondary">
        We help businesses build modern digital products and scale their online
        presence.
      </p>
      <ProductShowcase />
      <LetsBuildSomething />
    </div>
  );
};

export default OurServices;
