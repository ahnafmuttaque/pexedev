export interface ProjectItem {
  id: number;
  thumbnail: string;
  title: string;
  time: string;
  description: string;
  tags: string[];
  category: "Website Design" | "Mobile app" | "SaaS Platform";
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    thumbnail: "/assets/projects/project-one.png",
    title: "Vaiera Lain.",
    time: "1.5  Month",
    description: "Elegant Modern AI Assistant Website UI Design - About",
    tags: ["UX Research", "Visual Identify", "Website Design"],
    category: "Website Design",
  },
  {
    id: 2,
    thumbnail: "/assets/projects/project-two.png",
    title: "Vaiera Lain.",
    time: "1.5  Month",
    description: "Elegant Modern AI Assistant Website UI Design - About",
    tags: ["UX Research", "Mobile App", "Visual Identify"],
    category: "Mobile app",
  },
  {
    id: 3,
    thumbnail: "/assets/projects/project-three.png",
    title: "Vaiera Lain.",
    time: "1.5  Month",
    description: "Elegant Modern AI Assistant Website UI Design - About",
    tags: ["UX Research", "SaaS Platform", "Visual Identify"],
    category: "SaaS Platform",
  },
  {
    id: 4,
    thumbnail: "/assets/projects/project-four.png",
    title: "Vaiera Lain.",
    time: "1.5  Month",
    description: "Elegant Modern AI Assistant Website UI Design - About",
    tags: ["UX Research", "Website Design", "Visual Identify"],
    category: "Website Design",
  },
  {
    id: 5,
    thumbnail: "/assets/projects/project-five.png",
    title: "Vaiera Lain.",
    time: "1.5  Month",
    description: "Elegant Modern AI Assistant Website UI Design - About",
    tags: ["UX Research", "Mobile App", "Visual Identify"],
    category: "Mobile app",
  },
];

