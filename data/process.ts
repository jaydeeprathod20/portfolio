import {
  Building,
  Code2,
  Gauge,
  GraduationCap,
  Lightbulb,
  Rocket,
} from "lucide-react";import type { WhyHireReason, ProcessStep } from "@/types";

export const whyHireReasons: WhyHireReason[] = [
  {
    id: "enterprise-experience",
    title: "Enterprise Application Experience",
    description:
      "Hands-on experience developing ERP systems, logistics platforms, procurement workflows, invoicing systems, and operational dashboards used by real businesses.",
    icon: Building,
  },
  {
    id: "react-mern-expertise",
    title: "React & MERN Expertise",
    description:
      "Experienced in developing modern web applications using React.js, Next.js, Redux, Node.js, Express.js, and MongoDB, with a focus on scalable architecture, performance, and maintainable code.",
    icon: Code2,
  },
  {
    id: "problem-solving",
    title: "Business Problem Solver",
    description:
      "Focused on understanding business requirements and translating them into efficient, user-friendly software solutions that create measurable impact.",
    icon: Lightbulb,
  },
  {
    id: "ownership",
    title: "Ownership & Accountability",
    description:
      "Experienced in taking features from requirement gathering to deployment, testing, optimization, and continuous improvements.",
    icon: Rocket,
  },
  {
    id: "performance",
    title: "Performance-Focused Development",
    description:
      "Committed to building fast, maintainable applications with reusable components, clean architecture, and optimized user experiences.",
    icon: Gauge,
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning Mindset",
    description:
      "Actively expanding expertise in MERN stack development, backend technologies, system design, and modern software engineering practices.",
    icon: GraduationCap,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "Understand business goals, user needs, and technical requirements before implementation.",
  },
  {
    step: 2,
    title: "Solution Planning",
    description:
      "Design application structure, data flow, APIs, and technical architecture for scalability.",
  },
  {
    step: 3,
    title: "UI Development",
    description:
      "Build responsive and intuitive user interfaces using React, Next.js, and modern frontend practices.",
  },
  {
    step: 4,
    title: "Backend Integration",
    description:
      "Connect APIs, databases, authentication systems, and third-party services to create complete solutions.",
  },
  {
    step: 5,
    title: "Testing & Optimization",
    description:
      "Validate functionality, fix edge cases, and optimize performance for a seamless user experience.",
  },
  {
    step: 6,
    title: "Deployment",
    description:
      "Deploy applications with proper configuration, monitoring, and production readiness checks.",
  },
  {
    step: 7,
    title: "Continuous Improvement",
    description:
      "Refine features, improve performance, and enhance applications based on feedback and evolving requirements.",
  },
];
