"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import { whyHireReasons } from "@/data/process";

export function WhyHireSection() {
  return (
    <Section id="why-hire">
    <SectionHeader
  label="Professional Strengths"
  title="What Sets Me Apart"
  description="Experience building enterprise applications, solving business challenges, and delivering scalable solutions with modern web technologies."
/>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyHireReasons.map((reason) => (
          <motion.div
            key={reason.id}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <GlassCard className="group h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 transition-colors group-hover:bg-indigo-500/20">
                <reason.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
