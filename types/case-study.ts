export interface CaseStudyImage {
  src: string;
  alt: string;
  label?: string;
  width?: number;
  height?: number;
}

export interface CaseStudyContent {
  slug: string;
  assetFolder: string;
  title: string;
  tagline: string;
  liveUrl?: string;
  overview: string;
  description: string;
  businessProblem: string;
  role: string;
  responsibilities: string[];
  challenges: string[];
  solution: string;
  features: string[];
  featureBreakdown: { title: string; description: string }[];
  technologies: string[];
  architecture: string[];
  timeline: string;
  businessImpact: string[];
  keyMetrics: { label: string; value: string }[];
  category: string;
  featured: boolean;
  featuredOrder?: number;
}

export interface CaseStudy extends CaseStudyContent {
  images: CaseStudyImage[];
  heroImage: string;
  challenge: string;
}
