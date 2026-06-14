import {
  Target,
  Building,
  Layers,
  Rocket,
  Gauge,
  Shield,
} from "lucide-react";
import type { WhyHireReason, ProcessStep } from "@/types";

export const whyHireReasons: WhyHireReason[] = [
  {
    id: "business-focused",
    title: "Business-Focused Development",
    description:
      "Every technical decision is tied to a business outcome — faster operations, reduced costs, or improved customer experience.",
    icon: Target,
  },
  {
    id: "enterprise-experience",
    title: "Enterprise Experience",
    description:
      "Proven track record building ERP systems, logistics platforms, and SaaS products for real businesses.",
    icon: Building,
  },
  {
    id: "scalable-architecture",
    title: "Scalable Architecture",
    description:
      "Applications built with clean architecture patterns that grow with your business without costly rewrites.",
    icon: Layers,
  },
  {
    id: "end-to-end",
    title: "End-to-End Ownership",
    description:
      "From discovery to deployment and support — one consultant who understands your entire product lifecycle.",
    icon: Rocket,
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Applications optimized for speed, Core Web Vitals, and efficient resource usage from the start.",
    icon: Gauge,
  },
  {
    id: "maintainability",
    title: "Long-Term Maintainability",
    description:
      "Clean code, documentation, and modular architecture that makes future updates straightforward.",
    icon: Shield,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Understand your business goals, users, existing systems, and success metrics through structured consultation.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Define scope, architecture, timeline, and milestones with a clear roadmap and technical specifications.",
  },
  {
    step: 3,
    title: "Design",
    description:
      "Create wireframes and UI designs focused on usability, conversion, and your brand identity.",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Build iteratively with regular demos, transparent progress updates, and quality-focused development.",
  },
  {
    step: 5,
    title: "Testing",
    description:
      "Comprehensive QA across devices, browsers, and edge cases to ensure production readiness.",
  },
  {
    step: 6,
    title: "Deployment",
    description:
      "Launch to production with CI/CD, monitoring, and performance validation.",
  },
  {
    step: 7,
    title: "Support",
    description:
      "Post-launch support, maintenance, and iterative improvements to keep your product running smoothly.",
  },
];
