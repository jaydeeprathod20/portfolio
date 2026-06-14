"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import { technologyGroups } from "@/data/technologies";

export function TechnologiesSection() {
  return (
    <Section id="technologies" className="bg-muted/30">
      <SectionHeader
        label="Technology"
        title="Modern Stack for Scalable Applications"
        description="Proven technologies chosen for performance, maintainability, and long-term scalability."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {technologyGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <GlassCard className="h-full">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-400">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
