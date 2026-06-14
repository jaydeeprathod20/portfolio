import type { CaseStudy, CaseStudyContent } from "@/types/case-study";
import { caseStudyContents } from "@/data/case-studies-content";
import {
  getProjectHeroImage,
  getProjectImagesFromFolder,
  hasProjectScreenshots,
} from "@/lib/project-images";

function mergeCaseStudy(content: CaseStudyContent): CaseStudy | null {
  if (!hasProjectScreenshots(content.assetFolder)) return null;

  const images = getProjectImagesFromFolder(
    content.assetFolder,
    content.title
  );
  const heroImage = getProjectHeroImage(content.assetFolder, content.title);

  return {
    ...content,
    images,
    heroImage,
    challenge: content.challenges[0] ?? content.businessProblem,
  };
}

export function getCaseStudies(): CaseStudy[] {
  return caseStudyContents
    .map(mergeCaseStudy)
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const content = caseStudyContents.find((study) => study.slug === slug);
  if (!content) return undefined;
  return mergeCaseStudy(content) ?? undefined;
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getCaseStudies().filter((study) => study.featured);
}

export function getCaseStudySlugs(): string[] {
  return getCaseStudies().map((study) => study.slug);
}
