import type { Metadata } from "next";
import { SITE_URL } from "@/constants/site";
import { siteConfig } from "@/data/profile";

const title = `${siteConfig.name} | Software Consultant & Full Stack Developer`;
const description = siteConfig.heroSubheadline;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "Software Consultant",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "SaaS Development",
    "ERP Development",
    "Logistics Platform",
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
        alt: `${siteConfig.name} - Software Consultant`,
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
      "Node.js",
      "MongoDB",
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
    name: `${siteConfig.name} - Software Consultancy`,
    description: siteConfig.heroSubheadline,
    url: SITE_URL,
    areaServed: "Worldwide",
    serviceType: [
      "SaaS Development",
      "ERP Development",
      "Custom Software Development",
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
