import type { FC } from "react";
import styles from "./Reviews.module.css";
import { REVIEWS } from "../../../data/homepage.data";

interface ReviewGridProps {
  rating: number;
  description: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

const ReviewGrid: FC<ReviewGridProps> = ({ rating, description, author }) => {
  return (
    <div className={styles["review__item"]}>
      <div className={styles["review__item-rating"]}>
        {Array.from({ length: rating }).map((_, index) => (
          <img key={index} src={REVIEWS.ratingIcon} alt="rating star" />
        ))}
      </div>
      <p className={styles["review__item-description"]}>{description}</p>
      <div className={styles["review__item-author"]}>
        <div className={styles["review__item-author-avatar"]}>
          <img src={author.avatar} alt={author.name} />
        </div>
        <div className={styles["review__item-author-info"]}>
          <p className={styles["review__item-author-name"]}>{author.name}</p>
          <p className={styles["review__item-author-title"]}>{author.title}</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className={styles["reviews__wrapper"]}>
      <section className={`${styles.reviews} max-inline`}>
        <h2 className={`${styles["reviews__title"]} heading heading--xl`}>
          Some things <span className="heading--blueItalic">said about</span> us
          that <span className="heading--blueItalic">inspire us</span> to do
          better.
        </h2>

        {/* reviews */}
        <section className={styles["reviews__grid"]}>
          <div className={styles["reviews__row"]}>
            <ReviewGrid {...REVIEWS.items.long[0]} />
          </div>
          <div className={styles["reviews__row"]}>
            <ReviewGrid {...REVIEWS.items.short[0]} />
            <ReviewGrid {...REVIEWS.items.short[1]} />
          </div>
          <div className={styles["reviews__row"]}>
            <ReviewGrid {...REVIEWS.items.long[1]} />
          </div>
          <div className={styles["reviews__row"]}>
            <ReviewGrid {...REVIEWS.items.short[2]} />
            <ReviewGrid {...REVIEWS.items.short[3]} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Reviews;
