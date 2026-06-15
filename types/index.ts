import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustIndicator {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface BusinessDomain {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  icon: LucideIcon;
}

export type {
  CaseStudy,
  CaseStudyContent,
  CaseStudyImage,
} from "@/types/case-study";

export interface TechnologyGroup {
  category: string;
  items: string[];
}

export interface WhyHireReason {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectDetails: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

export interface SiteConfig {
  name: string;
  role: string;
  headline: string;
  experience: string;
  location: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutStory: string;
  aboutParagraphs: string[];
  workExperience: WorkExperience[];
  targetClients: string[];
  resumePath: string;
  profileImage: string;
}
