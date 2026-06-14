import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  User,
  Calendar,
  Target,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { ProjectGallery } from "@/features/case-studies/ProjectGallery";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/data/case-studies";
import { SITE_URL } from "@/constants/site";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} Case Study`,
    description: study.overview,
    openGraph: {
      title: `${study.title} | Case Study`,
      description: study.overview,
      images: [{ url: study.heroImage, alt: study.title }],
    },
    alternates: {
      canonical: `${SITE_URL}/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <>
      <Header />
      <main className="pt-20">
        <Section containerClassName="max-w-5xl">
          <Link
            href="/#case-studies"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <Badge className="mb-4">{study.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-3 text-xl text-indigo-400">{study.tagline}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {study.overview}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {study.keyMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="text-2xl font-bold text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-muted/20">
            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </div>
        </Section>

        <Section className="bg-muted/30">
          <div className="grid gap-8 lg:grid-cols-2">
            <GlassCard hover={false}>
              <div className="mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-indigo-400" />
                <h2 className="text-xl font-semibold text-foreground">
                  Business Problem
                </h2>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {study.businessProblem}
              </p>
            </GlassCard>
            <GlassCard hover={false}>
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <h2 className="text-xl font-semibold text-foreground">
                  Solution
                </h2>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {study.solution}
              </p>
            </GlassCard>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-3">
            <GlassCard hover={false} className="lg:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-indigo-400" />
                <h2 className="text-lg font-semibold text-foreground">
                  My Role
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {study.role}
              </p>
              <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
                Responsibilities
              </h3>
              <ul className="space-y-2">
                {study.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard hover={false} className="lg:col-span-2">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Challenges & How They Were Solved
              </h2>
              <ul className="space-y-4">
                {study.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </Section>

        <Section className="bg-muted/30">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Feature Breakdown
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {study.featureBreakdown.map((feature) => (
              <GlassCard key={feature.title}>
                <h3 className="mb-2 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Project Gallery
          </h2>
          <p className="mb-8 text-muted-foreground">
            {study.images.length} production screenshots — click any image to
            open the lightbox viewer.
          </p>
          <ProjectGallery images={study.images} title={study.title} />
        </Section>

        <Section className="bg-muted/30">
          <div className="grid gap-8 lg:grid-cols-2">
            <GlassCard hover={false}>
              <div className="mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-indigo-400" />
                <h2 className="text-lg font-semibold text-foreground">
                  Architecture Overview
                </h2>
              </div>
              <ul className="space-y-3">
                {study.architecture.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard hover={false}>
              <div className="mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-indigo-400" />
                <h2 className="text-lg font-semibold text-foreground">
                  Timeline
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {study.timeline}
              </p>

              <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-3">
            <GlassCard hover={false}>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Key Features
              </h2>
              <ul className="space-y-2">
                {study.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard hover={false}>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Business Impact
              </h2>
              <ul className="space-y-2">
                {study.businessImpact.map((impact) => (
                  <li
                    key={impact}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {impact}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard hover={false}>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                All Screenshots
              </h2>
              <ul className="max-h-64 space-y-2 overflow-y-auto">
                {study.images.map((image) => (
                  <li
                    key={image.src}
                    className="text-sm text-muted-foreground"
                  >
                    {image.label ?? image.alt}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-muted-foreground">
              Need a similar system for your business?
            </p>
            <Button href="/#contact" size="lg">
              Book a Consultation
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
