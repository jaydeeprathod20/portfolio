import type { Metadata } from "next";
import { SITE_URL } from "@/constants/site";
import { siteConfig } from "@/data/profile";

const title = `${siteConfig.name} | Senior React Developer`;
const description = siteConfig.heroSubheadline;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "Senior React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "React Frontend Developer",
    "Node.js Hands-on Exposure",
    "Express.js Hands-on Exposure",
    "MongoDB Hands-on Exposure",
    "ERP Development",
    "SaaS Development",
    "Enterprise Applications",
    "Jaydeep Rathod",
    "Ahmedabad Developer",
  ],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Senior React Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.heroSubheadline,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Software Development",
      "SaaS Development",
      "ERP Systems",
      "Next.js",
      "React",
      "Node.js hands-on exposure",
      "Express.js hands-on exposure",
      "MongoDB hands-on exposure",
    ],
    sameAs: [
      process.env.NEXT_PUBLIC_LINKEDIN,
      process.env.NEXT_PUBLIC_GITHUB,
    ].filter(Boolean),
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - Senior React Development`,
    description: siteConfig.heroSubheadline,
    url: SITE_URL,
    areaServed: "Worldwide",
    serviceType: [
      "React.js Development",
      "Next.js Development",
      "ERP Frontend Development",
      "Frontend Architecture",
      "Web Application Development",
    ],
    provider: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

export function generateFAQSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
