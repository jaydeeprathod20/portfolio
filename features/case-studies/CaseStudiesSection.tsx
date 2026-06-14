"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import type { CaseStudy } from "@/types/case-study";
import { cn } from "@/utils/cn";

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = caseStudies[activeIndex];

  if (!activeStudy) return null;

  return (
    <Section id="case-studies">
      <SectionHeader
        label="Case Studies"
        title="Real Systems Built for Real Businesses"
        description="Production-grade applications across logistics, manufacturing ERP, procurement, and healthcare — built with React, Node.js, and MongoDB."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {caseStudies.map((study, index) => (
          <button
            key={study.slug}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              activeIndex === index
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
            )}
          >
            {study.title}
          </button>
        ))}
      </div>

      <FadeIn key={activeStudy.slug}>
        <GlassCard hover={false} className="overflow-hidden p-0">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden bg-muted/20 lg:aspect-auto lg:min-h-[480px]">
              <Image
                src={activeStudy.heroImage}
                alt={activeStudy.title}
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20" />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <Badge className="mb-4 w-fit">{activeStudy.category}</Badge>
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                {activeStudy.title}
              </h3>
              <p className="mt-2 text-indigo-400">{activeStudy.tagline}</p>
              <p className="mt-4 text-muted-foreground">{activeStudy.overview}</p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {activeStudy.keyMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <p className="text-lg font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeStudy.technologies.slice(0, 5).map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8">
                <Button href={`/case-studies/${activeStudy.slug}`}>
                  View Full Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/case-studies/${study.slug}`}>
              <GlassCard className="group h-full">
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-muted/20">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <Badge className="mb-2">{study.category}</Badge>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  {study.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {study.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.keyMetrics.slice(0, 2).map((metric) => (
                    <span
                      key={metric.label}
                      className="text-xs text-muted-foreground"
                    >
                      <span className="font-semibold text-foreground">
                        {metric.value}
                      </span>{" "}
                      {metric.label}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
