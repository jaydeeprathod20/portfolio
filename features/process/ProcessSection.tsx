"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <Section id="process" className="bg-muted/30">
      <SectionHeader
        label="Process"
        title="A Proven Development Process"
        description="Structured approach from discovery to deployment — transparent, predictable, and focused on outcomes."
      />

      <div className="relative">
        <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent md:block lg:left-1/2 lg:-translate-x-px" />

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="hidden h-4 w-4 shrink-0 rounded-full border-2 border-indigo-500 bg-background md:absolute md:left-8 lg:left-1/2 lg:-translate-x-2" />

              <div
                className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 lg:pr-16" : "md:pl-8 lg:pl-16"
                } ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}
              >
                <GlassCard>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </GlassCard>
              </div>

              <div className="hidden w-[calc(50%-2rem)] md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
