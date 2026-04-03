import styles from "./Portfolio.module.css";
import type {FC} from "react";
interface PortfolioProps {
  title: string;
}

const Portfolio: FC<PortfolioProps> = () => {
  return <div className={`${styles.portfolio} max-inline`}>
    This is the portfolio section
  </div>;
};

export default Portfolio;
