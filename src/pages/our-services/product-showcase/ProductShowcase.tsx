import type { FC } from "react";
import styles from "./ProductShowcase.module.css";
import BackgroundWrapper from "../../../components/background-wrapper/BackgroundWrapper";
import designBG from "/assets/background/design-process.jpg";

const SHOWCASE_DATA = [
  {
    image: "/assets/our-services/services- (4).png",
    title: "UI/UX Design Service",
    description:
      "We design intuitive and visually engaging digital experiences that focus on usability, accessibility, and user satisfaction.",
    offers: [
      "User Experience Research",
      "User Interface Design",
      "Wireframing & Prototyping",
      "Design Systems & UI Components",
      "Interaction & Micro-interaction Design",
      "Usability Testing",
    ],
  },
  {
    image: "/assets/our-services/services- (3).png",
    title: "Web Development Service",
    description:
      "Our development team builds fast, scalable, and secure websites using modern technologies to ensure performance, flexibility, and long-term reliability.",
    offers: [
      "Custom Website Development",
      "Frontend & Backend Development",
      "CMS Integration",
      "Responsive Web Development",
      "Performance Optimization",
      "Website Maintenance & Support",
    ],
  },
  {
    image: "/assets/our-services/services- (2).png",
    title: "Mobile App Design Service",
    description:
      "We create mobile app experiences that are intuitive, engaging, and optimized for both Android and iOS platforms.",
    offers: [
      "Mobile UX Strategy",
      "App Interface Design",
      "Interactive Prototyping",
      "Design Systems for Mobile Apps",
      "Usability & Accessibility Optimization",
      "Developer-Ready Design Assets",
    ],
  },
  {
    image: "/assets/our-services/services- (1).png",
    title: "SaaS Product Design Service",
    description:
      "We help startups and companies design scalable SaaS products with intuitive workflows, clean interfaces, and strong user engagement.",
    offers: [
      "SaaS UX Strategy",
      "Dashboard & Web App Design",
      "Product Architecture Planning",
      "User Flow & Journey Mapping",
      "Design System Development",
      "Continuous Product Improvement",
    ],
  },
];

type ShowCaseProps = (typeof SHOWCASE_DATA)[number];

const ShowCase: FC<ShowCaseProps> = ({ image, title, description, offers }) => {
  const normalTitle = title.slice(0, title.lastIndexOf(" "));
  const specialTitle = title.slice(title.lastIndexOf(" "));
  return (
    <div className={styles["showcase"]}>
      <div className={styles["showcase__service-image"]}>
        <img src={image} alt={title} />
      </div>
      <BackgroundWrapper
        url={designBG}
        opacity={12}
        backgroundColor="white"
        className={styles["showcase__service-details"]}
      >
        <h3 className="heading heading--xl">
          {normalTitle}{" "}
          <span className="heading--blueItalic">{specialTitle}</span>
        </h3>
        <p className="text--base text--secondary">{description}</p>
        <h4 className="font--secondary text--mild-black text--md text--semibold">
          What we <span className="text--italic">offer?</span>
        </h4>
        <ul className={styles["showcase__offers"]}>
          {offers.map((offer) => (
            <li
              className="text--mild-black text--base text--semibold"
              key={offer}
            >
              {offer}
            </li>
          ))}
        </ul>
      </BackgroundWrapper>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section className={styles["product-showcase"]}>
      {SHOWCASE_DATA.map((service) => (
        <ShowCase key={service.title} {...service} />
      ))}
    </section>
  );
};

export default ProductShowcase;
