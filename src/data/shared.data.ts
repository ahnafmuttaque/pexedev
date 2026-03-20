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

export const FOOTERlINKS = [
  {
    title: "quick links",
    links: NAVIGATION_LINKS.map((link) => link.label),
  },
  {
    title: "our services",
    links: [
      "UI/UX Design",
      "Web Design",
      "Mobile App Development",
      "Web Development",
      "Product Design",
    ],
  },
  {
    title: "contact info",
    links: ["hello@pixeDev.com", "+1 (555) 123-4567", "Dhaka, Bangladesh"],
  },
];

export const COPYRIGHT_LINKS = [
  { label: "privacy policy", href: "/privacyPolicy" },
  { label: "terms & conditions", href: "/terms" },
  { label: "help & support", href: "/help" },
] as const;

export const CONTACT_US = {
  title: {
    normal: "let's build something great ",
    special: "together.",
  },
  description:
    "Have a project idea? Let’s discuss how we can help bring your vision to life.",
  metaLists: [
    "24-Hour Response Guarantee",
    "Detailed Project Analysis within 48 Hours",
    "Free Strategic Business Consultation",
    "Exclusive Value-Added Support",
  ],
} as const;
