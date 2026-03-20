import { Link } from "react-router";
import classes from "./Footer.module.css";
import { SOCIAL_LINKS } from "../../data/navigation.data";
import FooterLinksContainer from "./FooterLinksContainer/FooterLinksContainer";
import { FOOTERlINKS } from "../../data/navigation.data";
import Copyright from "./Cooyright/Copyright";

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
              <li
                key={link.label}
                className={classes["footer__social-link-wrapper"]}
              >
                <Link className={classes["footer__social-link"]} to={link.href}>
                  <img src={link.icon} alt={link.label} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* footer left side content */}
        <div className={classes["footer__links-grid"]}>
          {/* first links are navigation links, so they are being rendered first */}
          <FooterLinksContainer
            title={FOOTERlINKS[0].title}
            links={FOOTERlINKS[0].links}
            type="navigation"
          />
          {FOOTERlINKS.slice(1).map((section) => (
            <FooterLinksContainer
              key={section.title}
              title={section.title}
              links={section.links}
              type="link"
            />
          ))}
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
