import BackgroundWrapper from "../../../components/background-wrapper/BackgroundWrapper";
import styles from "./Collaborate.module.css";
import collaborateFrame from "/assets/background/loved-by-companies-bg.jpg";
import Marquee from "../../../components/marquee/Marquee";

const COLLABORATE__COMPANIES = [
  {
    name: "",
    icon: "/assets/icons/colloborate-companies (1).png",
  },
  { name: "", icon: "/assets/icons/colloborate-companies (2).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (3).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (4).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (5).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (6).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (6).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (2).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (3).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (4).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (2).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (3).png" },
  { name: "", icon: "/assets/icons/colloborate-companies (4).png" },
];

const Collaborate = () => {
  return (
    <BackgroundWrapper
      className={`${styles["collaborate"]} max-inline`}
      url={collaborateFrame}
      opacity={20}
      backgroundColor="white"
    >
      <h2 className={`${styles["collaborate__title"]} heading--xl`}>
        Trusted by Forward-Thinking{" "}
        <span className="heading--blueItalic">Companies.</span>
      </h2>
      <div className={styles["collaborate__companies"]}>
        <Marquee pauseOnHover speed={100}>
          {COLLABORATE__COMPANIES.map((company, index) => (
            <div key={index} className={styles["collaborate__company"]}>
              <img src={company.icon} alt={company.name} />
            </div>
          ))}
        </Marquee>
      </div>
    </BackgroundWrapper>
  );
};

export default Collaborate;
