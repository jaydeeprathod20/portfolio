import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";
import { getCaseStudySlugs } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyEntries = getCaseStudySlugs().map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...caseStudyEntries,
  ];
}
