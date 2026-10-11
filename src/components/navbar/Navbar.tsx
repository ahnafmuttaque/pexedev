import { useCallback, useEffect, useState } from "react";
import Logo from "../logo/Logo";
import { NAVIGATION_LINKS } from "../../data/shared.data";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Automatically close drawer whenever route changes (adjusting state during render)
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsOpen(false);
  }

  // Handle escape key and lock body/html scroll cleanly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`${classes["nav__wrapper"]} ${
        isOpen ? classes["nav__wrapper--open"] : ""
      }`}
    >
      <nav
        className={`${classes.nav} max-inline`}
        aria-label="Main Navigation"
      >
        <div className={classes["nav__logo-wrapper"]}>
          <Link
            to="/"
            className={classes["nav__logo-link"]}
            aria-label="PexeDev - Go to homepage"
            onClick={closeDrawer}
          >
            <Logo />
          </Link>
        </div>

        {/* Desktop links */}
        <ul className={classes["nav__links-container"]}>
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.label}>
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

        {/* Mobile toggle button */}
        <button
          type="button"
          className={classes["nav__toggle"]}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
        >
          <span
            className={`${classes["nav__toggle-bar"]} ${
              isOpen ? classes["nav__toggle-bar--open-top"] : ""
            }`}
          />
          <span
            className={`${classes["nav__toggle-bar"]} ${
              isOpen ? classes["nav__toggle-bar--open-mid"] : ""
            }`}
          />
          <span
            className={`${classes["nav__toggle-bar"]} ${
              isOpen ? classes["nav__toggle-bar--open-bot"] : ""
            }`}
          />
        </button>

        {/* Mobile drawer backdrop */}
        <div
          className={`${classes["nav__drawer-overlay"]} ${
            isOpen ? classes["nav__drawer-overlay--open"] : ""
          }`}
          onClick={closeDrawer}
          aria-hidden={!isOpen}
        />

        {/* Mobile drawer sheet */}
        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          className={`${classes["nav__drawer"]} ${
            isOpen ? classes["nav__drawer--open"] : ""
          }`}
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
        >
          <div className={classes["nav__drawer-header"]}>
            <Link
              to="/"
              className={classes["nav__logo-link"]}
              onClick={closeDrawer}
              aria-label="PexeDev - Go to homepage"
            >
              <Logo />
            </Link>
            <button
              type="button"
              className={classes["nav__drawer-close"]}
              onClick={closeDrawer}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <ul className={classes["nav__drawer-links"]}>
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive
                      ? `${classes["nav__link"]} ${classes["active"]} ${classes["nav__drawer-link"]}`
                      : `${classes["nav__link"]} ${classes["nav__drawer-link"]}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={classes["nav__drawer-cta"]}>
            <button
              type="button"
              className="button button--black"
              style={{ width: "100%" }}
              onClick={() => {
                closeDrawer();
                navigate("/contact-us");
              }}
            >
              Start Your Project
            </button>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
