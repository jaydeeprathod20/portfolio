"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeader
        label="Testimonials"
        title="What Clients Say"
        description="Feedback from businesses I've helped build and scale their software products."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <GlassCard className="relative h-full">
              <Quote className="mb-4 h-8 w-8 text-indigo-400/30" />
              <p className="mb-6 text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
