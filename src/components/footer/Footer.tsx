import { Link } from "react-router";
import classes from "./Footer.module.css";
import { SOCIAL_LINKS } from "../../data/navigation.data";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footer__content} max-inline`}>
        {/* footer right side content */}
        <div className={classes.footer__abouts}>
          <h2 className={`${classes["footer__abouts-title"]} heading--lg`}>
            We help startups and businesses design and build impactful{" "}
            <span className="special-italic">digital products.</span>
          </h2>
          <ul className={classes["footer__social-links-container"]}>
            {SOCIAL_LINKS.map((link) => (
              <li className={classes["footer__social-link-wrapper"]}>
                <Link className={classes["footer__social-link"]} to={link.href}>
                  <img src={link.icon} alt={link.label} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* footer left side content */}
        <div>{/*list of links*/}</div>
      </div>
    </footer>
  );
};

export default Footer;
