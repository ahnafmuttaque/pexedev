import styles from "./SliderHero.module.css";
import Marquee from "react-fast-marquee";

const RealMarquee = Marquee.default || Marquee;
const images = [
  "/assets/marquees/marquee (1).png",
  "/assets/marquees/marquee (2).png",
  "/assets/marquees/marquee (3).png",
  "/assets/marquees/marquee (4).png",
];

const SliderHero = () => {
  return (
    <section className={styles.slider}>
      {Array.from({ length: 2 }).map((_, index) => (
        <RealMarquee
          gradient
          gradientColor="#686868"
          style={{ marginBottom: "16px" }}
          direction={index === 0 ? "right" : "left"}
          speed={100}
          pauseOnHover
        >
          {[...images, ...images].map((image, index) => (
            <div className={styles.slider__marqueeItem}>
              <img
                className={styles.slider__marqueeImage}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                key={index}
                src={image}
                alt={`Marquee ${index + 1}`}
              />
            </div>
          ))}
        </RealMarquee>
      ))}
    </section>
  );
};

export default SliderHero;
