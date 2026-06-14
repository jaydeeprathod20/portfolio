"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import { businessDomains } from "@/data/domains";

export function DomainsSection() {
  return (
    <Section id="domains">
      <SectionHeader
        label="Industries"
        title="Business Domains I Specialize In"
        description="Deep experience across industries where custom software creates measurable operational impact."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {businessDomains.map((domain) => (
          <motion.div
            key={domain.id}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <GlassCard className="group h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 transition-colors group-hover:bg-indigo-500/20">
                <domain.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {domain.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {domain.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
