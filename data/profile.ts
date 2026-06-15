import type { SiteConfig } from "@/types";
import { PROFILE_IMAGE, RESUME_PATH } from "@/constants/site";

export const siteConfig: SiteConfig = {
  name: "Jaydeep Rathod",
  role: "Full Stack MERN Developer · React.js | Next.js | Node.js | MongoDB",
  headline:
    "Building Scalable Web Applications with React, Next.js, Node.js & MongoDB",
  experience: "3+ Years",
  location: "Ahmedabad, Gujarat, India",
  heroHeadline:
    "Full Stack MERN Developer Building Modern Web Applications & Business Solutions",
  heroSubheadline:
    "Full Stack Developer with 3+ years of experience building scalable SaaS platforms, ERP systems, logistics applications, procurement solutions, and business management software. Strong expertise in React.js, Next.js, JavaScript, Redux, REST API integration, and modern frontend architecture, with hands-on experience building full-stack applications using Node.js, Express.js, and MongoDB.",
  aboutStory:
    "I am a Full Stack MERN Developer with over 3 years of experience building scalable and data-driven web applications.",
 aboutParagraphs: [
  "I am a Full Stack MERN Developer with over 3 years of experience building scalable, data-driven, and business-focused web applications.",
  "My professional experience includes developing enterprise-grade ERP systems, logistics platforms, procurement workflows, healthcare marketplaces, and SaaS products used by real businesses.",
  "I have worked across the complete software development lifecycle, delivering solutions that improve operational efficiency, automate business processes, and enhance user experiences.",
  "My core expertise includes MongoDB, Express.js, React.js, Node.js, Next.js, JavaScript, Redux, REST API development, authentication systems, database design, and full-stack application architecture.",
  "I enjoy solving complex business problems through technology, building scalable applications, and creating reliable software that delivers measurable value to users and organizations.",
],
  workExperience: [
    {
      company: "Nivzen Technologies",
      position: "Senior Frontend Developer (React.js)",
      duration: "June 2023 – Present",
      description:
        "Leading frontend development for enterprise-grade SaaS platforms, ERP systems, logistics solutions, procurement platforms, and B2B marketplaces.",
      responsibilities: [
        "Developed scalable React.js applications used by enterprise clients.",
        "Built complex admin dashboards, reporting modules, and operational management systems.",
        "Integrated REST APIs and collaborated closely with Node.js and Django backend teams.",
        "Implemented secure role-based access control and user management systems.",
        "Integrated Google Maps APIs for route optimization, tracking, and address validation.",
        "Developed invoice generation, PDF export, and printing workflows using jsPDF and react-to-print.",
        "Improved performance, maintainability, and scalability across multiple production applications.",
      ],
    },
  ],
  targetClients: [
    "Full Stack MERN Developer Roles",
    "React.js Developer Roles",
    "Next.js Developer Roles",
    "Frontend Engineer Roles",
    "Remote Opportunities",
    "Product-Based Companies",
  ],
  resumePath: RESUME_PATH,
  profileImage: PROFILE_IMAGE,
};
