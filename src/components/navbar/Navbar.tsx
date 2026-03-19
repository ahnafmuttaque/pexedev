import Logo from "../logo/Logo";
import { NAVIGATION_LINKS } from "../../data/navigation.data";
import { NavLink } from "react-router";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={`${classes.nav} max-inline`}>
        <div className={classes["nav__logo-wrapper"]}>
          <Logo />
        </div>
        <ul className={classes["nav__links-container"]}>
          {NAVIGATION_LINKS.map((link) => (
            <li>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? `${classes["nav__link"]} ${classes["active"]}`
                    : classes["nav__link"]
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
