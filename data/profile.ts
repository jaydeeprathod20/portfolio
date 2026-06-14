import type { SiteConfig } from "@/types";
import { PROFILE_IMAGE, RESUME_PATH } from "@/constants/site";

export const siteConfig: SiteConfig = {
  name: "Jaydeep Rathod",
  role: "Software Consultant | Full Stack MERN & Next.js Developer",
  headline: "Building Scalable SaaS Products & Business Applications",
  experience: "3+ Years",
  location: "Ahmedabad, Gujarat, India",
  heroHeadline:
    "Helping Businesses Build Scalable SaaS Products, ERP Systems, Logistics Platforms & Enterprise Applications",
  heroSubheadline:
    "I help startups, SMEs, and enterprise businesses transform ideas into production-grade web applications using Next.js, React, Node.js, and modern software architecture.",
  aboutStory:
    "I started as a frontend developer and evolved into a full stack consultant building production systems for logistics (HeyCouriers), manufacturing ERPs (Hasten Extrusions, Aluka Extrusion), procurement platforms (SmartBuyer/PROCEM), and healthcare marketplaces (PharmaLinkage). My focus is delivering measurable business outcomes — faster operations, reduced manual work, and software that scales with your growth.",
  targetClients: [
    "SaaS Founders",
    "Startups",
    "SMEs",
    "Enterprise Companies",
    "Manufacturing Businesses",
    "Logistics Companies",
    "Healthcare Organizations",
  ],
  resumePath: RESUME_PATH,
  profileImage: PROFILE_IMAGE,
};
