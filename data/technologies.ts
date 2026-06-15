import type { TechnologyGroup } from "@/types";

export const technologyGroups: TechnologyGroup[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Integrations",
    items: [
      "Stripe",
      "Google Maps API",
      "Email Services",
      "Third-Party APIs",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Chrome DevTools"],
  },
];
