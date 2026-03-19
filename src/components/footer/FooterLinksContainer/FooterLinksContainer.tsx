import type { FC } from "react";
import classes from "./FooterLinksContainer.module.css";
import { Link } from "react-router";

interface FooterLinksContainerProps {
  links: string[];
  title: string;
  type: "navigation" | "link";
}

const FooterLinksContainer: FC<FooterLinksContainerProps> = ({
  links,
  title,
  type,
}) => {
  return (
    <div className={classes["footer__links-container"]}>
      <h3 className={classes["footer__links-container-title"]}>{title}</h3>
      <ul className={classes["footer__links-ul"]}>
        {links.map((link) => {
          return (
            <li className={classes["footer__link-listItem"]}>
              {type === "navigation" ? (
                <Link className={classes["footer__link"]} to={link}>
                  {link}
                </Link>
              ) : (
                <a
                  className={classes["footer__link"]}
                  href={link}
                  target="_blank"
                >
                  {link}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinksContainer;
