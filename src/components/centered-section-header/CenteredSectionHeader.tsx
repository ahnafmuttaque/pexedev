import type { FC, ReactNode } from "react";
import styles from "./CenteredSectionHeader.module.css";

interface CenteredSectionHeaderProps {
  className?: string;
  title: string;
  special: string;
  description?: string;
  children: ReactNode;
}

const CenteredSectionHeader: FC<CenteredSectionHeaderProps> = ({
  className = "",
  title,
  special,
  description,
  children,
}) => {
  return (
    <section className={`${className} padding__v-112 max-inline`}>
      <h1
        className={`${styles["centered-section-header__title"]} heading heading--xl`}
      >
        {title} <span className="heading--blueItalic">{special}</span>
      </h1>
      {description && (
        <p
          className={`${styles["centered-section-header__description"]} text--md text--secondary`}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  );
};

export default CenteredSectionHeader;
