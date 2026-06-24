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
  label="Technical Skills"
  title="Modern Technologies & Development Tools"
  description="Technologies I've used to build enterprise applications, logistics platforms, admin dashboards, and frontend-led web solutions."
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
