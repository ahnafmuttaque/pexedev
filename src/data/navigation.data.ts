import dribble from "/assets/dribble.png";
import behance from "/assets/behance.png";
import linkedin from "/assets/linkedin.png";
import instagram from "/assets/instagram.png";
import twitter from "/assets/twitter.png";

export const NAVIGATION_LINKS = [
  {
    label: "home page",
    href: "/",
  },
  {
    label: "know us",
    href: "/know-us",
  },
  {
    label: "our services",
    href: "/our-services",
  },
  {
    label: "portfolio's",
    href: "/portfolio",
  },
  {
    label: "contact us",
    href: "/contact",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "facebook",
    icon: dribble,
    href: "https://facebook.com",
  },
  {
    label: "behance",
    icon: behance,
    href: "https://behance.com",
  },
  {
    label: "linkedin",
    icon: linkedin,
    href: "https://linkedin.com",
  },
  {
    label: "instagram",
    icon: instagram,
    href: "https://instagram.com",
  },
  {
    label: "twitter",
    icon: twitter,
    href: "https://twitter.com",
  },
] as const;
