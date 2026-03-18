import { Link } from "react-router";
import Logo from "../logo/Logo";
import { NAVIGATION_LINKS } from "../../data/navigation.data";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="nav max-inline">
        <div className="nav__logo-wrapper">
          <Logo />
        </div>
        <ul className="nav__links-container">
          {NAVIGATION_LINKS.map((link) => (
            <li>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
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
