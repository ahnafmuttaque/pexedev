import { COPYRIGHT_LINKS } from "../../../data/shared.data";
import classes from "./Copyright.module.css";

export const Copyright = () => {
  return (
    <div className={`${classes["footer__copyright"]} max-inline`}>
      <span>
        &copy; {new Date().getFullYear()} Pexedev. All rights reserved.
      </span>
      <ul className={classes["footer__copyright-list"]}>
        {COPYRIGHT_LINKS.map((link) => (
          <li
            key={link.label}
            className={classes["footer__copyright-list-item"]}
          >
            <a
              className={classes["footer__copyright-link"]}
              href={link.href}
              target="_blank"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Copyright;
