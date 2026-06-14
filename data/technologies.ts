import type { TechnologyGroup } from "@/types";

export const technologyGroups: TechnologyGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Ant Design",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Integrations",
    items: ["Stripe", "Google Maps", "REST APIs"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman"],
  },
];
