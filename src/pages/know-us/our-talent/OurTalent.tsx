import type { FC } from "react";
import styles from "./OurTalent.module.css";
import linkedinLogo from "/assets/icons/linkedin.png";

interface TalentProps {
  talentLogo: string;
  talentName: string;
  talentTitle: string;
  talentLink: string;
}

const Talent: FC<TalentProps> = ({
  talentLogo,
  talentName,
  talentTitle,
  talentLink,
}) => {
  return (
    <div className={styles["talent"]}>
      <div className={styles["talent__logo"]}>
        <img src={talentLogo} alt={talentName} />
      </div>
      <div className={styles["talent__info"]}>
        <div className={styles["talent__info-box"]}>
          <h3 className="text--mild-black">{talentName}</h3>
          <p className="text--secondary">{talentTitle}</p>
        </div>
        <a href={talentLink} className={styles["telent__link"]}>
          <img src={linkedinLogo} alt="link to linkedin" />
        </a>
      </div>
    </div>
  );
};

const TALENT_DATA = [
  {
    talentLogo: "/assets/know-us/talent-logo (1).png",
    talentName: "Shannon Barton",
    talentTitle: "Manager, People & Culture",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (2).png",
    talentName: "Elsa Kshlerin DVM",
    talentTitle: "Corporate Research Agent",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (3).png",
    talentName: "Larry Hartmann",
    talentTitle: "District Interactions Orchestrator",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (1).png",
    talentName: "Shannon Barton",
    talentTitle: "Manager, People & Culture",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (2).png",
    talentName: "Elsa Kshlerin DVM",
    talentTitle: "Corporate Research Agent",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (3).png",
    talentName: "Larry Hartmann",
    talentTitle: "District Interactions Orchestrator",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (1).png",
    talentName: "Shannon Barton",
    talentTitle: "Manager, People & Culture",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (2).png",
    talentName: "Elsa Kshlerin DVM",
    talentTitle: "Corporate Research Agent",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (3).png",
    talentName: "Larry Hartmann",
    talentTitle: "District Interactions Orchestrator",
    talentLink: "https://www.linkedin.com/",
  },
  {
    talentLogo: "/assets/know-us/talent-logo (1).png",
    talentName: "Shannon Barton",
    talentTitle: "Manager, People & Culture",
    talentLink: "https://www.linkedin.com/",
  },
];

const OurTalent = () => {
  return (
    <section className={`${styles["our-talent"]}  padding__v-112`}>
      <h1
        className={`${styles["our-talent__title"]} text--center heading heading--xxl`}
      >
        The <span className="heading--blueItalic">Talent</span> Behind Our
        Solutions
      </h1>
      <div className={`${styles["our-talent__talents"]} max-inline`}>
        {TALENT_DATA.map((talent, index) => (
          <Talent key={index} {...talent} />
        ))}
      </div>
    </section>
  );
};

export default OurTalent;
