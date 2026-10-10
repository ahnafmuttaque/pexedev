import styles from "./SliderHero.module.css";
import Marquee from "react-fast-marquee";

const images = [
  "/assets/marquees/marquee (1).png",
  "/assets/marquees/marquee (2).png",
  "/assets/marquees/marquee (3).png",
  "/assets/marquees/marquee (4).png",
];

const SliderHero = () => {
  return (
    <section className={styles.slider}>
      {Array.from({ length: 2 }).map((_, rowIndex) => (
        <Marquee
          key={rowIndex}
          gradient
          gradientColor="#686868"
          style={{ marginBottom: "16px" }}
          direction={rowIndex === 0 ? "right" : "left"}
          speed={100}
          pauseOnHover
        >
          {[...images, ...images].map((image, itemIndex) => (
            <div
              key={`${rowIndex}-${itemIndex}`}
              className={styles.slider__marqueeItem}
            >
              <img
                className={styles.slider__marqueeImage}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={image}
                alt={`Marquee ${itemIndex + 1}`}
              />
            </div>
          ))}
        </Marquee>
      ))}
    </section>
  );
};

export default SliderHero;
