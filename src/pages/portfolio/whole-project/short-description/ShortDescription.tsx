import type { FC } from "react";

interface ShortDescriptionProps {
  title: string;
  description: string;
  solutions?: string[];
  marginTop?: number;
  marginBottom?: number;
}
const ShortDescription: FC<ShortDescriptionProps> = ({
  title,
  description,
  solutions,
  marginTop = 0,
  marginBottom = 0,
}) => {
  return (
    <div
      style={{
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <h2 className="heading heading--lg m__b-8">{title}</h2>
      <p className="text--md text--secondary">{description}</p>
      {solutions && (
        <>
          <p className="text--md text--secondary">
            Key Elements to the Solution:
          </p>
          <ul className="text--md text--secondary">
            {solutions.map((solution) => (
              <li
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
                key={solution}
              >
                {solution}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ShortDescription;
