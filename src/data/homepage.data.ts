export const HERO = {
  title: {
    normal: "Designing High-Impact Digital Experiences for Business ",
    special: "Growth.",
  },
  subtitle: "Delivering Smart Solutions for Businesses.",
  paragraph:
    "We help startups and businesses build modern, scalable, and user-friendly digital products. From strategy and design to development, we create impactful digital experiences that help brands grow.",
  buttons: [
    { label: "start your project", href: "" },
    { label: "explore projects", href: "" },
  ],
  stat: {
    title: {
      normal: "company stats.",
      special: "growth",
    },
    values: [
      { label: "total projects", value: "120" },
      { label: "happy client", value: "50" },
      { label: "countries sesrved", value: "08" },
      { label: "experience", value: "05y" },
    ],
  },
} as const;

export const CAPABILITIES = {
  items: [
    {
      title: "UX/UI Design.",
      description:
        "We design user-centered interfaces that are intuitive, modern, and visually engaging.",
      wide: "/assets/capability/a-wide.png",
      long: "/assets/capability/a-long.png",
    },
    {
      title: "UX/UI Design.",
      description:
        "We design user-centered interfaces that are intuitive, modern, and visually engaging.",
      wide: "/assets/capability/a-wide.png",
      long: "/assets/capability/a-long.png",
    },
    {
      title: "UX/UI Design.",
      description:
        "We design user-centered interfaces that are intuitive, modern, and visually engaging.",
      wide: "/assets/capability/a-wide.png",
      long: "/assets/capability/a-long.png",
    },
    {
      title: "UX/UI Design.",
      description:
        "We design user-centered interfaces that are intuitive, modern, and visually engaging.",
      wide: "/assets/capability/a-wide.png",
      long: "/assets/capability/a-long.png",
    },
  ],
  button: {
    label: "Explore Services",
    href: "",
    icon: "/assets/arrow-up-right.png",
  },
  spiral: "/assets/spiral.png",
} as const;

export const REVIEWS = {
  ratingIcon: "/assets/reviews/solar_star-bold.png",
  items: {
    long: [
      {
        rating: 5,
        description:
          "Finally, an email platform that actually delivers on the AI promise. The predictive analytics have transformed how we approach campaigns. Lorem ipsum dolor sit amet consectetur. Velit facilisis dolor dignissim morbi. Elementum pharetra quisque odio nisl quam commodo. Risus a maecenas porttitor placerat diam quam neque.",
        author: {
          name: "Terence McGlynn",
          title: "Consultant",
          avatar: "/assets/reviews/authorOne.png",
        },
      },
      {
        rating: 5,
        description:
          "We moved from guesswork to predictable growth within weeks of switching. The AI suggestions alone increased our open rates by 35%. Finally, an email platform that actually delivers on the AI promise. The predictive analytics have transformed how we approach campaigns. Lorem ipsum dolor sit amet consectetur. Velit facilisis dolor dignissim morbi.",
        author: {
          name: "Jessie Walter",
          title: "Manager",
          avatar: "/assets/reviews/authorFour.png",
        },
      },
    ],
    short: [
      {
        rating: 5,
        description:
          "The team delivered an incredible product experience. Their attention to detail and design thinking truly elevated our platform.",
        author: {
          name: "James Stroman",
          title: "Architect",
          avatar: "/assets/reviews/authorTwo.png",
        },
      },
      {
        rating: 5,
        description: `They transformed our idea into a polished product. Communication and execution were excellent."\n — Daniel Carter, Startup Founder`,
        author: {
          name: "Forrest Krajcik",
          title: "Administrator",
          avatar: "/assets/reviews/authorThree.png",
        },
      },
      {
        rating: 5,
        description:
          "Working with them was seamless. The final design exceeded our expectations.",
        author: {
          name: "Jonathon Hayes",
          title: "Architect",
          avatar: "/assets/reviews/authorFive.png",
        },
      },
      {
        rating: 5,
        description:
          "Finally, an email platform that actually delivers on the AI promise. The predictive analytics have transformed how we approach campaigns.",
        author: {
          name: "Maurice Brakus",
          title: "Administrator",
          avatar: "/assets/reviews/authorSix.png",
        },
      },
    ],
  },
} as const;

export const PRICING_DATA = [
  {
    title: "Starter Package",
    description:
      "Ideal for startups and small projects looking to launch quickly.",
    price: 799,
    button: {
      label: "Get Started Today",
    },
    listItems: [
      "1 Project Included",
      "Basic UI/UX Design",
      "Responsive Web Development",
      "1 Month Support",
      "Project Consultation",
    ],
  },
  {
    title: "Professional Package",
    description:
      "Perfect for growing businesses needing a complete digital solution.",
    price: 1299,
    button: {
      label: "Start your Project",
    },
    listItems: [
      "Up to 3 Projects",
      "Full UI/UX Design",
      "Web & Mobile Development",
      "3 Months Support",
      "SEO & Performance Optimization",
      "Design System Setup",
    ],
  },
  {
    title: "Business Package",
    description:
      "Designed for companies that require advanced features and custom workflows.",
    price: 1799,
    button: {
      label: "Get This Package",
    },
    listItems: [
      "Up to 5 Projects",
      "Advanced UI/UX Design",
      "Web, Mobile & SaaS Development",
      "6 Months Support",
      "SEO, Analytics, & Optimization",
      "Custom Integrations",
    ],
  },
  {
    title: "Enterprise Package",
    description:
      "Custom solutions for large-scale projects and enterprise-level needs.",
    price: null,
    button: {
      label: "Request a Quote",
    },
    listItems: [
      "Unlimited Projects",
      "Dedicated Design",
      "Development Team",
      "Multi-platform Solution (Web/App)",
      "Priority Support & Maintenance",
      "Custom Integrations & API",
      "Full Strategy & Consulting",
    ],
  },
];
